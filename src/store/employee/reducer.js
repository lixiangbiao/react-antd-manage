import * as constans from './constans'
const defaultState = {
    editmployee:{}
}

//reducer 可以介绍state 但不能修改state
export default (state = defaultState,action) =>{
    if(action.type===constans.SET_EDIT_EMPLOYEE){
        const  newState = JSON.parse(JSON.stringify(state));
        newState.editmployee = action.value;
        return newState;
    }
    return state
}