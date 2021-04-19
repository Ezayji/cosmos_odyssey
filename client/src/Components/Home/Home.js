import './Home.css';
import React, { useState } from 'react';

const destinations = [
    'Mercury',
    'Venus',
    'Earth',
    'Mars',
    'Jupiter',
    'Saturn',
    'Uranus',
    'Neptune'
];

const Home = ({ history }) => {

    const [ from, setFrom ] = useState('');
    const [ to, setTo ] = useState('');

    const planets = destinations.map((item, i) => (
        <option key={i} value={item} >{item}</option>
    ));

    const onSubmit = (e) => {
        e.preventDefault();

        if(from === to || from === '' || to === '') return;

        history.push(`/search?from=${from}&to=${to}`)
    };

    return (
        <div className='home' >
            <div className='home-content-wrapper' >
                <div className='home-logo' >
                    <h1>COSMOS ODYSSEY</h1>
                </div>
                <form onSubmit={onSubmit} className='route-selector' >
                    <div className='route-options' >
                        <label>
                            <p>FROM</p>
                            <select onChange={(e) => setFrom(e.target.value)} value={from} >
                                <option value='' ></option>
                                {planets}
                            </select>
                        </label>
                        <label>
                            <p>TO</p>
                            <select onChange={(e) => setTo(e.target.value)} value={to} >
                                <option value='' ></option>
                                {planets}
                            </select>
                        </label>
                    </div>
                    <button>Search</button>
                </form>
            </div>
        </div>
    );
};

/*
<h3>The finest space travel offers</h3>
*/

export default Home;