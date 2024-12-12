import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { apiUrl } from '../../../globalConstants.ts';

interface Props {
  id: string;
  author: string;
  message: string;
  image?: string | null | undefined;
}

const OneMessage: React.FC<Props> = ({author, message, image}) => {

  let messageImage = image ? `${apiUrl}/${image}` : null;


  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={messageImage}
            alt={author}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {author}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {message}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default OneMessage;