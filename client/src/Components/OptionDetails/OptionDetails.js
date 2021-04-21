import './OptionDetails.css';
import React from 'react';

const OptionDetails = ({ data, validUntil, start, end, setDetailView }) => {



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
                    <div className='search-result-info' >
                        <div className='search-result-data-row' >
                            <p id='gray' >Total time:</p>
                            <h3></h3>
                        </div>
                        <div id='margin-top' className='search-result-data-row' >
                            <p id='gray' >Total price:</p>
                            <h3>{Math.round(data.price)} €</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default OptionDetails;