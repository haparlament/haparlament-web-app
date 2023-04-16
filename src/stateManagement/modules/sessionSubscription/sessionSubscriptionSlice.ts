import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

// Define a type for the slice state
interface SessionSubscriptionState {
  data: any
}

// Define the initial state using that type
const initialState: SessionSubscriptionState = {
  data: {
    imageId: "",
    feeling: "",
    userName: "",
    phoneNumber: "",
    day: "",
    hourRange: "",
  }
}

export const sessionSubscriptionSlice = createSlice({
  name: 'sessionSubscription',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setSession: (state, action: PayloadAction<SessionSubscriptionState['data']>) => {
      state.data = {
        ...state.data,
        ...action.payload
      }
    },
  },
})

export const { setSession } = sessionSubscriptionSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectSessionSubscription = (state: RootState) => state.sessionSubscription.data

export default sessionSubscriptionSlice.reducer