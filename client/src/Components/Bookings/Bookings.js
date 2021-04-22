import './Bookings.css';
import React, { useState, useEffect } from 'react';

import Header from '../Header/Header';

import Booking from '../Booking/Booking';

import { getBookings } from '../../Services/bookings';

const Bookings = () => {
    const [bookings, setBookings] = useState([]);
    const [noResults, setNoResults] = useState(false);

    let results;
    // display bookings
    if(bookings.length !== 0){
        results = bookings.map((item, i) => (
            <Booking data={item} key={i} />
        ));
    };

    if(noResults) {
        results = (
            <div>
                <p>{noResults}</p>
            </div>
        );
    };


    useEffect(() => {
        async function fetchBookings(){
            const result = await getBookings();

            if(!result){
                alert('Something went wrong, please refresh the page');
                return;
            };

            if(result.error){
                setNoResults(result.error);
                return;
            };

            setBookings(result);

        };

        fetchBookings();

    }, []);

    return (
        <div className='bookings-page' >
            <Header />
            <div className='bookings-page-content' >
                <div className='bookings-header' >
                    <h3>Bookings</h3>
                </div>
                {results}
            </div>
        </div>
    );
};

export default Bookings;