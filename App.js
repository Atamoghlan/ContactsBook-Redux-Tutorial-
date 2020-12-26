import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList
} from 'react-native';
import Book from './src/BookApp';
import store from './src/store';
import { Provider } from 'react-redux';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Book/>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})