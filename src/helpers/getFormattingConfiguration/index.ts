import { WorkspaceConfiguration } from 'vscode'
import { FORMATTING_SETTINGS } from '../../constants'

export type FormattingConfiguration = {
  [formatOnPaste: string]: boolean
  formatOnSave: boolean
  formatOnType: boolean
}

const getFormattingConfiguration = (
  editorConfiguration: WorkspaceConfiguration
): FormattingConfiguration => {
  const formattingConfiguration: FormattingConfiguration = FORMATTING_SETTINGS.reduce(
    (configuration, setting) => {
      configuration[setting] = editorConfiguration.get(setting, false)

      return configuration
    },
    {} as FormattingConfiguration
  )

  return formattingConfiguration
}

export default getFormattingConfiguration
