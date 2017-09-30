import React, { Component, PropTypes } from 'react';
import Card from '../Card/Card.view';
export default class List extends Component {

    constructor(props) {
        super(props);
    }

    render() {
		const { list_data, on_pick } = this.props
		return(
			<div className="cards-list">
				<ul>
					{
						list_data.map( item =>  
							<li key={item.id} className="card-item " onClick={()=>on_pick(item)}> 
								<Card {...item} /> 
							</li> 
						)
					}
				</ul>
			</div>
		)
	}
}



