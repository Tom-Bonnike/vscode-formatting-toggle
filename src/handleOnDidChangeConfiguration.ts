import { workspace, ExtensionContext, StatusBarItem, Disposable } from 'vscode'
import getEditorConfiguration from './helpers/getEditorConfiguration'
import getFormattingConfiguration from './helpers/getFormattingConfiguration'
import isFormattingActivated from './helpers/isFormattingActivated'
import getStatusBarText from './helpers/getStatusBarText'

const handleOnDidChangeConfiguration = (
  extensionContext: ExtensionContext,
  statusBar: StatusBarItem
): Disposable =>
  workspace.onDidChangeConfiguration(event => {
    const shouldIgnoreConfigurationChange = extensionContext.globalState.get(
      'SHOULD_IGNORE_CONFIGURATION_CHANGES',
      false
    )

    // If the changes were triggered programmatically by the extension, ignore
    // the event to not unnecessarily toggle the status bar text.
    if (shouldIgnoreConfigurationChange) {
      // Start listening to changes again.
      return extensionContext.globalState.update(
        'SHOULD_IGNORE_CONFIGURATION_CHANGES',
        false
      )
    }

    if (event.affectsConfiguration('editor')) {
      const newFormattingConfiguration = getFormattingConfiguration(
        getEditorConfiguration()
      )
      const shouldDisable = isFormattingActivated(newFormattingConfiguration)

      if (shouldDisable) {
        // Save the formatting configuration before disabling it so that it can
        // be restored later.
        extensionContext.globalState.update(
          'SAVED_CONFIGURATION',
          newFormattingConfiguration
        )
      }

      extensionContext.globalState.update('TOGGLE_STATUS', shouldDisable)
      statusBar.text = getStatusBarText(shouldDisable)
    }
  })

export default handleOnDidChangeConfiguration
