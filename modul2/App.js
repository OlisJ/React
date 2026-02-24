import { NavigationContainer } from '@react-navigation/native';
import{createAppContainer} from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import TestScreen from './screens/TestScreen';
import MenuScreen from './screens/MenuScreen';
import StudentScreen from './screens/StudentScreen';
import ProfileScreen from './screens/ProfileScreen';
import BoxScreen from './screens/BoxScreen';

const Stack =  createStackNavigator(
  {Menu: MenuScreen,
    Test:TestScreen,
    Excercise:ExcerciseScreen,
    Student:StudentScreen,
    Profile:ProfileScreen,
    Box:BoxScreen
  }
);

let mesazhi = "Hello World!"

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='ProfileScreen'> 
      <Stack.Screen name="MenuScreen" component={MenuScreen}></Stack.Screen>
      <Stack.Screen name="Test" component={TestScreen}></Stack.Screen>
      <Stack.Screen name="Students" component={StudentScreen}></Stack.Screen>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen}></Stack.Screen>
    
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
