
import {
    FILTER_LIST,
  } from './Filter.actions'
  
  export default function(state = {displayed_list: []}, action) {
  
      switch (action.type) {
        case FILTER_LIST:{
            console.log('state: ', state, 'action:' ,action)
                state={
                    ...state, 
                    displayed_list: action.displayed_list,
            }
        }
        default:
          return state
      }
  
  }
  
  