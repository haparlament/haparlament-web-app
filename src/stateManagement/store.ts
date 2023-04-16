import { configureStore } from '@reduxjs/toolkit'
import sessionSubscriptionReducer from './modules/sessionSubscription/sessionSubscriptionSlice';

export const store = configureStore({
  reducer: {
    sessionSubscription: sessionSubscriptionReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch