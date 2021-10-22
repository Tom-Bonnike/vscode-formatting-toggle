import getFormattingStatus from '../getFormattingStatus'

export const ENABLED_TEXT = 'Formatting: $(check)'
export const DISABLED_TEXT = 'Formatting: $(x)'

const getStatusBarText = () => {
  const isFormattingActivated = getFormattingStatus()

  return isFormattingActivated ? ENABLED_TEXT : DISABLED_TEXT
}

export default getStatusBarText
