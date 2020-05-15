import React from 'react';
import Routes from './Routes';
import {createMuiTheme,ThemeProvider} from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fffff',
    },
    secondary: {
      main: '#888888',
    },
    background: { main: '#fff' },
  },
});

function App() {
  return (
    <div className="App">
       <ThemeProvider theme={theme}>
            <Routes />
          </ThemeProvider>
    </div>
  );
}
export default App;