import './Search.css';
import React, { useState, useEffect } from 'react';
import queryString from 'query-string';

import Header from '../Header/Header';
import SearchResult from '../SearchResult/SearchResult';

import { getFlights } from '../../Services/flights';

const Search = ({ location }) => {
    const [flights, setFlights] = useState();
    const [validUntil, setValidUntil] = useState();

    const from = queryString.parse(location.search).from;
    const to = queryString.parse(location.search).to;
    const filter = queryString.parse(location.search).filter;
    const company = queryString.parse(location.search).company;

    useEffect(() => {
        async function getResults(){
            const data = {
                from: from,
                to: to
            };
            if(filter) data.filter = filter;
            if(company) data.company = company;

            const result = await getFlights(data);
            if(!result) {
                alert('Something went wrong, please refresh the page')
                return;
            };

            setFlights(result.options);
            setValidUntil(result.validUntil);
        };
    }, [filter, company]);

    return (
        <div className='search-page' >
            <Header />
            <div className='search-page-content' >
                <div className='search-header' >
                    <h3>Routes From {from} To {to}</h3>
                </div>
            </div>
        </div>
    );
};

export default Search;