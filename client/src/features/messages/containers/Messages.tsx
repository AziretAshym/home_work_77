import { useAppDispatch, useAppSelector } from '../../../app/hooks.ts';
import { selectFetchLoading, selectMessages } from '../messagesSlice.ts';
import { useEffect } from 'react';
import { fetchMessages } from '../messagesThunks.ts';
import Grid from '@mui/material/Grid2';
import { CircularProgress, Typography } from '@mui/material';
import OneMessage from '../components/OneMessage.tsx';
import { IMessage } from '../../../types';

const Message = () => {

  const dispatch = useAppDispatch();
  const messages = useAppSelector(selectMessages);
  const isFetchLoading = useAppSelector(selectFetchLoading);

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);



  return (
    <>
      <Typography variant={"h2"} textAlign={'center'} marginBottom={"40px"}>Messages</Typography>
      <Grid container spacing={2}>
        {isFetchLoading ? (
          <div style={{display: 'flex', justifyContent: "center"}}>
            <CircularProgress />
          </div>
        ) : messages.length === 0 ? (
          <Typography variant="h6">No messages yet</Typography>
        ) : (
          messages.map((message: IMessage) => (
            <Grid size={4}>
              <OneMessage
                key={message.id}
                id={message.id}
                author={message.author}
                message={message.message}
                image={message.image}
              />
            </Grid>
          ))
        )}
      </Grid>
    </>
  );
};

export default Message;