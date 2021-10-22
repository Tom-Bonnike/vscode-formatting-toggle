import {
  FORMATTING_SETTINGS,
  DEFAULT_AFFECTS_CONFIGURATION,
  FormattingSettings,
} from '../../constants'
import getConfiguration from '../getConfiguration'

export type FormattingConfiguration = {
  [key in FormattingSettings]: boolean
}

const getIsFormattingActivated = () => {
  const editorConfiguration = getConfiguration('editor')
  const formattingToggleConfiguration = getConfiguration('formattingToggle')
  const affectsConfiguration = formattingToggleConfiguration.get(
    'affects',
    DEFAULT_AFFECTS_CONFIGURATION,
  )
  const isAnyRelevantSettingActivated = FORMATTING_SETTINGS.some(setting => {
    const isRelevantSetting = affectsConfiguration.includes(setting)
    const isSettingActivated = editorConfiguration.get(setting, false)

    return isRelevantSetting && isSettingActivated
  })

  return isAnyRelevantSettingActivated
}

export default getIsFormattingActivated
