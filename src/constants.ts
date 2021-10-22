// This should be kept in sync with the command name specified in the
// `package.json` file: `contributes.commands[0].command`.
export const COMMAND_NAME = 'formattingToggle.toggleFormat'

export type FormattingSettings =
  | 'formatOnPaste'
  | 'formatOnSave'
  | 'formatOnType'

export const FORMATTING_SETTINGS: FormattingSettings[] = [
  'formatOnPaste',
  'formatOnSave',
  'formatOnType',
]

// This should be kept in sync with the default specified in the `package.json`
// file: `contributes.configuration.properties.formattingToggle.affects.default`.
// By default, we want to always toggle all formatting settings.
export const DEFAULT_AFFECTS_CONFIGURATION = [...FORMATTING_SETTINGS]
