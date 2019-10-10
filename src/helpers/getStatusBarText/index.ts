import isFormattingActivated from '../isFormattingActivated'

export const ENABLED_TEXT = 'Formatting: $(check)'
export const DISABLED_TEXT = 'Formatting: $(x)'

const getStatusBarText = () => {
  const shouldDisableFormatting = isFormattingActivated()

  return shouldDisableFormatting ? ENABLED_TEXT : DISABLED_TEXT
}

export default getStatusBarText
