import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import SliderScreen from './screens/SliderScreen';
import FetchAlbum from './screens/fetchalbum';
import FetchPhoto from './screens/fetchphoto';
import FetchUsers from './screens/fetchusers';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          headerTitleAlign: 'center',
          tabBarIcon: ({ color, size }) => {
            let iconName = 'ellipse';
            if (route.name === 'Home') iconName = 'home';
            if (route.name === 'Slider') iconName = 'images';
            if (route.name === 'Users') iconName = 'people';
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#1f2937',
          tabBarInactiveTintColor: '#64748b',
          tabBarStyle: {
            backgroundColor: '#ffffff',
            borderTopColor: '#e2e8f0',
            height: 58,
          },
          headerStyle: {
            backgroundColor: '#ffffff',
            shadowColor: 'transparent',
          },
        })}
      >
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Slider" component={SliderScreen} options={{ title: 'Slider' }} />
      <Tab.Screen name="Users" component={FetchUsers} options={{ title: 'Users' }} />
    </Tab.Navigator>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerScroll}>
      <View style={styles.drawerHeader}>
        <Text style={styles.drawerTitle}>Fetch Navigator</Text>
        <Text style={styles.drawerSubtitle}>Albums • Photos • Users</Text>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Open Slider"
        onPress={() => props.navigation.navigate('Main', { screen: 'Slider' })}
        icon={({ color, size }) => <Ionicons name="share-social" size={size} color={color} />}
      />
    </DrawerContentScrollView>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Main"
          drawerContent={(props) => <CustomDrawerContent {...props} />}
          screenOptions={{
            headerStyle: { backgroundColor: '#ffffff' },
            headerTintColor: '#111111',
            drawerStyle: {
              backgroundColor: '#fafbff',
            },
            drawerActiveTintColor: '#111111',
            drawerInactiveTintColor: '#555555',
          }}
        >
          <Drawer.Screen
            name="Main"
            component={HomeTabs}
            options={{
              title: 'Home',
              drawerIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
            }}
          />
          <Drawer.Screen
            name="Albums"
            component={FetchAlbum}
            options={{
              drawerIcon: ({ color, size }) => <Ionicons name="albums" size={size} color={color} />,
            }}
          />
          <Drawer.Screen
            name="Photos"
            component={FetchPhoto}
            options={{
              drawerIcon: ({ color, size }) => <Ionicons name="images" size={size} color={color} />,
            }}
          />
          <Drawer.Screen
            name="Users"
            component={FetchUsers}
            options={{
              drawerIcon: ({ color, size }) => <Ionicons name="people" size={size} color={color} />,
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  drawerScroll: {
    paddingTop: 0,
  },
  drawerHeader: {
    backgroundColor: '#eff6ff',
    padding: 16,
    marginBottom: 8,
  },
  drawerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1d4ed8',
  },
  drawerSubtitle: {
    fontSize: 14,
    color: '#475569',
    marginTop: 4,
  },
});
