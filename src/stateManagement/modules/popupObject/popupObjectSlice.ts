import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

// Define a type for the slice state
interface PopupObjectState {
  data: any
}

// Define the initial state using that type
const initialState: PopupObjectState = {
  data: null
}

export const popupObjectSlice = createSlice({
  name: 'popupObject',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    openPopup: (state, action: PayloadAction<PopupObjectState['data']>) => {
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

export const { openPopup, closePopup } = popupObjectSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectPopupObject = (state: RootState) => state.popupObject.data

export default popupObjectSlice.reducer