import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

// Define a type for the slice state
interface PopupInfoState {
  data: any
}

// Define the initial state using that type
const initialState: PopupInfoState = {
  data: null
}

export const popupInfoSlice = createSlice({
  name: 'popupInfo',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    openPopup: (state, action: PayloadAction<PopupInfoState['data']>) => {
      state.data = {
        ...state.data,
        ...action.payload
      }
    },
    closePopup: (state) => {
      state.data = null;
    },
  },
})

export const { openPopup, closePopup } = popupInfoSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectPopupInfo = (state: RootState) => state.popupInfo.data

export default popupInfoSlice.reducer