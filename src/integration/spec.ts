import { commands } from 'vscode'
import {
  COMMAND_NAME,
  FORMATTING_SETTINGS,
  DEFAULT_ACTIVATION_CONFIGURATION
} from '../constants'
import getConfiguration from '../helpers/getConfiguration'

describe(`The \`${COMMAND_NAME}\` command`, () => {
  it('should toggle the different editor settings ON and OFF', () => {
    // We start with the settings defined in the `testWorkspace.code-workspace`
    // file.
    const configuration = getConfiguration('editor')

    commands.executeCommand(COMMAND_NAME)

    // Assert that all formatting settings are turned off.
    FORMATTING_SETTINGS.forEach(setting => {
      expect(configuration.get(setting)).toEqual(false)
    })

    commands.executeCommand(COMMAND_NAME)

    // Assert that the formatting settings that match the default
    // `formattingToggle.activateFor` configuration are toggled ON and the rest
    // are still OFF.
    FORMATTING_SETTINGS.forEach(setting => {
      if (DEFAULT_ACTIVATION_CONFIGURATION.includes(setting)) {
        expect(setting).toEqual(true)
        return
      }

      expect(setting).toEqual(false)
    })
  })
})
