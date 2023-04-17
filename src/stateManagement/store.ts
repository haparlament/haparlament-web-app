import { configureStore } from '@reduxjs/toolkit'
import sessionSubscriptionReducer from './modules/sessionSubscription/sessionSubscriptionSlice';
import popupInfoReducer from './modules/popupInfo/popupInfoSlice'

export const store = configureStore({
  reducer: {
    sessionSubscription: sessionSubscriptionReducer,
    popupInfo: popupInfoReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch