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
const getStatusBarText = (shouldDisable : boolean) : string =>
  shouldDisable ? ENABLED_TEXT : DISABLED_TEXT
const initCommand = (
  editorConfiguration: WorkspaceConfiguration,
  initialFormattingConfiguration: FormattingConfiguration,
  statusBar: StatusBarItem
): Disposable => {
  // We should disable if any of the initial formatting setting is set to `true`.
  let shouldDisable = Object.values(initialFormattingConfiguration).some(
    Boolean
  )
  statusBar.text = getStatusBarText(shouldDisable)

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

      // Set the formatting setting back to `true`, only if it had an initial
      // value.
      // Note: all formatting settings default to `false` if not specified.
      if (hasInitialValue) {
        editorConfiguration.update(setting, true, CONFIGURATION_TARGET)
      }
    })

    shouldDisable = !shouldDisable
    statusBar.text = getStatusBarText(shouldDisable)
  })
}

export default initCommand
