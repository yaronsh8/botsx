// import {
//     DATA_FETCHED ,
//     FETCH_DATA_ERROR
//   } from './App.actions'
  
  import * as actions from './App.actions';
  
  let initialState={
    original_list:[],
    displayed_list:[],
    profile:{},
    notification:''
  }

  export default ( state=initialState, action) => {
    
    switch (action.type) {
  
      case actions.FETCHING_BOTS:
        return Object.assign({},state,{notification:'Loading Data...'})

      case actions.DATA_FETCHED:
      
        return Object.assign({},state,{
          original_list:action.payload,
          displayed_list:action.payload,
          profile:action.payload[0],
          notification:'Bots fetched'})
          
      case actions.FETCH_DATA_ERROR:
  
        return Object.assign({},state,{notification:'Error'})

      case actions.UPDATE_PROFILE:
        return Object.assign({},state,{profile:action.payload})

      case actions.FILTER_LIST:
          return Object.assign({},state,{displayed_list:action.payload})

        
      default:
        return state
    }
  }