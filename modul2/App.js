import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Contact from './screens/Contact';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import FlatListsExample from './screens/FlatListsExample';
import SecondExample from './screens/SecondExample';

const Stack =  createStackNavigator();

let mesazhi = "Hello World!"

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}></Stack.Screen>
      <Stack.Screen name="Contact" component={Contact}></Stack.Screen>
      <Stack.Screen name="SecondExample" component={SecondExample}></Stack.Screen>
      <Stack.Screen name="FlatListsExample" component={FlatListsExample}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>




    // <View style={styles.container}>
    //   <Text style={styles.TextStyle}>{mesazhi}</Text>
    // </View>
    // <Home/>

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
