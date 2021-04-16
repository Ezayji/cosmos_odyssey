import './Search.css';
import React from 'react';
import queryString from 'query-string';

import Header from '../Header/Header';

const Search = ({ location }) => {
    // console.log(location.search);
    // console.log(queryString.parse(location.search));

    return (
        <div className='search-page' >
            <Header />
            <div className='search-page-content' >
                <div className='search-header' >
                    <h3>Routes From {queryString.parse(location.search).from} To {queryString.parse(location.search).to}</h3>
                </div>
            </div>
        </div>
    );
};

export default Search;