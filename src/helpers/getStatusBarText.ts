import { ENABLED_TEXT, DISABLED_TEXT } from '../constants'

const getStatusBarText = (shouldDisable: boolean): string =>
  shouldDisable ? ENABLED_TEXT : DISABLED_TEXT

export default getStatusBarText
