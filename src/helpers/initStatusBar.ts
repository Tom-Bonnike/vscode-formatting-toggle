import { window, StatusBarAlignment, StatusBarItem } from 'vscode'
import { COMMAND_NAME, ENABLED_TEXT } from '../constants'

const initStatusBar = (): StatusBarItem => {
  // `-1` matches the Prettier extension’s status bar priority.
  const statusBar = window.createStatusBarItem(StatusBarAlignment.Right, -1)
  statusBar.command = `extension.${COMMAND_NAME}`
  statusBar.tooltip = 'Enable/Disable formatting'
  statusBar.text = ENABLED_TEXT
  statusBar.show()

  return statusBar
}

export default initStatusBar
