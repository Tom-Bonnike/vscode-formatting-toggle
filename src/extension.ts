import {
  commands,
  workspace,
  window,
  ExtensionContext,
  ConfigurationTarget,
  StatusBarAlignment
} from 'vscode'
import { get } from 'lodash'
import getInitialFormattingConfiguration from
  './helpers/getInitialFormattingConfiguration'
import initCommand from './helpers/initCommand'
import initStatusBar from './helpers/initStatusBar'

export function activate(extensionContext: ExtensionContext) {
  const editorConfiguration = workspace.getConfiguration(
    'editor',
    get(window, 'activeTextEditor.document.uri')
  )
  const initialFormattingConfiguration =
    getInitialFormattingConfiguration(editorConfiguration)
  const command =
    initCommand(editorConfiguration, initialFormattingConfiguration)
  const statusBar = initStatusBar()
  statusBar.show()

  extensionContext.subscriptions.push(command)
  extensionContext.subscriptions.push(statusBar)
}

export function deactivate() {}
