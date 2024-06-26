import { configureStore } from '@reduxjs/toolkit'
import generateDataReducer from './features/generateDataSlice'

const store = configureStore({
    reducer: {
        generateData: generateDataReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;