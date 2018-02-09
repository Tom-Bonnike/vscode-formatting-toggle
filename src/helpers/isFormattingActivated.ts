import { FormattingConfiguration } from './getFormattingConfiguration'

const isFormattingActivated = (
  formattingConfiguration: FormattingConfiguration
): boolean => Object.values(formattingConfiguration).some(Boolean)

export default isFormattingActivated
