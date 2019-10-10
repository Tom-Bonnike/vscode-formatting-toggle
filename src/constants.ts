// This should be kept in sync with the command name specified in the
// `package.json` file: `contributes.commands[0].command`.
export const COMMAND_NAME = 'formattingToggle.toggleFormat'
export const FORMATTING_SETTINGS = [
  'formatOnPaste',
  'formatOnSave',
  'formatOnType'
]
// This should be kept in sync with the default specified in the `package.json`
// file: `contributes.configuration.properties.formattingToggle.activateFor.default`.
export const DEFAULT_ACTIVATION_CONFIGURATION = [
  'formatOnPaste',
  'formatOnSave'
]
