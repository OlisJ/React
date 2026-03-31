import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';
import {createDrawerNavigator , DrawerContentScrollView , DrawerItem, DrawerItemList} from '@react-navigation/drawer'
import ProductScreen from './screens/ProductScreen';
import Slider from './screens/Example';
import Home from './screens/HomeIcon'

export default function App() {
  return (
    <View>
      <Home/>
    </View>
  );
}
