# Formatting Toggle

A VS Code extension that allows you to toggle the formatter (Prettier, Beautify, …) ON and OFF with a simple click.

## Installation

In the command palette (`CMD + SHIFT + P`) select “Install Extension” and choose “Formatting Toggle”.

## Usage

The extension should show up on the right side of the status bar. Simply click it to toggle the formatter ON and OFF. Alternatively, in the command palette (`CMD + SHIFT + P`), run the “Toggle Formatting” command.

## Customisation

By default, Formatting Toggle only puts the formatter back ON for the `PASTE` and `SAVE` events. To disable one of those or to re-enable the formatter for the `TYPE` event, you will have to configure it using the `formattingToggle.activateFor` setting.

#### Examples

To allow the formatter to be put back ON **only** for the `SAVE` event:

- Go to your Settings (Code > Preferences > Settings).
- Add `"formattingToggle.activateFor": ["formatOnSave"]`.

To allow the formatter to be put back ON for **all** events:

- Go to your Settings (Code > Preferences > Settings).
- Add `"formattingToggle.activateFor": ["formatOnPaste", "formatOnSave", "formatOnType"]`.
