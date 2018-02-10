// The VS Code module can’t be resolved by jest. We need to mock every property
// used by the extension during tests.
export const ConfigurationTarget = {
  Global: 1
}

export const window = {
  createStatusBarItem: () => ({
    command: '',
    tooltip: '',
    text: '',
    show: jest.fn()
  })
}
