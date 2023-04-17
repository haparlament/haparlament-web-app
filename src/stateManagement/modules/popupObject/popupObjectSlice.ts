import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

// Define a type for the slice state
interface PopupObjectState {
  data: any
}

// Define the initial state using that type
const initialState: PopupObjectState = {
  data: {
    title:"",
    text:"",
    handleConfirm:null,
    handleCancel:null,
  }
}

export const popupObjectSlice = createSlice({
  name: 'popupObject',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setPopupObject: (state, action: PayloadAction<PopupObjectState['data']>) => {
      state.data = {
        ...state.data,
        ...action.payload
      }
    },
  },
})

export const { setPopupObject } = popupObjectSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectPopupObject = (state: RootState) => state.popupObject.data

export default popupObjectSlice.reducer