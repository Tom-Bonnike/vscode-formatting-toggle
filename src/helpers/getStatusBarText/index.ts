import { ENABLED_TEXT, DISABLED_TEXT } from '../../constants'

const getStatusBarText = (toggleStatus: boolean): string =>
  toggleStatus ? ENABLED_TEXT : DISABLED_TEXT

export default getStatusBarText
