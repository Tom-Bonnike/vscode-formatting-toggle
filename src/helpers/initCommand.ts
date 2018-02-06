import { commands, ConfigurationTarget, WorkspaceConfiguration, Disposable } from 'vscode'
import { FormattingConfiguration } from './getInitialFormattingConfiguration'
import { COMMAND_NAME, FORMATTING_SETTINGS } from '../constants'

const CONFIGURATION_TARGET = ConfigurationTarget.Global
const initCommand = (
  editorConfiguration: WorkspaceConfiguration,
  initialFormattingConfiguration: FormattingConfiguration
) : Disposable => {
  let toggle = false

  return commands.registerCommand(`extension.${COMMAND_NAME}`, () => {
    FORMATTING_SETTINGS.forEach(key => {
      if (!toggle) {
        return editorConfiguration.update(key, false, CONFIGURATION_TARGET)
      }

      const initialValue = initialFormattingConfiguration[key]
      editorConfiguration.update(key, initialValue, CONFIGURATION_TARGET)
    })

    toggle = !toggle
  })
}

export default initCommand
