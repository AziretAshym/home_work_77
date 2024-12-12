import { useAppDispatch, useAppSelector } from '../../../app/hooks.ts';
import { useNavigate } from 'react-router-dom';
import { selectCreateLoading } from '../messagesSlice.ts';
import { IMessageMutation } from '../../../types';
import { createMessage } from '../messagesThunks.ts';
import { toast } from 'react-toastify';
import { CircularProgress } from '@mui/material';
import MessageForm from '../components/MessageForm.tsx';

const NewMessage = () => {
  const dispatch = useAppDispatch();
  const isCreateLoading = useAppSelector(selectCreateLoading);
  const navigate = useNavigate();

  const onSubmitForm = async (message: IMessageMutation) => {
    await dispatch(createMessage(message));
    toast.success('Message was successfully saved!');
    navigate('/messages');
  }

  return (
    <>
      {isCreateLoading ? (
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <CircularProgress />
        </div>
        ) :
        <MessageForm onSubmit={onSubmitForm} />
      }
    </>
  );
};

export default NewMessage;