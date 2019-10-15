import getIsFormattingActivated from '../getIsFormattingActivated'
import getStatusBarText, { ENABLED_TEXT, DISABLED_TEXT } from './'

jest.mock('../getIsFormattingActivated')

const mockedGetIsFormattingActivated = getIsFormattingActivated as jest.Mock

describe('The `getStatusBarText` helper', () => {
  it(`should return \`${ENABLED_TEXT}\` if the formatting is enabled`, () => {
    mockedGetIsFormattingActivated.mockReturnValueOnce(true)

    const expected = ENABLED_TEXT
    const actual = getStatusBarText()

    expect(actual).toEqual(expected)
  })

  it(`should return \`${DISABLED_TEXT}\` if the formatting is disabled`, () => {
    mockedGetIsFormattingActivated.mockReturnValueOnce(false)

    const expected = DISABLED_TEXT
    const actual = getStatusBarText()

    expect(actual).toEqual(expected)
  })
})
