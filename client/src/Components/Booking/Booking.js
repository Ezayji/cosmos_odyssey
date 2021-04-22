import './Booking.css';
import React, { useState } from 'react';

import BookingDetails from '../BookingDetails/BookingDetails';

const Booking = ({ data }) => {
    
    const [details, setDetails] = useState(false);

    let fromTo;
    if(data) fromTo = `${data.routes[0].from} > ${data.routes[data.routes.length - 1].to}`;

    let detailView;
    if(details) detailView = <BookingDetails data={data} setDetails={setDetails} />

    return (
        <div className='booking' >
            <div>
                <h3>{data.first_name} {data.last_name}</h3>
                <p id='gray' >Booked on {new Date(parseInt(data.date)).toLocaleDateString()}</p>
            </div>
            <div className='booking-from-to' >
                <p id='gray' >{fromTo}</p>
            </div>
            <button onClick={() => setDetails(true)} >Details</button>
            {detailView}
        </div>
    );
};

export default Booking;