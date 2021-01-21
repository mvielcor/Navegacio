/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import {
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {Button} from 'react-native-elements'

export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <View style={styles.contenidor}>
          <StatusBar barStyle="dark-content" />
          <View >
              <Text> Pantalla inicial </Text>
              
          </View>
        </View>
      </NavigationContainer>
    );
  }
};

const styles = StyleSheet.create({
  contenidor: {
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    justifyContent: 'center',
    padding:5,
    margin:5,
    alignContent: 'space-around',
    alignItems:'center',
  },
  
});

export default App;
