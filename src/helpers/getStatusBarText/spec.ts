import isFormattingActivated from '../isFormattingActivated'
import getStatusBarText, { ENABLED_TEXT, DISABLED_TEXT } from './'

jest.mock('../isFormattingActivated')

const mockedIsFormattingActivated = isFormattingActivated as jest.Mock

describe('The `getStatusBarText` helper', () => {
  it(`should return \`${ENABLED_TEXT}\` if the formatting is enabled`, () => {
    mockedIsFormattingActivated.mockReturnValueOnce(true)

    const expected = ENABLED_TEXT
    const actual = getStatusBarText()

    expect(actual).toEqual(expected)
  })

  it(`should return \`${DISABLED_TEXT}\` if the formatting is disabled`, () => {
    mockedIsFormattingActivated.mockReturnValueOnce(false)

    const expected = DISABLED_TEXT
    const actual = getStatusBarText()

    expect(actual).toEqual(expected)
  })
})
