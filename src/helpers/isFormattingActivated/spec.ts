import getConfiguration from '../getConfiguration'
import isFormattingActivated, { FormattingConfiguration } from './'

jest.mock('../getConfiguration')

const mockedGetConfiguration = getConfiguration as jest.Mock

const mockGetConfiguration = (settings: FormattingConfiguration) =>
  mockedGetConfiguration.mockImplementationOnce(() => ({
    get: (setting: keyof FormattingConfiguration) => settings[setting]
  }))

describe('The `isFormattingActivated` helper', () => {
  it('should return `true` if any of the formatting settings is enabled', () => {
    const testCases = [
      {
        formatOnPaste: true,
        formatOnSave: false,
        formatOnType: false
      },
      {
        formatOnPaste: false,
        formatOnSave: true,
        formatOnType: false
      },
      {
        formatOnPaste: false,
        formatOnSave: false,
        formatOnType: true
      },
      {
        formatOnPaste: false,
        formatOnSave: true,
        formatOnType: true
      },
      {
        formatOnPaste: true,
        formatOnSave: false,
        formatOnType: true
      },
      {
        formatOnPaste: true,
        formatOnSave: true,
        formatOnType: false
      },
      {
        formatOnPaste: true,
        formatOnSave: true,
        formatOnType: true
      }
    ]

    testCases.forEach((configuration: FormattingConfiguration) => {
      mockGetConfiguration(configuration)

      const expected = true
      const actual = isFormattingActivated()

      expect(expected).toEqual(actual)
    })
  })

  it('should return `false` if the formatting settings are all disabled', () => {
    mockGetConfiguration({
      formatOnPaste: false,
      formatOnSave: false,
      formatOnType: false
    })

    const expected = false
    const actual = isFormattingActivated()

    expect(expected).toEqual(actual)
  })
})
