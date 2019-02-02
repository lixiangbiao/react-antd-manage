import * as constans from './constans'
const defaultState = {
    dataSource:[]
}

export default (state = defaultState,action)=>{
    if(action.type === constans.GET_ENTER_TABLE){
        const  newState = JSON.parse(JSON.stringify(state));
        newState.dataSource = action.value
        return newState;
    }
    return state;
}