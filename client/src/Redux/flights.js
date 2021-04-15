import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    prices: {},
    current_id: ''
};

const flightsSlice = createSlice({
    name: 'flights',
    initialState,
    reducers: {

    },
    extraReducers: {

    }
});


export default flightsSlice.reducer;