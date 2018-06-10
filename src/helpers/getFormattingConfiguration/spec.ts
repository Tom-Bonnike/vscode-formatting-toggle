import { WorkspaceConfiguration } from 'vscode'
import getFormattingConfiguration from './'

const getEditorConfiguration = (
  additionalConfig: object = {}
): WorkspaceConfiguration =>
  ({
    get: (key: string) => {
      const config: any = {
        formatOnPaste: true,
        formatOnSave: true,
        formatOnType: false,
        ...additionalConfig
      }

      return config[key]
    }
  } as WorkspaceConfiguration)

describe('The `getFormattingConfiguration` helper', () => {
  it('should return the 3 formatting settings', () => {
    const editorConfiguration = getEditorConfiguration()
    const expected = {
      formatOnPaste: true,
      formatOnSave: true,
      formatOnType: false
    }
    const actual = getFormattingConfiguration(editorConfiguration)

    expect(actual).toEqual(expected)
  })

  it('should not return any other settings', () => {
    const editorConfiguration = getEditorConfiguration({
      foo: 'bar',
      bar: 'baz'
    })
    const expected = {
      formatOnPaste: true,
      formatOnSave: true,
      formatOnType: false
    }
    const actual = getFormattingConfiguration(editorConfiguration)

    expect(actual).toEqual(expected)
  })

  // See https://github.com/Microsoft/vscode/issues/35451.
  // it('should default the formatting settings to `false` if not found', () => {
  //   const editorConfiguration = {
  //     get: (key: string) => ({})
  //   } as WorkspaceConfiguration
  //   const expected = {
  //     formatOnPaste: false,
  //     formatOnSave: false,
  //     formatOnType: false
  //   }

  //   const actual = getFormattingConfiguration(editorConfiguration)

  //   expect(actual).toEqual(expected)
  // })
})
