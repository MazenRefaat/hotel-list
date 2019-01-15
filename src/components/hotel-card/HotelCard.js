/* HotelCard Component, used for displaying single hotel info */
/* Imports for Depending Components */
import React, { Component } from 'react';

/* Component Styles Import */
import './HotelCard.scss';

class HotelCard extends Component {

    render(){
        const { name, price, city }  = this.props.hotel;
        return (
            <div className="hotel-app__list-card">
                <div className="hotel-img">

                </div>
                
                
                <h3 className="hotel-name">
                   { name }
                </h3>

                <p className="hotel-price">
                    { price } $
                </p>

                <p className="hotel-city">
                    { city }
                </p>
            </div>
        );
    }
}

export default HotelCard;
