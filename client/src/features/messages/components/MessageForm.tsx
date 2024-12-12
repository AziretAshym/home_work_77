import { IMessageMutation } from '../../../types';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import Grid from '@mui/material/Grid2';
import { Button, TextField } from '@mui/material';
import FileInput from '../../../Components/FileInput/FileInput.tsx';
import { toast } from 'react-toastify';

interface Props {
  onSubmit: (message: IMessageMutation) => void;
}

const initialState = {
  author: '',
  message: '',
  image: null,
}

const MessageForm: React.FC<Props> = ({onSubmit}) => {
  const [form, setForm] = useState<IMessageMutation>(initialState);

  const submitFormHandler = (e: FormEvent) => {
    e.preventDefault();

    if (!form.message.trim()) {
      toast.error('Message cannot be empty!');
      return;
    }

    onSubmit({ ...form });
  };

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setForm(prevState => ({ ...prevState, [name]: value }));
  };

  const fileEventChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, files} = e.target;

    if (files) {
      setForm(prevState => ({
        ...prevState,
        [name]: files[0] || null,
      }))
    }
  };


  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <form
        onSubmit={submitFormHandler}
      >
        <Grid container direction="column" spacing={2}>
          <Grid>
            <TextField
              id="author"
              name="author"
              label="Author"
              value={form.author}
              onChange={inputChangeHandler}
              sx={{width:'100%'}}
            />
          </Grid>

          <Grid>
            <TextField
              id="message"
              name="message"
              label="Message"
              value={form.message}
              onChange={inputChangeHandler}
              sx={{width:'100%'}}
            />
          </Grid>



          <Grid sx={{width:'100%'}}>
            <FileInput
              name="image"
              label="Image"
              onGetFile={fileEventChangeHandler}
            />
          </Grid>


          <Grid>
            <Button type="submit" color="primary">Create</Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default MessageForm;