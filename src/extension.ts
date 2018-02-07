import { workspace, window, ExtensionContext } from 'vscode'
import { get } from 'lodash'
import getInitialFormattingConfiguration from './helpers/getInitialFormattingConfiguration'
import initCommand from './helpers/initCommand'
import initStatusBar from './helpers/initStatusBar'

export function activate(extensionContext: ExtensionContext) {
  const editorConfiguration = workspace.getConfiguration(
    'editor',
    get(window, 'activeTextEditor.document.uri')
  )
  const initialFormattingConfiguration = getInitialFormattingConfiguration(
    editorConfiguration
  )
  const statusBar = initStatusBar()
  const command = initCommand(
    editorConfiguration,
    initialFormattingConfiguration,
    statusBar
  )

  extensionContext.subscriptions.push(statusBar)
  extensionContext.subscriptions.push(command)
}

export function deactivate() {}
