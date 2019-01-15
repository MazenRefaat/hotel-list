/* HotelList Component, used for listing the HotelCards to be shown */
/* Imports for Depending Components */
import React, { Component } from 'react';
import HotelCard from '../hotel-card/HotelCard';

/* Component Styles Import */
import './HotelList.scss';


class HotelList extends Component {
  state= {
    noResult: false
  }

  render() {
    /* Retrieving Hotels' data from parent component through props */
    const filteredHotels = this.props.hotels;

    /* Mapping retrieved Hotels' data to Hotel Cards to be shown in the list */
    const hotelList = filteredHotels.map(
      (hotel, i) => {
        return ( 
          <HotelCard hotel ={ hotel } key={ i } />
        );
      }
    )

    return ( 
      <div className = "hotel-app__list" > 
        {
          (this.state.noResult) ? 
            <div className="no-result"></div>
          :
            hotelList  
        }
        
      </div>
    );
  }
}

export default HotelList;