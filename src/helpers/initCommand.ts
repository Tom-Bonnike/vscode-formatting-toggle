import {
  commands,
  ConfigurationTarget,
  WorkspaceConfiguration,
  Disposable,
  StatusBarItem
} from 'vscode'
import {
  COMMAND_NAME,
  FORMATTING_SETTINGS,
  ENABLE_TEXT,
  DISABLE_TEXT
} from '../constants'

const CONFIGURATION_TARGET = ConfigurationTarget.Global
const initCommand = (
  editorConfiguration: WorkspaceConfiguration,
  statusBar: StatusBarItem
) : Disposable => {
  let toggle = false

  return commands.registerCommand(`extension.${COMMAND_NAME}`, () => {
    FORMATTING_SETTINGS.forEach(key => {
      if (!toggle) {
        editorConfiguration.update(key, undefined, CONFIGURATION_TARGET)
        statusBar.text = ENABLE_TEXT

        return
      }

      editorConfiguration.update(key, true, CONFIGURATION_TARGET)
      statusBar.text = DISABLE_TEXT
    })

    toggle = !toggle
  })
}

export default initCommand
