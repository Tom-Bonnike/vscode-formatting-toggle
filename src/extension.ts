import { ExtensionContext } from 'vscode'
import getEditorConfiguration from './helpers/getEditorConfiguration'
import getFormattingConfiguration from './helpers/getFormattingConfiguration'
import isFormattingActivated from './helpers/isFormattingActivated'
import initStatusBar from './initStatusBar'
import initCommand from './initCommand'

export function activate(extensionContext: ExtensionContext) {
  const initialEditorConfiguration = getEditorConfiguration()
  const initialFormattingConfiguration = getFormattingConfiguration(
    initialEditorConfiguration
  )
  const initialDisableStatus = isFormattingActivated(
    initialFormattingConfiguration
  )
  const statusBar = initStatusBar(initialDisableStatus)
  const command = initCommand({
    statusBar,
    shouldDisable: initialDisableStatus,
    savedFormattingConfiguration: initialFormattingConfiguration
  })

  extensionContext.subscriptions.push(statusBar)
  extensionContext.subscriptions.push(command)
}

export function deactivate() {}
