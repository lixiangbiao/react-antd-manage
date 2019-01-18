const defaultState = {
    inputValue:'hello world',
    list:[]
}

//reducer 可以介绍state 但不能修改state
export default (state = defaultState,action) =>{
    if(action.type==='change_input'){
        const  newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    return state
}