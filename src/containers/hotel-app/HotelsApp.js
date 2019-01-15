/* HotelApp Component, acting as entry component for the app */
/* Imports for Depending Components */
import React, { Component } from 'react';
import HotelsList from '../../components/hotel-list/HotelList';
import Sort from '../../components/sort/Sort';
import Search from '../../components/search/Search';

/* Component Styles Import */
import './HotelsApp.scss';

class HotelsApp extends Component {

    state = {
        hotels: [],
        filteredHotels: [],
        isLoading: true,
        noResult: false
    }

    componentDidMount(){
        /* API call for hotels' data fetch */

        fetch('https://api.myjson.com/bins/tl0bp')
        .then(response => response.json())
        .then(hotelsData => this.setState({
            hotels: hotelsData.hotels,
            filteredHotels: hotelsData.hotels,
            isLoading: false
        }));      
    }

    /* doSort is a function for handling sorting actions */
    doSort = (type, order) => {
        const hotels = this.state.filteredHotels;
        
        if(hotels.length > 0) {
            
            const sortedHotels = hotels.sort((hotelA, hotelB)=>{
                /* a check that each hotel has the property to be compared */
                if(!hotelA.hasOwnProperty(type) || !hotelB.hasOwnProperty(type)){
                    return 0;
                }

                /* transforming property in each hotel to lowercase for comparison */
                const hotelAName = (typeof hotelA[type] == 'string') ? hotelA[type].toLowerCase() : hotelA[type];
                const hotelBName = (typeof hotelB[type] == 'string') ? hotelB[type].toLowerCase() : hotelB[type];

                let i = 0;

                if(hotelAName > hotelBName){
                    i = 1;
                } else if (hotelAName < hotelBName){
                    i = -1;
                }

                /* Switching between Ascending and Descending depending on order variable value retreived */
                return (
                    (order === 'dsc') ? (i * -1) : i
                );
                
            });
            
            this.setState({
                filteredHotels: sortedHotels
            });
        }
    }

    /* doSearch is a function for handling Search Input */
    doSearch = (searchInput) => {
        const { hotels } = this.state;

        if(hotels.length > 0) {
            const searchedHotels = hotels.filter((hotel)=>{
                
                let hotelName = hotel.name.toLowerCase();
                let hotelSearch = searchInput.toLowerCase();

                return hotelName.includes(hotelSearch);
            });
            
            this.setState({
                filteredHotels: searchedHotels,
                noResult: false
            })

            if(searchedHotels.length == 0){
                this.setState({
                    noResult: true
                })
            }
            
        }
    }

    render(){
        const hotels = this.state.filteredHotels;
        
        return (
            <div className="hotels-app">
                <header>
                    <h3>
                        Hotels Listing 
                    </h3>
                </header>
    
                <Sort onSortClick={ this.doSort } />
                <section>
                    <aside>
                        <Search onSearch={this.doSearch} />
                    </aside>
                        
                    
                    <section>
                        {
                            this.state.isLoading 
                            ?
                                <section className="loadingSpinner">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </section>    
                            : 
                                <HotelsList noResult={this.state.noResult}  hotels={ hotels } />
                            
                        }
                    </section>
                </section>
            </div>
        );
        
    }
}

export default HotelsApp;