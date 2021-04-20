import './SearchResult.css';
import React, { useState, useEffect } from 'react';

const SearchResult = ({ data, validUntil }) => {

    const [start, setStart] = useState();
    const [end, setEnd] = useState();
    
    useEffect(() => {
        setStart(new Date(data.start));
        setEnd(new Date(data.end));
    }, [data]);

    let startTime;

    if(start){
        startTime = (
            <div>
                <h3>{data.route[0]}</h3>
                <p id='gray' >{start.toLocaleDateString()}</p>
                <h3>{start.toLocaleTimeString()}</h3>
            </div>
        );
    };

    let endTime;

    if(end){
        endTime = (
            <div>
                <h3>{data.route[data.route.length - 1]}</h3>
                <p id='gray' >{end.toLocaleDateString()}</p>
                <h3>{end.toLocaleTimeString()}</h3>
            </div>
        );
    };

    return (
        <div className='search-result' >
            <div className='search-result-times' >
                {startTime}
                <div>
                    <p id='gray' >Stops</p>
                    <h3>{data.flights.length - 1}</h3>
                </div>
                {endTime}      
            </div>
            <div className='search-result-info' >
                <div className='search-result-data-row' >
                    <p id='gray' >Distance</p>
                    <h3>{data.distance} km</h3>
                </div>
                <div className='search-result-data-row' >
                    <p id='gray' >Price</p>
                    <h3>{data.price} €</h3>
                </div>
            </div>
            <button>Book</button>
        </div>
    );
};

export default SearchResult;