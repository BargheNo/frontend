import { configureStore } from '@reduxjs/toolkit';

// Import your reducers here
import counterReducer from './slices/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer, // Add your reducers here
  },
});