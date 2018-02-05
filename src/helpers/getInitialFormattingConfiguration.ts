import { WorkspaceConfiguration } from 'vscode'

type FormattingConfiguration = {
  [formatOnPaste : string]: boolean
  formatOnSave: boolean
  formatOnType: boolean
}

const DEFAULT_FORMATTING_VALUE = false

const getInitialFormattingConfiguration =
  (editorConfiguration: WorkspaceConfiguration) : FormattingConfiguration => {
    const initialFormattingConfiguration: FormattingConfiguration = {
      formatOnPaste:
        editorConfiguration.get('formatOnPaste', DEFAULT_FORMATTING_VALUE),
      formatOnSave:
        editorConfiguration.get('formatOnSave', DEFAULT_FORMATTING_VALUE),
      formatOnType:
        editorConfiguration.get('formatOnType', DEFAULT_FORMATTING_VALUE)
    }

    return initialFormattingConfiguration
  }

export default getInitialFormattingConfiguration
