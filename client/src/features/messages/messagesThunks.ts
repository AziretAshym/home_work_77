import { createAsyncThunk } from '@reduxjs/toolkit';
import { IMessage } from '../../types';
import axiosApi from '../../axiosApi.ts';

export const fetchMessages = createAsyncThunk<IMessage[], void>(
  'messages/fetchMessages',
  async () => {
    const response = await axiosApi<IMessage[]>('/messages');
    console.log(response.data);
    return response.data || [];
  }
);