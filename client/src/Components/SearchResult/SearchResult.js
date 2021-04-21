import './SearchResult.css';
import React, { useState, useEffect } from 'react';

import OptionDetails from '../OptionDetails/OptionDetails';

const SearchResult = ({ data, validUntil }) => {

    const [start, setStart] = useState();
    const [end, setEnd] = useState();
    const [detailView, setDetailView] = useState(false);
    
    useEffect(() => {
        setStart(new Date(data.start));
        setEnd(new Date(data.end));
    }, [data]);

    let startTime;

    if(start){
        startTime = (
            <div>
                <h3 id='margin-bottom' >{data.route[0]}</h3>
                <p id='gray' >{start.toLocaleDateString()}</p>
                <h3 id='margin-top' >{start.toLocaleTimeString()}</h3>
            </div>
        );
    };

    let endTime;

    if(end){
        endTime = (
            <div>
                <h3 id='margin-bottom' >{data.route[data.route.length - 1]}</h3>
                <p id='gray' >{end.toLocaleDateString()}</p>
                <h3 id='margin-top' >{end.toLocaleTimeString()}</h3>
            </div>
        );
    };

    const onClick = (e) => {
        e.preventDefault();
        
        if(parseInt(validUntil) <= new Date().getTime()) {
            alert('Current prices are expired, please refresh the page');
            return;
        };

        setDetailView(true);
    };

    let details;

    if(detailView) details = <OptionDetails data={data} validUntil={validUntil} start={start} end={end}  setDetailView={setDetailView} />
    if(!detailView) details = null;

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
                <div id='margin-top' className='search-result-data-row' >
                    <p id='gray' >Price</p>
                    <h3>{Math.round(data.price)} €</h3>
                </div>
            </div>
            <button onClick={onClick} >Details</button>
            {details}
        </div>
    );
};

export default SearchResult;