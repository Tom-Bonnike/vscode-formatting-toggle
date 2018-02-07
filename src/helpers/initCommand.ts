import {
  commands,
  ConfigurationTarget,
  WorkspaceConfiguration,
  Disposable,
  StatusBarItem
} from 'vscode'
import {
  COMMAND_NAME,
  FORMATTING_SETTINGS,
  ENABLED_TEXT,
  DISABLED_TEXT
} from '../constants'
import { FormattingConfiguration } from './getInitialFormattingConfiguration'

const CONFIGURATION_TARGET = ConfigurationTarget.Global
const initCommand = (
  editorConfiguration: WorkspaceConfiguration,
  initialFormattingConfiguration: FormattingConfiguration,
  statusBar: StatusBarItem
): Disposable => {
  let shouldDisable = true

  return commands.registerCommand(`extension.${COMMAND_NAME}`, () => {
    FORMATTING_SETTINGS.forEach(setting => {
      const hasInitialValue =
        typeof initialFormattingConfiguration[setting] !== 'undefined'

      if (shouldDisable) {
        editorConfiguration.update(
          setting,
          // Only set to `false` if it had an initial value, to not mess up the
          // user’s config. Setting to `undefined` would remove the setting from
          // the config.
          hasInitialValue ? false : undefined,
          CONFIGURATION_TARGET
        )

        return
      }

      // Set the formatting back to the initial configuration, only if it had
      // an initial value. All formatting settings default to `false`.
      if (hasInitialValue) {
        editorConfiguration.update(setting, true, CONFIGURATION_TARGET)
      }
    })

    statusBar.text = shouldDisable ? DISABLED_TEXT : ENABLED_TEXT
    shouldDisable = !shouldDisable
  })
}

export default initCommand
