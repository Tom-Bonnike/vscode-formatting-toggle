import { FormattingSettings } from '../../constants'
import getConfiguration from '../getConfiguration'
import isFormattingActivated, { FormattingConfiguration } from './'

jest.mock('../getConfiguration')

const mockedGetConfiguration = getConfiguration as jest.Mock

type ConfigurationMock = {
  editor: FormattingConfiguration
  formattingToggle?: { affects: FormattingSettings[] }
}

type Setting = keyof (FormattingConfiguration &
  ConfigurationMock['formattingToggle'])

const mockGetConfiguration = (configurationMock: ConfigurationMock) =>
  mockedGetConfiguration.mockImplementation(
    (settingsNamespace: keyof ConfigurationMock) => {
      const relevantConfiguration = configurationMock[settingsNamespace] || {}

      return {
        get: (setting: Setting, defaultValue: any) =>
          // @ts-ignore 😤
          relevantConfiguration[setting] || defaultValue
      }
    }
  )

describe('The `isFormattingActivated` helper', () => {
  it('should return `true` if any of the formatting settings is enabled (without any custom `affects` configuration)', () => {
    const testCases: ConfigurationMock[] = [
      {
        editor: {
          formatOnPaste: true,
          formatOnSave: false,
          formatOnType: false
        }
      },
      {
        editor: {
          formatOnPaste: false,
          formatOnSave: true,
          formatOnType: false
        }
      },
      {
        editor: {
          formatOnPaste: false,
          formatOnSave: false,
          formatOnType: true
        }
      },
      {
        editor: {
          formatOnPaste: false,
          formatOnSave: true,
          formatOnType: true
        }
      },
      {
        editor: {
          formatOnPaste: true,
          formatOnSave: false,
          formatOnType: true
        }
      },
      {
        editor: {
          formatOnPaste: true,
          formatOnSave: true,
          formatOnType: false
        }
      },
      {
        editor: {
          formatOnPaste: true,
          formatOnSave: true,
          formatOnType: true
        }
      }
    ]

    testCases.forEach((configurationMock: ConfigurationMock) => {
      mockGetConfiguration(configurationMock)

      const expected = true
      const actual = isFormattingActivated()

      expect(actual).toEqual(expected)
    })
  })

  it('should return `true` if any of the formatting settings in the `affects` configuration is enabled', () => {
    const testCases: ConfigurationMock[] = [
      {
        editor: {
          formatOnPaste: true,
          formatOnSave: false,
          formatOnType: false
        },
        formattingToggle: { affects: ['formatOnPaste'] }
      },
      {
        editor: {
          formatOnPaste: false,
          formatOnSave: true,
          formatOnType: false
        },
        formattingToggle: { affects: ['formatOnSave'] }
      },
      {
        editor: {
          formatOnPaste: false,
          formatOnSave: false,
          formatOnType: true
        },
        formattingToggle: { affects: ['formatOnType'] }
      },
      {
        editor: {
          formatOnPaste: false,
          formatOnSave: true,
          formatOnType: true
        },
        formattingToggle: { affects: ['formatOnSave', 'formatOnType'] }
      },
      {
        editor: {
          formatOnPaste: true,
          formatOnSave: false,
          formatOnType: true
        },
        formattingToggle: { affects: ['formatOnPaste', 'formatOnType'] }
      },
      {
        editor: {
          formatOnPaste: true,
          formatOnSave: true,
          formatOnType: false
        },
        formattingToggle: { affects: ['formatOnPaste', 'formatOnSave'] }
      },
      {
        editor: {
          formatOnPaste: true,
          formatOnSave: true,
          formatOnType: true
        },
        formattingToggle: {
          affects: ['formatOnPaste', 'formatOnSave', 'formatOnType']
        }
      }
    ]

    testCases.forEach((configurationMock: ConfigurationMock) => {
      mockGetConfiguration(configurationMock)

      const expected = true
      const actual = isFormattingActivated()

      expect(actual).toEqual(expected)
    })
  })

  it('should return `false` if all of the formatting settings are disabled (without any custom `affects` configuration)', () => {
    mockGetConfiguration({
      editor: {
        formatOnPaste: false,
        formatOnSave: false,
        formatOnType: false
      }
    })

    const expected = false
    const actual = isFormattingActivated()

    expect(actual).toEqual(expected)
  })

  it('should return `false` if all of the formatting settings in the `affects` configuration are disabled', () => {
    const testCases: ConfigurationMock[] = [
      {
        editor: {
          formatOnPaste: false,
          formatOnSave: true,
          formatOnType: true
        },
        formattingToggle: { affects: ['formatOnPaste'] }
      },
      {
        editor: {
          formatOnPaste: true,
          formatOnSave: false,
          formatOnType: true
        },
        formattingToggle: { affects: ['formatOnSave'] }
      },
      {
        editor: {
          formatOnPaste: true,
          formatOnSave: true,
          formatOnType: false
        },
        formattingToggle: { affects: ['formatOnType'] }
      },
      {
        editor: {
          formatOnPaste: true,
          formatOnSave: false,
          formatOnType: false
        },
        formattingToggle: { affects: ['formatOnSave', 'formatOnType'] }
      },
      {
        editor: {
          formatOnPaste: false,
          formatOnSave: true,
          formatOnType: false
        },
        formattingToggle: { affects: ['formatOnPaste', 'formatOnType'] }
      },
      {
        editor: {
          formatOnPaste: false,
          formatOnSave: false,
          formatOnType: true
        },
        formattingToggle: { affects: ['formatOnPaste', 'formatOnSave'] }
      },
      {
        editor: {
          formatOnPaste: false,
          formatOnSave: false,
          formatOnType: false
        },
        formattingToggle: {
          affects: ['formatOnPaste', 'formatOnSave', 'formatOnType']
        }
      }
    ]

    testCases.forEach((configurationMock: ConfigurationMock) => {
      mockGetConfiguration(configurationMock)

      const expected = false
      const actual = isFormattingActivated()

      expect(actual).toEqual(expected)
    })
  })
})
