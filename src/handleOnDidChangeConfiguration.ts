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
      'SHOULD_IGNORE_CONFIGURATION_CHANGE',
      false
    )

    // If the changes were triggered programmatically by the extension, ignore
    // the event to not unnecessarily toggle the status bar text.
    if (shouldIgnoreConfigurationChange) {
      // Start listening to changes again.
      return extensionContext.globalState.update(
        'SHOULD_IGNORE_CONFIGURATION_CHANGE',
        false
      )
    }

    if (event.affectsConfiguration('editor')) {
      const disableStatus = isFormattingActivated(
        getFormattingConfiguration(getEditorConfiguration())
      )

      statusBar.text = getStatusBarText(disableStatus)
    }
  })

export default handleOnDidChangeConfiguration
