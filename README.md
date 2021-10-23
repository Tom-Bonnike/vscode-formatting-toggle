<a href="https://marketplace.visualstudio.com/items?itemName=tombonnike.vscode-status-bar-format-toggle#overview"><img src="https://vsmarketplacebadge.apphb.com/version/tombonnike.vscode-status-bar-format-toggle.svg" /> <img src="https://vsmarketplacebadge.apphb.com/installs-short/tombonnike.vscode-status-bar-format-toggle.svg" /></a> <a href="https://marketplace.visualstudio.com/items?itemName=tombonnike.vscode-status-bar-format-toggle#review-details"><img src="https://vsmarketplacebadge.apphb.com/rating-star/tombonnike.vscode-status-bar-format-toggle.svg" /></a>

# Formatting Toggle

A VS Code extension that allows you to toggle your formatting settings ON and OFF with a simple click.

## Installation

In the command palette (`CMD + SHIFT + P`) select “Install Extension” and choose “Formatting Toggle”.

## Usage

The extension should show up on the right side of the status bar. Simply click it to toggle the formatting settings ON and OFF. Alternatively, in the command palette (`CMD + SHIFT + P`), run the “Toggle Formatting” command.

⚠️ Formatting Toggle doesn’t override your workspace settings as these are usually tracked by Git. Consider using ignore configurations (like `.prettierignore`) to ignore specific files for all contributors of your project.

## Customization

By default, Formatting Toggle toggles all formatting settings: `editor.formatOnPaste`, `editor.formatOnSave` and `editor.formatOnType`. To toggle different settings, or to prevent a specific setting from being toggled, you can use the `formattingToggle.affects` setting in your editor settings (Code › Preferences › Settings).

💡 Formatting Toggle was created with formatting settings in mind but allows you to toggle any boolean setting that lives at the root of the VSCode configuration.

### Examples

#### Keeping `editor.formatOnPaste` and `editor.formatOnType` enabled at all times:

```json
{
  "editor.formatOnPaste": true,
  "editor.formatOnType": true,
  "formattingToggle.affects": ["editor.formatOnSave"]
}
```

#### Keeping `editor.formatOnType` disabled at all times:

```json
{
  "editor.formatOnType": false,
  "formattingToggle.affects": ["editor.formatOnPaste", "editor.formatOnSave"]
}
```

#### Allowing all formatting settings to to be toggled (default):

```json
{
  "formattingToggle.affects": [
    "editor.formatOnPaste",
    "editor.formatOnSave",
    "editor.formatOnType"
  ]
}
```
