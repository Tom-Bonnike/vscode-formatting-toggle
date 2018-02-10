import { window, StatusBarItem, StatusBarAlignment } from 'vscode'
import {
  COMMAND_NAME,
  PRETTIER_STATUS_BAR_PRIORITY,
  TOOLTIP_TEXT
} from './constants'
import getStatusBarText from './helpers/getStatusBarText'

const initStatusBar = (initialToggleStatus: boolean): StatusBarItem => {
  // `-1` matches the Prettier extension’s status bar priority (position). We
  // substract one so that it is always to the right. If we didn’t do this, the
  // position would sometimes switch randomly.
  const statusBar = window.createStatusBarItem(
    StatusBarAlignment.Right,
    PRETTIER_STATUS_BAR_PRIORITY - 1
  )
  statusBar.command = `extension.${COMMAND_NAME}`
  statusBar.tooltip = TOOLTIP_TEXT
  statusBar.text = getStatusBarText(initialToggleStatus)
  statusBar.show()

  return statusBar
}

export default initStatusBar
