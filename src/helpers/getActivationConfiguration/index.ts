import { WorkspaceConfiguration } from 'vscode'

// This should be kept in sync with the default specified in the `package.json`
// file: `contributes.configuration.properties.formattingToggle.activate.default`.
export const DEFAULT_ACTIVATION_CONFIGURATION = [
  'formatOnPaste',
  'formatOnSave'
]

const getActivationConfiguration = (
  extensionConfiguration: WorkspaceConfiguration
): Array<string> =>
  extensionConfiguration.get('activate', DEFAULT_ACTIVATION_CONFIGURATION)

export default getActivationConfiguration
