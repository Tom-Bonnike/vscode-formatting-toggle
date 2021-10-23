import { ExtensionContext, workspace } from 'vscode'
import registerCommand from './registerCommand'
import createStatusBarItem from './createStatusBarItem'
import getStatusBarText from './helpers/getStatusBarText'

export function activate({ subscriptions }: ExtensionContext) {
  const command = registerCommand()
  const statusBarItem = createStatusBarItem()
  const configurationChangeListener = workspace.onDidChangeConfiguration(() => {
    statusBarItem.text = getStatusBarText()
  })

  subscriptions.push(statusBarItem)
  subscriptions.push(command)
  subscriptions.push(configurationChangeListener)
}
