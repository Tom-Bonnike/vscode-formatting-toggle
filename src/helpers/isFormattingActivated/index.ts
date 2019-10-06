import { FORMATTING_SETTINGS } from '../../constants'
import getConfiguration from '../getConfiguration'

export type FormattingConfiguration = {
  formatOnPaste: boolean
  formatOnSave: boolean
  formatOnType: boolean
}

export const getFormattingConfiguration = () => {
  const editorConfiguration = getConfiguration('editor')
  const formattingConfiguration = FORMATTING_SETTINGS.reduce(
    (configuration, setting) => {
      configuration[
        setting as keyof FormattingConfiguration
      ] = editorConfiguration.get(setting, false)

      return configuration
    },
    {} as FormattingConfiguration
  )

  return formattingConfiguration
}

const isFormattingActivated = () => {
  const formattingConfiguration = getFormattingConfiguration()

  return Object.values(formattingConfiguration).some(Boolean)
}

export default isFormattingActivated
