import './BookingDetails.css';
import React from 'react';

const BookingDetails = ({ data, setDetails }) => {
    
    let fromTo;
    if(data) fromTo = `${data.routes[0].from} > ${data.routes[data.routes.length - 1].to}`;

    const flights = data.routes.map((item, i) => (
        <div key={i} className='booking-flight' >
            <div>
                <h3>{item.from}</h3>
                <p id='gray' >{new Date(item.flightStart).toLocaleDateString()}</p>
                <h3>{new Date(item.flightStart).toLocaleTimeString()}</h3>
            </div>
            <div>
                <p id='gray' >{item.company.name}</p>
                <p id='gray' >{Math.floor(item.total_time / 1000 / 60 / 60 / 24)}d {Math.round(((item.total_time / 1000 / 60 / 60 / 24) - Math.floor(item.total_time / 1000 / 60 / 60 / 24)) * 24)}h</p>
            </div>
            <div>
                <h3>{item.to}</h3>
                <p id='gray' >{new Date(item.flightEnd).toLocaleDateString()}</p>
                <h3>{new Date(item.flightEnd).toLocaleTimeString()}</h3>
            </div> 
        </div>
    ));

    return (
        <div className='booking-details' >
            <div className='bookings-page-content' >
                <div className='booking' >
                    <div>
                        <h3>{data.first_name} {data.last_name}</h3>
                        <p id='gray' >Booked on {new Date(parseInt(data.date)).toLocaleDateString()}</p>
                    </div>
                    <div className='booking-from-to' >
                        <p id='gray' >{fromTo}</p>
                    </div>  
                    <div className='booking-flights' >
                        {flights}
                    </div>
                    <div className='booking-time-price' >
                        <div className='booking-time-price-row' >
                            <p id='gray' >Total time (with stops):</p>
                            <h3>{Math.floor(data.total_travel_time / 1000 / 60 / 60 / 24)}d {Math.round(((data.total_travel_time / 1000 / 60 / 60 / 24) - Math.floor(data.total_travel_time / 1000 / 60 / 60 / 24)) * 24)}h</h3>
                        </div>
                        <div className='booking-time-price-row' >
                            <p id='gray' >Total price:</p>
                            <h3>{data.price} €</h3>
                        </div>
                    </div>
                    <button onClick={() => setDetails(false)} >Return</button>
                </div>
            </div>
        </div>
    );
};

export default BookingDetails;