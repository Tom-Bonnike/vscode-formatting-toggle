import {
  commands,
  workspace,
  window,
  ExtensionContext,
  ConfigurationTarget,
  StatusBarAlignment
} from 'vscode'
import { get } from 'lodash'
import initCommand from './helpers/initCommand'
import initStatusBar from './helpers/initStatusBar'

export function activate(extensionContext: ExtensionContext) {
  const editorConfiguration = workspace.getConfiguration(
    'editor',
    get(window, 'activeTextEditor.document.uri')
  )
  const statusBar = initStatusBar()
  const command = initCommand(editorConfiguration, statusBar)

  extensionContext.subscriptions.push(statusBar)
  extensionContext.subscriptions.push(command)
}

export function deactivate() {}
