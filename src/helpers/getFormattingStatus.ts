import { workspace } from 'vscode'
import {
  DEFAULT_AFFECTS_CONFIGURATION,
  EDITOR_CODE_ACTIONS_ON_SAVE_PATH,
} from '../constants'

const getFormattingStatus = () => {
  const configuration = workspace.getConfiguration()
  const affectsConfiguration = configuration.get(
    'formattingToggle.affects',
    DEFAULT_AFFECTS_CONFIGURATION,
  )
  const isAnyRelevantSettingActivated = affectsConfiguration.some(setting => {
    if (!setting.startsWith(EDITOR_CODE_ACTIONS_ON_SAVE_PATH)) {
      const isSettingActivated = configuration.get(setting, false)

      return isSettingActivated
    }

    const codeActionsOnSaveConfiguration = workspace.getConfiguration(
      EDITOR_CODE_ACTIONS_ON_SAVE_PATH,
    )
    const codeActionsOnSaveSetting =
      setting.split(EDITOR_CODE_ACTIONS_ON_SAVE_PATH + '.').at(-1) || ''
    const isCodeActionsOnSaveSettingActivated = Boolean(
      codeActionsOnSaveConfiguration[codeActionsOnSaveSetting],
    )

    return isCodeActionsOnSaveSettingActivated
  })

  return isAnyRelevantSettingActivated
}

export default getFormattingStatus
