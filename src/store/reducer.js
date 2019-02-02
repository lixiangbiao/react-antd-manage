import { combineReducers } from 'redux'
import { reducer as employeereducer} from './employee'
import {reducer as pagereducer } from './page'
import {reducer as storagereducer} from './storage'
import {reducer as loginreducer} from './login'
const reducer = combineReducers({
    employee:employeereducer,
    page:pagereducer,
    storage:storagereducer,
    login:loginreducer
})

export default reducer