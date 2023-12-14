import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {  Home2, Avalanche, Profile2User } from 'iconsax-react-native';

import React from 'react'
<<<<<<< HEAD
import { Home,Profile,Training,Search,AddTraining,DetailTraining,EditTraining,Login,Register } from '../pages';
=======
<<<<<<< HEAD
import { Home,Profile,Training,Search,AddTraining,DetailTraining,EditTraining } from '../pages';
=======
<<<<<<< HEAD
import { Home,Profile,Training,Search,AddTraining } from '../pages';
=======
import { Home,Profile,Training } from '../pages';
>>>>>>> 1d2eedd24a3e82f37869568ca679aaf398ffa437
>>>>>>> 2f6d81e56000a3020f493b3c6ff708fb7be4fd01
>>>>>>> 85b3339ce3adc4be81b64709bcf050cb4b1354ab
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const MainApp = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, color}) => (
            <Home2
              color={color}
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
          headerShown: false,
        }} />
        <Tab.Screen name="Training" component={Training} options={{
          tabBarLabel: 'Training',
          tabBarIcon: ({focused, color}) => (
            <Avalanche
              color={color}
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
          headerShown: false,
        }}/>
        <Tab.Screen name="Profile" component={Profile} options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused, color}) => (
            <Profile2User
              color={color}
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
          headerShown: false,
        }}/>
      </Tab.Navigator>
  )
}
const Router = () => {
  return (
<<<<<<< HEAD
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
=======
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
<<<<<<< HEAD
>>>>>>> 85b3339ce3adc4be81b64709bcf050cb4b1354ab
      <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
      <Stack.Screen name="AddTraining" component={AddTraining} options={{ headerShown: false }} />
      <Stack.Screen name="DetailTraining" component={DetailTraining} options={{ headerShown: false }} />
      <Stack.Screen name="EditTraining" component={EditTraining} options={{ headerShown: false }} />
<<<<<<< HEAD
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
=======
=======
<<<<<<< HEAD
      <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
      <Stack.Screen name="AddTraining" component={AddTraining} options={{ headerShown: false }} />
=======
>>>>>>> 1d2eedd24a3e82f37869568ca679aaf398ffa437
>>>>>>> 2f6d81e56000a3020f493b3c6ff708fb7be4fd01
>>>>>>> 85b3339ce3adc4be81b64709bcf050cb4b1354ab
    </Stack.Navigator>
  )
}
export default Router
const styles = StyleSheet.create({})
