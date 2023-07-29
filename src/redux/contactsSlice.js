import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = {
    contacts: []
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            ...text,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact: (state, action) => {
      const index = state.contacts.findIndex(
        task => task.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;