import isFormattingActivated from './'

describe('The `isFormattingActivated` helper', () => {
  it('should return `true` if any of the formatting settings is enabled', () => {
    const expected = true
    const actual1 = isFormattingActivated({
      formatOnPaste: true,
      formatOnSave: false,
      formatOnType: false
    })
    const actual2 = isFormattingActivated({
      formatOnPaste: true,
      formatOnSave: true,
      formatOnType: false
    })
    const actual3 = isFormattingActivated({
      formatOnPaste: true,
      formatOnSave: true,
      formatOnType: true
    })

    expect(actual1).toEqual(expected)
    expect(actual2).toEqual(expected)
    expect(actual3).toEqual(expected)
  })

  it('should return `false` otherwise', () => {
    const expected = false
    const actual = isFormattingActivated({
      formatOnPaste: false,
      formatOnSave: false,
      formatOnType: false
    })

    expect(actual).toEqual(expected)
  })
})
