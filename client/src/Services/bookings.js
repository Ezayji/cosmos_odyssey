import host from './host';

import axios from 'axios';

// post new booking
export async function postNewBooking(data){
    const url = `${host}/api/bookings`;
    try{
        await axios.post(url, data);
        return true;
    } catch (e) {
        console.log('Post Booking Error:\n', e.message);
        return false;
    };
};


// get bookings
export async function getBookings(){
    const url = `${host}/api/bookings`;
    try{
        const response = await axios.get(url);
        return response.data;
    } catch (e) {
        console.log('Get Bookings Error:\n', e.message);
        return false;
    };
};