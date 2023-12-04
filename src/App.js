<<<<<<< HEAD
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';

const App = () => {
  return (
    <NavigationContainer>
      <Router/>
  </NavigationContainer>
  )
}
export default App
const styles = StyleSheet.create({})
=======
import * as React from 'react'
import {Home,Profile,Training} from './pages';
export default function App() {
  return <Home />;
} 
>>>>>>> 35aca34d54b2e2b4dd11b56d91d5468e1ff30d6e
