import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAIn5qp3KHdGr19y3916hAnuAgsA_3ltO0',
      authDomain: 'manager-9eacb.firebaseapp.com',
      databaseURL: 'https://manager-9eacb.firebaseio.com',
      storageBucket: 'manager-9eacb.appspot.com',
      messagingSenderId: '1058692731148'
    };

    firebase.initializeApp(config);
  }

  render() {
    // # Params: reducers, initialState, applyMiddleware(*|any_middleware|*)
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
