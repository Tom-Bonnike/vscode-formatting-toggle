import { workspace, ExtensionContext, StatusBarItem, Disposable } from 'vscode'
import getEditorConfiguration from './helpers/getEditorConfiguration'
import getFormattingConfiguration from './helpers/getFormattingConfiguration'
import isFormattingActivated from './helpers/isFormattingActivated'
import getStatusBarText from './helpers/getStatusBarText'

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
        getEditorConfiguration()
      )
      const shouldDisable = isFormattingActivated(newFormattingConfiguration)

      extensionContext.globalState.update('TOGGLE_STATUS', shouldDisable)
      statusBar.text = getStatusBarText(shouldDisable)
    }
  })

export default initOnDidChangeConfigurationHandler
