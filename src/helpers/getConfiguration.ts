import { workspace, window, WorkspaceConfiguration } from 'vscode'
import { get } from 'lodash'

type ConfigurationNamespace = 'editor' | 'formattingToggle'

const getConfiguration = (
  namespace: ConfigurationNamespace
): WorkspaceConfiguration =>
  workspace.getConfiguration(
    namespace,
    get(window, 'activeTextEditor.document.uri')
  )

export default getConfiguration
