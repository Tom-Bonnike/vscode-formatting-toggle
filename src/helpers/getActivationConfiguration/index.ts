import { WorkspaceConfiguration } from 'vscode'

export const DEFAULT_ACTIVATION_CONFIGURATION = [
  'formatOnPaste',
  'formatOnSave'
]

const getActivationConfiguration = (
  extensionConfiguration: WorkspaceConfiguration
): Array<string> =>
  extensionConfiguration.get('activate', DEFAULT_ACTIVATION_CONFIGURATION)

export default getActivationConfiguration
