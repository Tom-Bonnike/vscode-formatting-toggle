import initStatusBar from './'
import {
  COMMAND_NAME,
  TOOLTIP_TEXT,
  ENABLED_TEXT,
  DISABLED_TEXT
} from '../constants'

describe('initStatusBar', () => {
  it('should assign the extension’s command to the newly created status bar', () => {
    const actual = initStatusBar(true).command
    const expected = `extension.${COMMAND_NAME}`

    expect(actual).toEqual(expected)
  })

  it('should assign a tooltip to the newly created status bar', () => {
    const actual = initStatusBar(true).tooltip
    const expected = TOOLTIP_TEXT

    expect(actual).toEqual(expected)
  })

  it(`should assign \`${ENABLED_TEXT}\` as text to the newly created status bar when passed \`true\``, () => {
    const actual = initStatusBar(true).text
    const expected = ENABLED_TEXT

    expect(actual).toEqual(expected)
  })

  it(`should assign \`${DISABLED_TEXT}\` as text to the newly created status bar when passed \`false\``, () => {
    const actual = initStatusBar(false).text
    const expected = DISABLED_TEXT

    expect(actual).toEqual(expected)
  })

  it('should show the newly created status bar', () => {
    const actual = initStatusBar(false)

    expect(actual.show).toHaveBeenCalledTimes(1)
  })
})
