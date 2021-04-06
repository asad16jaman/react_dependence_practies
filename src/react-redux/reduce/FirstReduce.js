
const inisialState={
    count:0,
    name:'asad',
    roll:12,
    home:'nilphamari'
}
function myfirstreduce(state=inisialState,action){

    if(action.type === 'ADD'){
        return{
            ...state,
            count:state.count + 1
        }
    }else if(action.type === 'SUB'){
        return{
            ...state,
            count:state.count -1
        }
    }

    return state
}

export default myfirstreduce
