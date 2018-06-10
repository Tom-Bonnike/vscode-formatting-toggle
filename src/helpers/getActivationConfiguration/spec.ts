import { WorkspaceConfiguration } from 'vscode'
import getActivationConfiguration, {
  DEFAULT_ACTIVATION_CONFIGURATION
} from './'

const getExtensionConfiguration = (
  additionalConfig: object = {}
): WorkspaceConfiguration =>
  ({
    get: (key: string) => {
      const config: any = {
        activateFor: ['formatOnPaste'],
        ...additionalConfig
      }

      return config[key]
    }
  } as WorkspaceConfiguration)

describe('The `getActivationConfiguration` helper', () => {
  it('should return the activation setting', () => {
    const extensionConfiguration = getExtensionConfiguration()
    const expected = ['formatOnPaste']
    const actual = getActivationConfiguration(extensionConfiguration)

    expect(actual).toEqual(expected)
  })

  it('should not return any other settings', () => {
    const extensionConfiguration = getExtensionConfiguration({
      foo: 'bar',
      bar: 'baz'
    })
    const expected = ['formatOnPaste']
    const actual = getActivationConfiguration(extensionConfiguration)

    expect(actual).toEqual(expected)
  })

  // See https://github.com/Microsoft/vscode/issues/35451.
  // it('should return the default configuration if not found', () => {
  //   const extensionConfiguration = {
  //     get: (key: string) => ({})
  //   } as WorkspaceConfiguration
  //   const expected = DEFAULT_ACTIVATION_CONFIGURATION
  //   const actual = getActivationConfiguration(extensionConfiguration)

  //   expect(actual).toEqual(expected)
  // })
})
