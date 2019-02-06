import React from 'react';
import { Platform, StatusBar,StyleSheet, Text, View } from 'react-native';

import RootStack from './components/navigate.js'

import FBFont from './components/font'


export default class App extends React.Component {
  

  state = {
    prerequisitesLoaded: false,
  };

  async componentDidMount() {
    await Promise.all([
      FBFont.loadFonts()
    ]);
    this.setState({ prerequisitesLoaded: true });
  }

  render() {
        
    if (this.state.prerequisitesLoaded) {
      return (
        <RootStack></RootStack>
      );
    } else {
      return (
        <View></View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
