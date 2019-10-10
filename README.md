# Formatting Toggle

A VS Code extension that allows you to toggle the formatter (Prettier, Beautify, …) ON and OFF with a simple click.
You can [customise its behaviour](#customisation) so you can have full control over the formatting to avoid large diffs in projects or even specific files that aren’t using such formatters.

## Installation

In the command palette (`CMD + SHIFT + P`) select “Install Extension” and choose “Formatting Toggle”.

## Usage

The extension should show up on the right side of the status bar. Simply click it to toggle the formatter ON and OFF. Alternatively, in the command palette (`CMD + SHIFT + P`), run the “Toggle Formatting” command.

## Customisation

### Customise which events should be toggled ON

By default, Formatting Toggle only enables the formatter for the `PASTE` and `SAVE` events. To completely disable it for one of those two or to re-enable it for the `TYPE` event, you will have to use the `formattingToggle.activateFor` setting.

#### Examples

To allow the formatter to **only** be enabled for the `SAVE` event:

- Go to your Settings (Code > Preferences > Settings).
- Add `"formattingToggle.activateFor": ["formatOnSave"]`.

To allow the formatter to be enabled for **all** events:

- Go to your Settings (Code > Preferences > Settings).
- Add `"formattingToggle.activateFor": ["formatOnPaste", "formatOnSave", "formatOnType"]`.

### Customise which events should be toggled OFF

By default, Formatting Toggle disables the formatter for **all** events. If for some reason you want it to be enabled at all times for one of them, you will have to configure it using the `formattingToggle.deactivateFor` setting.

#### Examples

To allow the formatter to **only** be disabled for the `SAVE` event:

- Go to your Settings (Code > Preferences > Settings).
- Add `"formattingToggle.deactivateFor": ["formatOnSave"]`.

To allow the formatter to be disabled for both the `SAVE` and `PASTE` events, leaving the formatter enabled **at all times** for the `TYPE` event:

- Go to your Settings (Code > Preferences > Settings).
- Add `"formattingToggle.deactivateFor": ["formatOnPaste", "formatOnSave"]`.
