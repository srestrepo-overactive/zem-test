import { createSlice } from '@reduxjs/toolkit';

export const chooseViewSlice = createSlice({
  name: 'chooseView',
  initialState: {
    type: 'list'
  },
  reducers: {
    changeType: (state, action) => {
      const { payload } = action;
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.type = payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { changeType } = chooseViewSlice.actions;

export default chooseViewSlice.reducer;
