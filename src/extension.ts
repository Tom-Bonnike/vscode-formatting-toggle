import {
  commands,
  workspace,
  window,
  ExtensionContext,
  ConfigurationTarget
} from 'vscode'
import { get } from 'lodash'
import getInitialFormattingConfiguration from
  './helpers/getInitialFormattingConfiguration'

const CONFIGURATION_TARGET = ConfigurationTarget.Global

export function activate(extensionContext: ExtensionContext) {
  let toggle = false

  const editorConfiguration = workspace.getConfiguration(
    'editor',
    get(window, 'activeTextEditor.document.uri')
  )
  const initialFormattingConfiguration =
    getInitialFormattingConfiguration(editorConfiguration)

  const disposable = commands.registerCommand('extension.toggleFormat', () => {
    ;['formatOnPaste', 'formatOnSave', 'formatOnType'].forEach(
      key => {
        if (!toggle) {
          return editorConfiguration.update(key, false, CONFIGURATION_TARGET)
        }

        const initialValue = initialFormattingConfiguration[key]
        editorConfiguration.update(key, initialValue, CONFIGURATION_TARGET)
      }
    )

    toggle = !toggle
  })

  extensionContext.subscriptions.push(disposable)
}

export function deactivate() {}
