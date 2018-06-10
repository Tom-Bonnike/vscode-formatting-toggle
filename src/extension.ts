import { ExtensionContext } from 'vscode'
import getConfiguration from './helpers/getConfiguration'
import getFormattingConfiguration from './helpers/getFormattingConfiguration'
import isFormattingActivated from './helpers/isFormattingActivated'
import getActivationConfiguration from './helpers/getActivationConfiguration'
import initStatusBar from './initStatusBar'
import initCommand from './initCommand'
import initOnDidChangeConfigurationHandler from './initOnDidChangeConfigurationHandler'

export function activate(extensionContext: ExtensionContext) {
  const initialFormattingConfiguration = getFormattingConfiguration(
    getConfiguration('editor')
  )
  const initialToggleStatus = isFormattingActivated(
    initialFormattingConfiguration
  )
  const activationConfiguration = getActivationConfiguration(
    getConfiguration('formattingToggle')
  )

  extensionContext.globalState.update('TOGGLE_STATUS', initialToggleStatus)
  extensionContext.globalState.update(
    'ACTIVATION_CONFIGURATION',
    activationConfiguration
  )

  const statusBar = initStatusBar(initialToggleStatus)
  const command = initCommand(extensionContext, statusBar)
  const onDidChangeConfigurationHandler = initOnDidChangeConfigurationHandler(
    extensionContext,
    statusBar
  )

  extensionContext.subscriptions.push(statusBar)
  extensionContext.subscriptions.push(command)
  extensionContext.subscriptions.push(onDidChangeConfigurationHandler)
}

export function deactivate() {}
