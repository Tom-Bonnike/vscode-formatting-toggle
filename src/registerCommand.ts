import { commands, ConfigurationTarget } from 'vscode'
import {
  COMMAND_NAME,
  FORMATTING_SETTINGS,
  DEFAULT_ACTIVATION_CONFIGURATION,
  DEFAULT_DEACTIVATION_CONFIGURATION
} from './constants'
import getConfiguration from './helpers/getConfiguration'
import isFormattingActivated from './helpers/isFormattingActivated'

const registerCommand = () =>
  commands.registerCommand(COMMAND_NAME, () => {
    const editorConfiguration = getConfiguration('editor')
    const formattingToggleConfiguration = getConfiguration('formattingToggle')
    const activationConfiguration = formattingToggleConfiguration.get(
      'activateFor',
      DEFAULT_ACTIVATION_CONFIGURATION
    )
    const deactivationConfiguration = formattingToggleConfiguration.get(
      'deactivateFor',
      DEFAULT_DEACTIVATION_CONFIGURATION
    )
    const shouldDisableFormatting = isFormattingActivated()

    // Updating the configuration will trigger the `onDidChangeConfiguration`
    // handler which will correctly update the text and icon in the status bar.
    FORMATTING_SETTINGS.forEach(setting => {
      if (shouldDisableFormatting) {
        if (deactivationConfiguration.includes(setting)) {
          editorConfiguration.update(setting, false, ConfigurationTarget.Global)
        }

        return
      }

      if (activationConfiguration.includes(setting)) {
        editorConfiguration.update(setting, true, ConfigurationTarget.Global)
      }
    })
  })

export default registerCommand
