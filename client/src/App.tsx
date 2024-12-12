import { Container, CssBaseline } from '@mui/material';
import Messages from './features/messages/containers/Messages.tsx';
import { Route, Routes } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Toolbar from './Components/UI/Toolbar/Toolbar.tsx';
import NewMessage from './features/messages/containers/NewMessage.tsx';

const App = () => {
  return (
    <>
      <CssBaseline />
      <header>
        <Toolbar />
      </header>
      <main>
        <Container>
          <Routes>
            <Route path="/" element={<Messages />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/new-message" element={<NewMessage />} />
            <Route path="*" element={<Typography variant={"h3"} textAlign={"center"}>Not Found</Typography>}/>
          </Routes>
        </Container>
      </main>
    </>
  );
};

export default App;