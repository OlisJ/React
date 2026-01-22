import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Contact from './screens/Contact';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';

const Stack =  createStackNavigator();

let mesazhi = "Hello World!"

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="home" component={Home}></Stack.Screen>
      <Stack.Screen name="contact" component={Contact}></Stack.Screen>
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
