import { window, StatusBarAlignment, StatusBarItem } from 'vscode'
import { COMMAND_NAME, ENABLED_TEXT } from '../constants'

const PRETTIER_STATUS_BAR_PRIORITY = -1
const initStatusBar = (): StatusBarItem => {
  // `-1` matches the Prettier extension’s status bar priority. We substract
  // one so that it is always to the right. If we don’t do this, the position
  // sometimes switches randomly.
  const statusBar = window.createStatusBarItem(
    StatusBarAlignment.Right,
    PRETTIER_STATUS_BAR_PRIORITY - 1
  )
  statusBar.command = `extension.${COMMAND_NAME}`
  statusBar.tooltip = 'Enable/Disable formatting'
  statusBar.show()

  return statusBar
}

export default initStatusBar
