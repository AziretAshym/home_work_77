import { createAsyncThunk } from '@reduxjs/toolkit';
import { IMessage, IMessageMutation } from '../../types';
import axiosApi from '../../axiosApi.ts';

export const fetchMessages = createAsyncThunk<IMessage[], void>(
  'messages/fetchMessages',
  async () => {
    const response = await axiosApi<IMessage[]>('/messages');
    console.log(response.data);
    return response.data || [];
  }
);

export const createMessage = createAsyncThunk<void, IMessageMutation>(
  'messages/createMessage',
  async (messageMutation) => {
    const formData = new FormData();

    const keys = Object.keys(messageMutation) as (keyof IMessageMutation)[];

    keys.forEach(key => {
      const value = messageMutation[key];

      if (value !== null) {
        formData.append(key, value);
      }
    })

    await axiosApi.post('/messages', formData);
  }
);