import fetch from 'isomorphic-fetch'

export const FETCHING_BOTS = 'FETCHING_BOTS'
export const DATA_FETCHED = 'DATA_FETCHED'
export const FETCH_DATA_ERROR  = 'FETCH_DATA_ERROR'
export const UPDATE_PROFILE  = 'UPDATE_PROFILE'
export const FILTER_LIST  = 'FILTER_LIST'

export const pickItem = function(profile){
	return({
		type: UPDATE_PROFILE,
		payload: profile
	})
}
export const filterData = function(filteredList){
	return({
		type: FILTER_LIST,
		payload: filteredList
	})
}

export const fetchData = ()=> {

	return (dispatch) => {
		dispatch({type:FETCHING_BOTS})

		// return fetch(`//localhost:3000/static/data/MOCK_DATA.json`)
		return fetch(`../../static/data/MOCK_DATA.json`)
		.then((res) => res.json())
				.then(res => dispatch({
					type	: DATA_FETCHED,
					payload	: res
				}))
				.catch( err => dispatch({
					type	: FETCH_DATA_ERROR,
					payload	: err
				}))
	  }
}