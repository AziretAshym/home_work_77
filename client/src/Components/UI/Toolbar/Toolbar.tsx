import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Toolbar } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, marginBottom: "90px" }}>
        <AppBar sx={{display: 'flex', justifyContent: 'center'}}>
          <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
            <NavLink to={"/"} style={{
              textDecoration: 'none',
              fontSize: '35px',
              color: 'inherit',
            }} >
              Messages
            </NavLink>

            <NavLink to={"/new-message"} style={{
              textDecoration: 'none',
              fontSize: '20px',
              color: 'inherit',
            }} >
              Add new message
            </NavLink>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;