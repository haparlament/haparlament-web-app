import { configureStore } from '@reduxjs/toolkit'
import sessionSubscriptionReducer from './modules/sessionSubscription/sessionSubscriptionSlice';
import popupObjectReducer from './modules/popupObject/popupObjectSlice'

export const store = configureStore({
  reducer: {
    sessionSubscription: sessionSubscriptionReducer,
    popupObject: popupObjectReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch