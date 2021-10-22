import { ExtensionContext } from 'vscode'
import registerCommand from './registerCommand'
import createStatusBarItem from './createStatusBarItem'
import getOnDidChangeConfigurationHandler from './getOnDidChangeConfigurationHandler'

export function activate({ subscriptions }: ExtensionContext) {
  const command = registerCommand()
  const statusBarItem = createStatusBarItem()
  const onDidChangeConfigurationHandler =
    getOnDidChangeConfigurationHandler(statusBarItem)

  subscriptions.push(statusBarItem)
  subscriptions.push(command)
  subscriptions.push(onDidChangeConfigurationHandler)
}
