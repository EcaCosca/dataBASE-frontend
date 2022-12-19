import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/counter'
import preFlightChecklistReducer from './reducers/preFlightChecklist'

export default configureStore({
  reducer: {
    counter: counterReducer,
    preFlightChecklist: preFlightChecklistReducer,
  },
})