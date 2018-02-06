import { window, StatusBarAlignment, StatusBarItem } from 'vscode'
import { COMMAND_NAME } from '../constants'

const initStatusBar = (): StatusBarItem => {
  // `-1` matches the Prettier extension’s status bar priority.
  const statusBar = window.createStatusBarItem(StatusBarAlignment.Right, -1)
  statusBar.command = `extension.${COMMAND_NAME}`
  statusBar.tooltip = 'Enable/Disable formatting'
  statusBar.text = 'Disable formatting'

  return statusBar
}

export default initStatusBar
