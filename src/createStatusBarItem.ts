import { window, StatusBarAlignment } from 'vscode'
import { COMMAND_NAME } from './constants'
import getStatusBarText from './helpers/getStatusBarText'

// Taken from the `prettier-vscode` repo.
const PRETTIER_STATUS_BAR_PRIORITY = -1
const TOOLTIP_TEXT = 'Enable/Disable the formatter'

const createStatusBarItem = () => {
  const statusBar = window.createStatusBarItem(
    StatusBarAlignment.Right,
    // We substract one so that it is always to the right of the Prettier status
    // bar item. If we didn’t do this, the position could switch randomly.
    PRETTIER_STATUS_BAR_PRIORITY - 1
  )

  statusBar.command = COMMAND_NAME
  statusBar.tooltip = TOOLTIP_TEXT
  statusBar.text = getStatusBarText()
  statusBar.show()

  return statusBar
}

export default createStatusBarItem
