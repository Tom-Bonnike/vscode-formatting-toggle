import { commands, ConfigurationTarget, workspace } from 'vscode'
import { COMMAND_NAME, DEFAULT_AFFECTS_CONFIGURATION } from './constants'
import getFormattingStatus from './helpers/getFormattingStatus'

const registerCommand = () =>
  commands.registerCommand(COMMAND_NAME, () => {
    const configuration = workspace.getConfiguration()
    const affectsConfiguration = configuration.get(
      'formattingToggle.affects',
      DEFAULT_AFFECTS_CONFIGURATION,
    )
    const isFormattingActivated = getFormattingStatus()

    // Updating the configuration will trigger the `onDidChangeConfiguration`
    // handler which will correctly update the text and icon in the status bar.
    affectsConfiguration.forEach(setting => {
      configuration.update(
        setting,
        !isFormattingActivated,
        ConfigurationTarget.Global,
      )
    })
  })

export default registerCommand
