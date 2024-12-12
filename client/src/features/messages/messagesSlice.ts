import { createSlice } from '@reduxjs/toolkit';
import { IMessage } from '../../types';
import { fetchMessages } from './messagesThunks.ts';
import { RootState } from '../../app/store.ts';

interface MessagesState {
  messages: IMessage[];
  fetchLoading: boolean;
  addLoading: boolean;
}

const initialState: MessagesState = {
  messages: [],
  fetchLoading: false,
  addLoading: false,
}

export const selectMessages = (state: RootState) => state.messages.messages;
export const selectFetchLoading = (state: RootState) => state.messages.fetchLoading;

export const messagesSlice = createSlice({
  name:'messages',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchMessages.pending, (state) => {
        state.fetchLoading = true;
      })
      .addCase(fetchMessages.fulfilled, (state, {payload: messages}) => {
        state.fetchLoading = false;
        state.messages = messages
      })
      .addCase(fetchMessages.rejected, (state) => {
        state.fetchLoading = false;
      })
  }
});

export const messagesReducer = messagesSlice.reducer;