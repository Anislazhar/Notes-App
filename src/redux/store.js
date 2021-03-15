import { configureStore } from '@reduxjs/toolkit';
import NotesReducer from './notesReducer';

export default configureStore({
  reducer: {
    counter: NotesReducer,
  },
});
