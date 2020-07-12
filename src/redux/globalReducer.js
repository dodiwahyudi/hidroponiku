import ActionType from './globalActionType'

const globalState = {
  sayur: {}
}

const rootReducer = (state = globalState, action) => {
  
  switch(action.type){
    case ActionType.SAYUR:
      return{
        ...state,
        sayur: action.payload
      }
    default:
      return state
  }
  
}


export default rootReducer