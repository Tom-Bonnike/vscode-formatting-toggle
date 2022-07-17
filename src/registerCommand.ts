import { commands, ConfigurationTarget, workspace } from 'vscode'
import {
  COMMAND_NAME,
  DEFAULT_AFFECTS_CONFIGURATION,
  EDITOR_CODE_ACTIONS_ON_SAVE_PATH,
} from './constants'
import getFormattingStatus from './helpers/getFormattingStatus'

const registerCommand = () =>
  commands.registerCommand(COMMAND_NAME, () => {
    const configuration = workspace.getConfiguration()
    const affectsConfiguration = configuration.get(
      'formattingToggle.affects',
      DEFAULT_AFFECTS_CONFIGURATION,
    )
    const isFormattingActivated = getFormattingStatus()

    // Updating the configuration will trigger the `onDidChangeConfiguration`
    // handler which will correctly update the text and icon in the status bar.
    affectsConfiguration.forEach(setting => {
      if (!setting.startsWith(EDITOR_CODE_ACTIONS_ON_SAVE_PATH)) {
        return configuration.update(
          setting,
          !isFormattingActivated,
          ConfigurationTarget.Global,
        )
      }

      const codeActionsOnSaveConfiguration = workspace.getConfiguration(
        EDITOR_CODE_ACTIONS_ON_SAVE_PATH,
      )
      const codeActionsOnSaveSetting =
        setting.split(EDITOR_CODE_ACTIONS_ON_SAVE_PATH + '.').at(-1) || ''
      const newCodeActionsOnSaveConfiguration = {
        ...codeActionsOnSaveConfiguration,
        [codeActionsOnSaveSetting]: !isFormattingActivated,
      }

      return configuration.update(
        EDITOR_CODE_ACTIONS_ON_SAVE_PATH,
        newCodeActionsOnSaveConfiguration,
        ConfigurationTarget.Global,
      )
    })
  })

export default registerCommand
