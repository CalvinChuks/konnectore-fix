import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import App from './App'
import { ConnectedRouter } from 'connected-react-router'

const theme = createMuiTheme({
  palette: {
      primary: {
          main: '#00a294',
      },
      text: {
          secondary: '#2e2e2e',
      },
      white: '#ffffff',
      textSecondary: '#2e2e2e',
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'Nunito Sans',
      'Acumin Pro',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontSize: 12,
  },
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.1em'
    },
    '@font-family': ['Nunito Sans'],
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      outline: '1px solid slategrey'
    }
  }
});

console.log(theme);

const Root = ({ store, history }) => (
  <Provider store={store}>
    
    <MuiThemeProvider theme={theme}>
    <Router>
      <Route path="/:filter?" component={App} />
    </Router>
    </MuiThemeProvider>
   
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root

// <ConnectedRouter history={history}>