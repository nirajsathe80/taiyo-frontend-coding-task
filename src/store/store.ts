import { configureStore } from "@reduxjs/toolkit";
import ContactSlice from "./contactSlice";

const store = configureStore({
  reducer: {
    contact: ContactSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
