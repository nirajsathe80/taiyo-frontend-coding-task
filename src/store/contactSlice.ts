import { createSlice } from "@reduxjs/toolkit";
import { ContatcInitialState } from "../types";
import _ from "lodash";

export const initialState: ContatcInitialState = {
  contactList: [],
};

const contactSlice = createSlice({
  name: "contact",
  initialState: initialState,
  reducers: {
    updateContactList: (state, action) => {
      state.contactList = [...state.contactList, action.payload];
    },

    updateExistingContact: (state, action) => {
      const contactId = action?.payload?.id;
      const index = _.findIndex(
        state.contactList,
        (contact) => _.parseInt(contact.id) === _.parseInt(contactId)
      );
      state.contactList[index] = action.payload;
    },

    handleDeleteContact: (state, action) => {
      const confirmedValue =
        window &&
        window.confirm("Are you sure you want to delete this contact");
      if (!confirmedValue) {
        return;
      }
      const contactId = action.payload;
      const filteredContact = _.filter(
        state.contactList,
        (contact) => contact.id !== contactId
      );
      state.contactList = filteredContact;
    },
  },
});

export const { updateContactList, handleDeleteContact, updateExistingContact } =
  contactSlice.actions;

export default contactSlice.reducer;
