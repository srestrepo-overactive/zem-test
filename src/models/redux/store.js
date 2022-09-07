import { configureStore } from '@reduxjs/toolkit';
import chooseViewReducer from './chooseView/reducer';

export default configureStore({
  reducer: {
    chooseView: chooseViewReducer
  }
});
