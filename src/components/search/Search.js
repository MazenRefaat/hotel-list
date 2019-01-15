/* Search Component, used for listing the HotelCards to be shown */
import React, {Component} from 'react';


/* Component Styles Import */
import './Search.scss';

class Search extends Component {
    /* handleSearch is a function for handling search input change */
    handleSearch = (e) => {
        let searchText = e.target.value;
        this.props.onSearch(searchText);
    }
    render(){
        return(
            <div className="hotel-app__list-search">
                <div className="searchWrapper">
                    <input onChange={this.handleSearch} placeholder="Hotel Name" type="text"/>
                    <span role="img" aria-label="Search">&#128269;</span>
                </div>
            </div>
        );
    }
}

export default Search;