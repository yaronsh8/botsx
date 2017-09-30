import React, { Component, PropTypes } from 'react';
import css from './Filter.css'; 

export default class Filter extends Component {

    constructor(props) {
        super(props);
    }

     update_list(event) {
        const { list_data , on_filter } = this.props;
        let txt = event.target.value;

        let filtered_list = list_data.filter( item =>
            item.first_name.toLowerCase().includes(txt.toLowerCase()) 
        )
        on_filter(filtered_list);
    }
    
    render() {
        return <input type="text" className="filter" onChange={ (e)=> this.update_list(e)  } />
    }

 
}

