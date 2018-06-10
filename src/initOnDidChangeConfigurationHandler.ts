import { workspace, ExtensionContext, StatusBarItem, Disposable } from 'vscode'
import getConfiguration from './helpers/getConfiguration'
import getFormattingConfiguration from './helpers/getFormattingConfiguration'
import isFormattingActivated from './helpers/isFormattingActivated'
import getStatusBarText from './helpers/getStatusBarText'
import getActivationConfiguration from './helpers/getActivationConfiguration'

const initOnDidChangeConfigurationHandler = (
  extensionContext: ExtensionContext,
  statusBar: StatusBarItem
): Disposable =>
  workspace.onDidChangeConfiguration(event => {
    if (
      extensionContext.globalState.get(
        'SHOULD_IGNORE_CONFIGURATION_CHANGES',
        false
      )
    ) {
      return
    }

    if (event.affectsConfiguration('editor')) {
      const newFormattingConfiguration = getFormattingConfiguration(
        getConfiguration('editor')
      )
      const shouldDisable = isFormattingActivated(newFormattingConfiguration)

      extensionContext.globalState.update('TOGGLE_STATUS', shouldDisable)
      statusBar.text = getStatusBarText(shouldDisable)
    }

    if (event.affectsConfiguration('formattingToggle')) {
      const newActivationConfiguration = getActivationConfiguration(
        getConfiguration('formattingToggle')
      )

      extensionContext.globalState.update(
        'ACTIVATION_CONFIGURATION',
        newActivationConfiguration
      )
    }
  })

export default initOnDidChangeConfigurationHandler
