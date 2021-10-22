import { workspace, window } from 'vscode'

type ConfigurationNamespace = 'editor' | 'formattingToggle'

const getConfiguration = (namespace: ConfigurationNamespace) =>
  workspace.getConfiguration(
    namespace,
    window.activeTextEditor ? window.activeTextEditor.document.uri : null,
  )

export default getConfiguration
