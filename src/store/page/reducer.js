import * as constans from './constans'
const defaultState = {
    collapsed:false
}

export default (state = defaultState,action)=>{
    if(action.type === constans.TOGGLE_COLLAPSED){
        const  newState = JSON.parse(JSON.stringify(state));
        newState.collapsed = !state.collapsed
        return newState;
    }
    return state;
}