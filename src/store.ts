type State = {
  [SHOULD_IGNORE_CONFIGURATION_CHANGE: string]: boolean
}

let state: State = {
  SHOULD_IGNORE_CONFIGURATION_CHANGE: false
}

const getState = () => state
const setState = (newState: State) => {
  state = { ...state, ...newState }
}

export default {
  getState,
  setState
}
