import { combineReducers } from 'redux'

import appReducer from '../containers/App/App.reducer'

const rootReducer = combineReducers({
  app      : appReducer
})

export default rootReducer

