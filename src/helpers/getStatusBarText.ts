import { workspace } from 'vscode'
import { DEFAULT_STATUS_BAR_TEXT_CONFIGURATION } from '../../constants'
import getFormattingStatus from '../getFormattingStatus'

export const getStatusBarText = () => {
  const isFormattingActivated = getFormattingStatus()
  const configuration = workspace.getConfiguration();
  const {
    formattingEnabled: enabledText,
    formattingDisabled: disabledText
  } = configuration.get(
    'formattingToggle.statusBarText',
    DEFAULT_STATUS_BAR_TEXT_CONFIGURATION
  );

  return isFormattingActivated ? enabledText : disabledText
}

export default getStatusBarText
