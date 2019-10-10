import { commands, ConfigurationTarget } from 'vscode'
import {
  COMMAND_NAME,
  FORMATTING_SETTINGS,
  DEFAULT_ACTIVATION_CONFIGURATION
} from './constants'
import getConfiguration from './helpers/getConfiguration'
import isFormattingActivated from './helpers/isFormattingActivated'

const getActivationConfiguration = () => {
  const extensionConfiguration = getConfiguration('formattingToggle')

  return extensionConfiguration.get(
    'activateFor',
    DEFAULT_ACTIVATION_CONFIGURATION
  )
}

const registerCommand = () =>
  commands.registerCommand(COMMAND_NAME, () => {
    const editorConfiguration = getConfiguration('editor')
    const activationConfiguration = getActivationConfiguration()
    const shouldDisableFormatting = isFormattingActivated()

    // Updating the configuration will trigger the `onDidChangeConfiguration`
    // handler which will correctly update the text and icon in the status bar.
    FORMATTING_SETTINGS.forEach(setting => {
      if (shouldDisableFormatting) {
        return editorConfiguration.update(
          setting,
          false,
          ConfigurationTarget.Global
        )
      }

      if (activationConfiguration.includes(setting)) {
        return editorConfiguration.update(
          setting,
          true,
          ConfigurationTarget.Global
        )
      }
    })
  })

export default registerCommand
