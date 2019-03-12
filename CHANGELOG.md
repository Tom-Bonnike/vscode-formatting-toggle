# Change Log

All notable changes to the “Formatting Toggle” extension will be documented in this file.

## [1.5.0]

- Add an icon to increase visibility on the Extensions Marketplace.

## [1.4.0]

- Add `formattingToggle.activateFor` setting to allow users to choose which events the formatter should be activated back ON for. See README for usage examples.

## [1.3.0]

- Rename extension to increase visibility on the Extensions Marketplace.

## [1.2.0]

- Match Prettier’s status bar text.
- Stop relying on the initial formatting configuration.
- Toggle the status bar text automatically when the user changes their configuration manually.

## [1.1.2]

- Fix formatting settings not being toggled if they were all set to `false` when VSCode was first launched. `formatOnType` is now never toggled on if it wasn’t part of the user’s config beforehand.

## [1.1.1]

- Fix formatting settings never being toggled back on using the status bar.

## [1.1.0]

- Make it an actual status bar extension.

## [1.0.0]

- Initial release with the working “Toggle formatting” command.
