import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

interface DataState {
    generatedData: any[],
    dataFetched: boolean,
    isError: boolean,
    errors: string | null,
    isLoading: boolean
}

const initialState: DataState = {
    generatedData: [],
    dataFetched: false,
    isError: false,
    errors: null,
    isLoading: false
}

// Async thunk action to fetch data
export const fetchData = createAsyncThunk('data/fetchData', async () => {
    // const response = await axios.get('https://api.example.com/data');
    const response = [{color: "red", value: "#f00"}, {color: "green", value: "#0f0"}];
    return response;
});

const generateDataSlice = createSlice({
    name: 'generateData',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchData.pending, (state) => {
            state.generatedData = []
            state.dataFetched = false
            state.isError = false
            state.errors = null
            state.isLoading = true
        })
        .addCase(fetchData.fulfilled, (state, action: PayloadAction<any[]>) => {
            state.isLoading = false
            state.dataFetched = true
            state.generatedData = action.payload
        })
        .addCase(fetchData.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.errors = action.error.message || 'Failed to fetch data';
        });
    }
})

export default generateDataSlice.reducer