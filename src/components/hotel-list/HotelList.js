/* HotelList Component, used for listing the HotelCards to be shown */
/* Imports for Depending Components */
import React, { Component } from 'react';
import HotelCard from '../hotel-card/HotelCard';

/* Component Styles Import */
import './HotelList.scss';


class HotelList extends Component {
  render() {
    /* Retrieving Hotels' data from parent component through props */
    const filteredHotels = this.props.hotels;
    const noResult = this.props.noResult;

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
          noResult 
          ? 
            <div className="no-result">
              <h1>No Result Found</h1>
            </div>
          :
            hotelList  
        }
        
      </div>
    );
  }
}

export default HotelList;