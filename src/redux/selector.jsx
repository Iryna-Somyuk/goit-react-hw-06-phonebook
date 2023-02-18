import { createSelector } from "react-redux/es/exports";
export const getContacts = state => state.contacts;
export const getFilter = state => state.filter;
export const getFilteredContacts = createSelector([getContacts, getFilter], (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase().trim(); 
    return contacts.filter((contact => contacts.name.toLowerCase().includes(normalizedFilter)))

})

