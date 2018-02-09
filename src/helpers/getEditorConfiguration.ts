import { workspace, window, WorkspaceConfiguration } from 'vscode'
import { get } from 'lodash'

const getEditorConfiguration = (): WorkspaceConfiguration =>
  workspace.getConfiguration(
    'editor',
    get(window, 'activeTextEditor.document.uri')
  )

export default getEditorConfiguration
