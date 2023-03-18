
// components
import Header from './components/header/Header';
import Home from './components/home/Banner';

import { Box } from '@mui/material';

function App() {
  return (
    <div>
      <Header />
      <Box style={{ marginTop: "54px" }}>
        <Home />
      </Box>
    </div>
  );
}

export default App;
