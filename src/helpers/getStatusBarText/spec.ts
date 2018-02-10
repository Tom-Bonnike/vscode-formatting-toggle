import { ENABLED_TEXT, DISABLED_TEXT } from '../../constants'
import getStatusBarText from './'

describe('The `getStatusBarText` helper', () => {
  it(`should return \`${ENABLED_TEXT}\` if passed \`true\``, () => {
    const expected = ENABLED_TEXT
    const actual = getStatusBarText(true)

    expect(actual).toEqual(expected)
  })

  it(`should return \`${DISABLED_TEXT}\` if passed \`false\``, () => {
    const expected = DISABLED_TEXT
    const actual = getStatusBarText(false)

    expect(actual).toEqual(expected)
  })
})
