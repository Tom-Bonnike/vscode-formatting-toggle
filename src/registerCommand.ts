import { commands, ConfigurationTarget } from 'vscode'
import {
  COMMAND_NAME,
  FORMATTING_SETTINGS,
  DEFAULT_AFFECTS_CONFIGURATION,
} from './constants'
import getConfiguration from './helpers/getConfiguration'
import getIsFormattingActivated from './helpers/getIsFormattingActivated'

const registerCommand = () =>
  commands.registerCommand(COMMAND_NAME, () => {
    const editorConfiguration = getConfiguration('editor')
    const formattingToggleConfiguration = getConfiguration('formattingToggle')
    const affectsConfiguration = formattingToggleConfiguration.get(
      'affects',
      DEFAULT_AFFECTS_CONFIGURATION,
    )
    const isFormattingActivated = getIsFormattingActivated()

    // Updating the configuration will trigger the `onDidChangeConfiguration`
    // handler which will correctly update the text and icon in the status bar.
    FORMATTING_SETTINGS.forEach(setting => {
      if (affectsConfiguration.includes(setting)) {
        editorConfiguration.update(
          setting,
          !isFormattingActivated,
          ConfigurationTarget.Global,
        )
      }
    })
  })

export default registerCommand
