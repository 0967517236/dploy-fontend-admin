import {ActionType} from '../Action/userAction'

const list ={
    lists: []
}

const userReducer = (state=list,action) => {
    switch (action.type){
        case ActionType.GET_USER:{
            return {...state}
        }
      
        case  ActionType.GET_USER_SUCCESS: {
            console.log(action.payload)
        
            return {...state, lists: action.payload}
          }
        case ActionType.GET_USER_ERROR:{
            return {...state}
        }
        case ActionType.EDIT_DATA_USER:{
            console.log(action.payload.list)
            return {...state}
        }
        case ActionType.EDIT_DATA_USER_SUCCESS:{
            console.log(action.payload)
            const newState = action.payload
             state = newState
            return {...state}
        }
        case ActionType.EDIT_DATA_USER_ERROR:{
            return {...state}
        }
        default:
            return state;
    }
}

export default userReducer;