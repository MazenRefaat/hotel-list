/* Sort Component, used for listing the HotelCards to be shown */
import React, { Component } from 'react';

/* Component Styles Import */
import './Sort.scss';

class Sort extends Component {
    state= {
        sortOrder: {
            name: 'dsc',
            price: 'dsc'
        }
    }

    /* handleSort is a function for handling sort action buttons press */
    handleSort = (e) => {
        /*
            {type} is used for retrieving sorting type (name or price) based button pressed.
            {order} is used to store sort order whether Ascending or Descending.
            {sOrder} is a dummy object used to modify sortOrder object after changes.
        */

        let type = e.target.name;
        let order = this.state.sortOrder[type] === 'dsc'? 'asc' : 'dsc';
        let sOrder = {...this.state.sortOrder};
        sOrder[type] = order;

        this.setState({
            sortOrder: sOrder
        });
        
        this.props.onSortClick(type, order);
    }
    render(){
        const {name, price} = this.state.sortOrder;
        return (
            <div className="hotel-app__list-sort">
                <div className="sort-name">
                    <button name="name" onClick={this.handleSort} >
                        Sort by Name 

                        <span order={name}>&#8593;</span>
                    </button>
                </div>

                <div className="sort-price">
                    <button name="price" onClick={this.handleSort} >
                        Sort by Price  

                        <span  order={price}>&#8593;</span>
                    </button>
                </div>
            </div>
        )
    }
}

export default Sort;