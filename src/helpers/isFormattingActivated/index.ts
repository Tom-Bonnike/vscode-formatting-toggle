import { FORMATTING_SETTINGS } from '../../constants'
import getConfiguration from '../getConfiguration'

export type FormattingConfiguration = {
  formatOnPaste: boolean
  formatOnSave: boolean
  formatOnType: boolean
}

const isFormattingActivated = () => {
  const editorConfiguration = getConfiguration('editor')
  const isAnySettingActivated = FORMATTING_SETTINGS.some(setting =>
    editorConfiguration.get(setting, false)
  )

  return isAnySettingActivated
}

export default isFormattingActivated
