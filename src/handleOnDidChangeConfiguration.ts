import { workspace, StatusBarItem, Disposable } from 'vscode'
import getEditorConfiguration from './helpers/getEditorConfiguration'
import getFormattingConfiguration from './helpers/getFormattingConfiguration'
import isFormattingActivated from './helpers/isFormattingActivated'
import getStatusBarText from './helpers/getStatusBarText'
import store from './store'

const handleOnDidChangeConfiguration = (statusBar: StatusBarItem): Disposable =>
  workspace.onDidChangeConfiguration(event => {
    const { SHOULD_IGNORE_CONFIGURATION_CHANGE } = store.getState()

    // If the changes were triggered programmatically by the extension, ignore
    // the event to not unnecessarily toggle the status bar text.
    if (SHOULD_IGNORE_CONFIGURATION_CHANGE) {
      // Start listening to changes again.
      return store.setState({ SHOULD_IGNORE_CONFIGURATION_CHANGE: false })
    }

    if (event.affectsConfiguration('editor')) {
      const disableStatus = isFormattingActivated(
        getFormattingConfiguration(getEditorConfiguration())
      )

      statusBar.text = getStatusBarText(disableStatus)
    }
  })

export default handleOnDidChangeConfiguration
