import { combineReducers } from 'redux'
import { reducer as employeereducer} from './employee'
import {reducer as pagereducer } from './page'
const reducer = combineReducers({
    employee:employeereducer,
    page:pagereducer
})

export default reducer