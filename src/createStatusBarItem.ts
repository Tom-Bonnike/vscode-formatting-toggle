import { window, StatusBarAlignment } from 'vscode'
import { COMMAND_NAME } from './constants'
import getStatusBarText from './helpers/getStatusBarText'

// Taken from the `prettier-vscode` repo.
const PRETTIER_STATUS_BAR_PRIORITY = -1
const TOOLTIP_TEXT = 'Enable/Disable formatting'

const createStatusBarItem = () => {
  const statusBarItem = window.createStatusBarItem(
    StatusBarAlignment.Right,
    // We substract one so that it is always to the right of the Prettier status
    // bar item. If we didn’t do this, the position could switch randomly.
    PRETTIER_STATUS_BAR_PRIORITY - 1,
  )

  statusBarItem.command = COMMAND_NAME
  statusBarItem.tooltip = TOOLTIP_TEXT
  statusBarItem.text = getStatusBarText()
  statusBarItem.show()

  return statusBarItem
}

export default createStatusBarItem
