import { ExtensionContext } from 'vscode'
import getEditorConfiguration from './helpers/getEditorConfiguration'
import getFormattingConfiguration from './helpers/getFormattingConfiguration'
import isFormattingActivated from './helpers/isFormattingActivated'
import initStatusBar from './initStatusBar'
import initCommand from './initCommand'
import handleOnDidChangeConfiguration from './handleOnDidChangeConfiguration'

export function activate(extensionContext: ExtensionContext) {
  const initialFormattingConfiguration = getFormattingConfiguration(
    getEditorConfiguration()
  )
  const initialToggleStatus = isFormattingActivated(
    initialFormattingConfiguration
  )

  extensionContext.globalState.update(
    'SAVED_FORMATTING_CONFIGURATION',
    initialFormattingConfiguration
  )
  extensionContext.globalState.update('TOGGLE_STATUS', initialToggleStatus)

  const statusBar = initStatusBar(initialToggleStatus)
  const command = initCommand(extensionContext, statusBar)
  const onDidChangeConfigurationHandler = handleOnDidChangeConfiguration(
    extensionContext,
    statusBar
  )

  extensionContext.subscriptions.push(statusBar)
  extensionContext.subscriptions.push(command)
  extensionContext.subscriptions.push(onDidChangeConfigurationHandler)
}

export function deactivate() {}
