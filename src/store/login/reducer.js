import * as constans from './constans'
const defaultState = {
    loginStatus:false,
    userName:null
}

export default (state = defaultState,action)=>{
    if(action.type === constans.LOGIN_STATUS){
        const  newState = JSON.parse(JSON.stringify(state));
        newState.loginStatus = action.value.status
        newState.userName = action.value.name
        return newState;
    }
    return state;
}