import ActionType from './globalActionType'

const globalState = {
  sayur: {},
  pesanan: {}
}

const rootReducer = (state = globalState, action) => {
  
  switch(action.type){
    case ActionType.SAYUR:
      return{
        ...state,
        sayur: action.payload
      }
      case ActionType.PESANAN:
      return{
        ...state,
        pesanan: action.payload
      }
    default:
      return state
  }
  
}


export default rootReducer