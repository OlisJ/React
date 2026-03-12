import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicon} from '@expo/vector-icons';
import Photos from './screens/fetchphoto';
import FlatListsExample from './screens/FlatListsExample';
import Home from './screens/Home';

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator screenoptions={({route})=>({
        tabBarIcon:({focused,color,size})=>{
          let iconName;
          if (route.name === 'FlatListsExample'){
              iconName = focused ? "flag" : "flag-outline";
          }
          else {
            iconName = focused ? "newspaper" : "newspaper-outline";
          }
          return <Ionicon name={iconName} size={size} color={color} />;
        }
      })}>
        <Tabs.Screen name="ListScreen" component={FlatListsExample} />
        <Tabs.Screen name="Home" component={Home} />
      </Tabs.Navigator>
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
