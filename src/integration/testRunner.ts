import { resolve } from 'path'
import { runTests } from 'vscode-test'

const main = async () => {
  try {
    const extensionDevelopmentPath = resolve(__dirname, '../../')
    const extensionTestsPath = resolve(__dirname, './index')
    const workspace = resolve(__dirname, './testWorkspace.code-workspace')

    await runTests({
      extensionDevelopmentPath,
      extensionTestsPath,
      launchArgs: [workspace, '--disable-extensions'],
      extensionTestsEnv: {
        // Preserve the colors in the Jest output.
        FORCE_COLOR: '1'
      }
    })
  } catch (err) {
    console.error('❌ Failed to run integration tests.')
    process.exit(1)
  }
}

main()
