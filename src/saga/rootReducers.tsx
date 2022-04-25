import { combineReducers } from 'redux'
import commonReducer from 'redux/reducers'

// eslint-disable-next-line import/no-anonymous-default-export
export default () =>
  combineReducers({
    common: commonReducer,
  })
