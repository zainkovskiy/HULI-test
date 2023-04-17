import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IConfigState {
  auth: boolean,
}

const initialState: IConfigState = {
  auth: false,
}

const configSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    toggleAuth(state, action:PayloadAction<boolean>) {
      state.auth = action.payload;
    },
  }
})
export const { toggleAuth } = configSlice.actions;
export default configSlice.reducer;