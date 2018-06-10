import { commands, ExtensionContext, StatusBarItem, Disposable } from 'vscode'
import {
  COMMAND_NAME,
  FORMATTING_SETTINGS,
  CONFIGURATION_TARGET
} from './constants'
import getConfiguration from './helpers/getConfiguration'
import getStatusBarText from './helpers/getStatusBarText'

const initCommand = (
  extensionContext: ExtensionContext,
  statusBar: StatusBarItem
): Disposable =>
  commands.registerCommand(`extension.${COMMAND_NAME}`, () => {
    const editorConfiguration = getConfiguration('editor')
    const activationConfiguration: Array<
      string
    > = extensionContext.globalState.get('ACTIVATION_CONFIGURATION', [])
    const shouldDisable: boolean = extensionContext.globalState.get(
      'TOGGLE_STATUS',
      false
    )

    // Updating the configuration programmatically will trigger multiple
    // `onDidChangeConfiguration` events. We need to ignore those to not
    // unnecessarily toggle the status bar text.
    extensionContext.globalState.update(
      'SHOULD_IGNORE_CONFIGURATION_CHANGES',
      true
    )

    FORMATTING_SETTINGS.forEach(setting => {
      if (shouldDisable) {
        return editorConfiguration.update(setting, false, CONFIGURATION_TARGET)
      }

      if (activationConfiguration.includes(setting)) {
        return editorConfiguration.update(setting, true, CONFIGURATION_TARGET)
      }
    })

    setTimeout(() => {
      // Start listening to configuration changes again.
      // We can’t do this in the change handler and we need to use `setTimeout`
      // because of race conditions. It’s probably fine… :~}
      extensionContext.globalState.update(
        'SHOULD_IGNORE_CONFIGURATION_CHANGES',
        false
      )
    }, 1000)

    extensionContext.globalState.update('TOGGLE_STATUS', !shouldDisable)
    statusBar.text = getStatusBarText(!shouldDisable)
  })

export default initCommand
