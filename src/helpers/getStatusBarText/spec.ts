import getFormattingStatus from '../getFormattingStatus'
import getStatusBarText, { ENABLED_TEXT, DISABLED_TEXT } from './'

jest.mock('../getFormattingStatus')

const mockedGetFormattingStatus = getFormattingStatus as jest.Mock

describe('The `getStatusBarText` helper', () => {
  it(`should return \`${ENABLED_TEXT}\` if the formatting is enabled`, () => {
    mockedGetFormattingStatus.mockReturnValueOnce(true)

    const expected = ENABLED_TEXT
    const actual = getStatusBarText()

    expect(actual).toEqual(expected)
  })

  it(`should return \`${DISABLED_TEXT}\` if the formatting is disabled`, () => {
    mockedGetFormattingStatus.mockReturnValueOnce(false)

    const expected = DISABLED_TEXT
    const actual = getStatusBarText()

    expect(actual).toEqual(expected)
  })
})
