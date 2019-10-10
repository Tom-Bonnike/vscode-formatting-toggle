import { workspace, StatusBarItem } from 'vscode'
import getStatusBarText from './helpers/getStatusBarText'

const getOnDidChangeConfigurationHandler = (statusBar: StatusBarItem) =>
  workspace.onDidChangeConfiguration(event => {
    if (event.affectsConfiguration('editor')) {
      statusBar.text = getStatusBarText()
    }
  })

export default getOnDidChangeConfigurationHandler
