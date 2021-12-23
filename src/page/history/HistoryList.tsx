import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Sidemenu from '../../components/side/Sidemenu';
import Toolbar from '@mui/material/Toolbar';
import Data from './Data';

const drawerWidth = 240;

const HistoryList:React.FC = ():JSX.Element => {
  return (
    <>
   <Box sx={{ display: 'flex' }}>
  <CssBaseline />
      <Sidemenu />
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          <Toolbar />
          <Data />
        </Box>
      </Box>

    </>
  );
};
export default HistoryList;