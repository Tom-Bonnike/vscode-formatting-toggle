import { join } from 'path'
import { runCLI } from 'jest'
import { window } from 'vscode'

const projectRootPath = join(__dirname, '../../')
const config = JSON.stringify({
  rootDir: projectRootPath,
  testMatch: ['<rootDir>/out/integration/spec.js'],
  verbose: true,
  reporters: ['<rootDir>/out/integration/testReporter.js']
})

export const run = async () => {
  window.showInformationMessage('🏎 Running integration tests…')

  // Preserve the colors in the Jest output when running tests through the
  // debugger.
  process.env.FORCE_COLOR = '1'

  await runCLI({ config } as any, [projectRootPath])

  window.showInformationMessage('🏁 Integration tests run completed.')
}
