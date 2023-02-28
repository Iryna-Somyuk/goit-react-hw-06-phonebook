import { createSlice, nanoid } from "@reduxjs/toolkit";

export const contactSlice = createSlice({
    name: 'contacts',
    initialState: [],
    reducers: {
        addContact: {
            reducer(state, action) {
              state.push(action.payload);
            },
            prepare(contact) {
              return { payload: { ...contact, id: nanoid() } };
            },
          },
          
        deleteContact(state, action) {
            return state.filter(contact => contact.id !== action.payload)
        },
    }
});

export const contactReducer = contactSlice.reducer;
export const {addContact, deleteContact} = contactSlice.actions;
