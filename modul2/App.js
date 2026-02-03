import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Contact from './screens/Contact';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import FlatListsExample from './screens/FlatListsExample';
import SecondExample from './screens/SecondExample';
import React from 'react';
import ButtonScreen from './screens/ButtonScreen';

const Stack =  createStackNavigator();

let mesazhi = "Hello World!"

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="ButtonScreen" component={ButtonScreen}></Stack.Screen>
    
      </Stack.Navigator>
    </NavigationContainer>





  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextStyle: {
    color: 'blue',
    fontSize: 40,
  }
});
