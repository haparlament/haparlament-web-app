import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

export interface Time {
  hour: number,
  minute: number
}
interface TimeRange {
  from: Time,
  to: Time
}
export interface SessionSubscriptionData {
  imageEmotion: {
    imageId: string,
    emotion: string,
  },
  timeAvailability: {
    days: string[],
    hoursRanges: TimeRange[],
  },
  user: {
    name: string,
    phoneNumber: string,
  }
}
interface SessionSubscriptionState {
  data: SessionSubscriptionData
}

// Define the initial state using that type
const initialState: SessionSubscriptionState = {
  data: {
    user: {
      name: "",
      phoneNumber: "",
    },
    imageEmotion: {
      imageId: "",
      emotion: "",
    },
    timeAvailability: {
      days: [],
      hoursRanges: [],
    }
  }
}

export const sessionSubscriptionSlice = createSlice({
  name: 'sessionSubscription',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setSession: (state, action: PayloadAction<SessionSubscriptionState['data']>) => {
      state.data = {
        ...action.payload
      }
    },
  },
})

export const { setSession } = sessionSubscriptionSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectSessionSubscription = (state: RootState) => state.sessionSubscription.data

export default sessionSubscriptionSlice.reducer