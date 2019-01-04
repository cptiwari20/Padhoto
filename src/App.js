import React from 'react';
import { View} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import {Header} from './components/commons/index';
// import LoginPage from './components/LoginPage';
import LibraryList from './components/LibraryList';


const App = () => {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Header headerText='Padhoto'/>
          <LibraryList />
        </View>
      </Provider>
    );
};

export default App;
