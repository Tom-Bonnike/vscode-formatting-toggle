export const ConfigurationTarget = {
  Global: 1
}

export const StatusBarAlignment = {}

export const window = {
  createStatusBarItem: () => ({
    command: '',
    tooltip: '',
    text: '',
    show: jest.fn()
  })
}
