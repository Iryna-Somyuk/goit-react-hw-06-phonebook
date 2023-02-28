import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts;
export const getFilter = state => state.filter;
export const getFilteredContacts = createSelector([getContacts, getFilter], (contacts, filter) => {
    // const normalizedFilter = filter.toLowerCase().trim(); 
    // return contacts.filter((contact => contacts.name.toLowerCase().includes(normalizedFilter)))

  
        const normalizedFilterValue = filter.toLowerCase().trim();
    
        return contacts.filter(({ name }) =>
          name.toLowerCase().includes(normalizedFilterValue)
        );
   

})

