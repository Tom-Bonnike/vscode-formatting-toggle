import { commands, ConfigurationTarget, WorkspaceConfiguration, Disposable, StatusBarItem } from 'vscode'
import { COMMAND_NAME, FORMATTING_SETTINGS } from '../constants'

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
        statusBar.text = 'Enable formatting'

        return
      }

      editorConfiguration.update(key, true, CONFIGURATION_TARGET)
      statusBar.text = 'Disable formatting'
    })

    toggle = !toggle
  })
}

export default initCommand
