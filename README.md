<a href="https://marketplace.visualstudio.com/items?itemName=tombonnike.vscode-status-bar-format-toggle#overview"><img src="https://vsmarketplacebadge.apphb.com/version/tombonnike.vscode-status-bar-format-toggle.svg" /> <img src="https://vsmarketplacebadge.apphb.com/installs-short/tombonnike.vscode-status-bar-format-toggle.svg" /></a> <a href="https://marketplace.visualstudio.com/items?itemName=tombonnike.vscode-status-bar-format-toggle#review-details"><img src="https://vsmarketplacebadge.apphb.com/rating-star/tombonnike.vscode-status-bar-format-toggle.svg" /></a>

# Formatting Toggle

A VS Code extension that allows you to toggle the formatter (Prettier, Beautify, …) ON and OFF with a simple click.

## Installation

In the command palette (`CMD + SHIFT + P`) select “Install Extension” and choose “Formatting Toggle”.

## Usage

The extension should show up on the right side of the status bar. Simply click it to toggle the formatter ON and OFF. Alternatively, in the command palette (`CMD + SHIFT + P`), run the “Toggle Formatting” command.

## Customisation

By default, Formatting Toggle toggles the formatter for all formatting events: `formatOnPaste`, `formatOnSave` and `formatOnType`. To ignore one of these and leave the value that is defined in your settings unchanged, you can use the `formattingToggle.affects` setting in your editor settings (Code > Preferences > Settings).

### Examples

#### Keeping `formatOnPaste` and `formatOnType` enabled at all times:

```json
{
  "editor.formatOnPaste": true,
  "editor.formatOnType": true,
  "formattingToggle.affects": ["formatOnSave"]
}
```

#### Keeping `formatOnType` disabled at all times:

```json
{
  "editor.formatOnType": false,
  "formattingToggle.affects": ["formatOnPaste", "formatOnSave"]
}
```

Note: this was the default behaviour before version 2.0.0 of the extension.

#### Allow the formatter to be toggled for all events (default):

```json
{
  "formattingToggle.affects": ["formatOnPaste", "formatOnSave", "formatOnType"]
}
```
