import { VerboseReporter } from '@jest/reporters'

// For some reason, Jest outputs logs to stderr and they don’t get logged to
// the console. We extend the default verbose reporter to do so.
class Reporter extends VerboseReporter {
  log(message: string) {
    super.log(message)
    console.log(message)
  }
}

module.exports = Reporter
