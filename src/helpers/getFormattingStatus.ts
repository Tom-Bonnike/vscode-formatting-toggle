import { workspace } from 'vscode'
import { DEFAULT_AFFECTS_CONFIGURATION } from '../constants'

const getFormattingStatus = () => {
  const configuration = workspace.getConfiguration()
  const affectsConfiguration = configuration.get(
    'formattingToggle.affects',
    DEFAULT_AFFECTS_CONFIGURATION,
  )
  const isAnyRelevantSettingActivated = affectsConfiguration.some(setting => {
    const isSettingActivated = configuration.get(setting, false)

    return isSettingActivated
  })

  return isAnyRelevantSettingActivated
}

export default getFormattingStatus
