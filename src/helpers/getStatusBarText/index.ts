import { workspace, WorkspaceConfiguration } from 'vscode'
import getFormattingStatus from '../getFormattingStatus'

type StatusBarLabelT = {
  formattingEnabled: string
  formattingDisabled: string
};

export const getStatusBarText = (): string => {
  const isFormattingActivated = getFormattingStatus()

  const configuration: WorkspaceConfiguration = workspace.getConfiguration();
  let statusBarLabel: StatusBarLabelT | undefined

  statusBarLabel = configuration.get<StatusBarLabelT>(
    'formattingToggle.statusBarLabel'
  );

  const ENABLED_TEXT = statusBarLabel!.formattingEnabled
  const DISABLED_TEXT = statusBarLabel!.formattingDisabled

  return isFormattingActivated ? ENABLED_TEXT : DISABLED_TEXT
}

export default getStatusBarText
