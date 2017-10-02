import React, { Component } from 'react';
import { connect } from 'react-redux';
// import fetch from 'isomorphic-fetch';
import TopBar from '../../components/TopBar/TopBar.view'; 
import List from '../../components/List/List.view'; 
import Filter from '../../components/Filter/Filter.view'; 
import Profile from '../../components/Profile/Profile.view'; 

import { pickItem, filterData } from './App.actions'

import css from './App.css';


class App extends Component {
        constructor(props){
            super(props);
        }

        render() {
            let { 
             original_list, 
             displayed_list,
             profile,
             doPick,
             doFilterData,
		  } = this.props

            return (
            <div className="app" >
                <TopBar>Choose your Bot - built with React+Redux</TopBar>
                <div className="filter-box">
                    {/* {console.log('original: ', {original_list}, 'displayed: ', {displayed_list})} */}
                    <h4 className="filter-title">Filter by Bot name: </h4>
                    <Filter className="filter" list_data={original_list} on_filter={doFilterData}/>                    
                </div>
                <div className="content-box">
                    {/* {console.log('this.props (app): ', this.props)} */}
                    <Profile {...profile}/>
                    <List list_data={displayed_list} on_pick={doPick}/> 
                </div>
            </div>
            )
        }
}

function mapStateToProps(state) {
	const { original_list, displayed_list, profile, notification } = state.app;
	return {
		original_list, displayed_list, profile, notification
	}
}

function mapDispatchToProps(dispatch) {

	return {
		doFilterData: (filtered_list) => dispatch( filterData(filtered_list) ),
        doPick : (item) => dispatch(pickItem(item) )
		// doFetchRandomUser: () => dispatch(fetchRandomUser()),
		// doChangeColor: (color) => dispatch( changeColor(color) )
	}
	
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
