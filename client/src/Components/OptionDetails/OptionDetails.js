import './OptionDetails.css';
import React, { useState } from 'react';

const OptionDetails = ({ data, validUntil, start, end, setDetailView }) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        
        if(parseInt(validUntil) <= new Date().getTime()) {
            alert('Current prices are expired, please refresh the page');
            return;
        };



    };

    let flights;

    flights = data.flights.map((item, i) => (
        <div id='margin-top-bottom' key={i} className='search-result-times' >
            <div>
                <h3 id='margin-bottom' >{item.from}</h3>
                <p id='gray' >{new Date(item.flightStart).toLocaleDateString()}</p>
                <h3 id='margin-top' >{new Date(item.flightStart).toLocaleTimeString()}</h3>
            </div>
            <div>
                <p id='gray' >{item.company.name}</p>
                <p id='gray' >{Math.floor(item.total_time / 1000 / 60 / 60 / 24)}d {Math.round(((item.total_time / 1000 / 60 / 60 / 24) - Math.floor(item.total_time / 1000 / 60 / 60 / 24)) * 24)}h</p>
            </div>
            <div>
                <h3 id='margin-bottom' >{item.to}</h3>
                <p id='gray' >{new Date(item.flightEnd).toLocaleDateString()}</p>
                <h3 id='margin-top' >{new Date(item.flightEnd).toLocaleTimeString()}</h3>
            </div> 
        </div>
    ));

    return(
        <div className='option-details' >
            <div className='option-details-outter-wrapper' >
                <button onClick={() => setDetailView(false)} >Return</button>
                <div className='option-details-wrapper' >
                    <div className='search-result-times' >
                        <div>
                            <h3 id='margin-bottom' >{data.route[0]}</h3>
                            <p id='gray' >{start.toLocaleDateString()}</p>
                            <h3 id='margin-top' >{start.toLocaleTimeString()}</h3>
                        </div>
                        <div>
                            <p id='gray' >Stops</p>
                            <h3>{data.flights.length - 1}</h3>
                        </div>
                        <div>
                            <h3 id='margin-bottom' >{data.route[data.route.length - 1]}</h3>
                            <p id='gray' >{end.toLocaleDateString()}</p>
                            <h3 id='margin-top' >{end.toLocaleTimeString()}</h3>
                        </div>      
                    </div>
                    <div className='option-routes' >
                        <p>{data.route.join(' > ')}</p>
                    </div>
                    <div className='option-flights' >
                        {flights}
                    </div>
                    <div className='search-result-info' >
                        <div className='search-result-data-row' >
                            <p id='gray' >Total time (with stops):</p>
                            <h3>{Math.floor(data.travelTime / 1000 / 60 / 60 / 24)}d {Math.round(((data.travelTime / 1000 / 60 / 60 / 24) - Math.floor(data.travelTime / 1000 / 60 / 60 / 24)) * 24)}h</h3>
                        </div>
                        <div id='margin-top' className='search-result-data-row' >
                            <p id='gray' >Total price:</p>
                            <h3>{Math.round(data.price)} €</h3>
                        </div>
                    </div>
                    <form onSubmit={onSubmit} >
                        <div className='option-booking-inputs' >
                            <input onChange={(e) => setFirstName(e.target.value)} value={firstName} placeholder='First name' required />
                            <input onChange={(e) => setLastName(e.target.value)} value={lastName} placeholder='Last name' required />
                        </div>
                        <button>Book</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OptionDetails;