import {
  commands,
  WorkspaceConfiguration,
  Disposable,
  StatusBarItem
} from 'vscode'
import {
  COMMAND_NAME,
  FORMATTING_SETTINGS,
  CONFIGURATION_TARGET,
  ENABLED_TEXT,
  DISABLED_TEXT
} from '../constants'
import { FormattingConfiguration } from './getInitialFormattingConfiguration'

const getStatusBarText = (shouldDisable: boolean): string =>
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
      if (shouldDisable) {
        return editorConfiguration.update(setting, false, CONFIGURATION_TARGET)
      }

      // Set the formatting setting back to its initial value.
      const initialValue = initialFormattingConfiguration[setting]
      editorConfiguration.update(setting, initialValue, CONFIGURATION_TARGET)
    })

    shouldDisable = !shouldDisable
    statusBar.text = getStatusBarText(shouldDisable)
  })
}

export default initCommand
