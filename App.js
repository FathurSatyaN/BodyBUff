import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { PaperProvider } from 'react-native-paper';

import { Card } from 'react-native-elements';

import Category from './components/Category'; // Impor komponen Category
import Exercise from '././components/Exercise'; // Impor komponen Exercise

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: '#ff6347',
    padding: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'KoulenRegular', // Ganti dengan font yang diinginkan
  },
  searchContainer: {
    padding: 20,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 30,
    paddingLeft: 20,
    backgroundColor: '#f2f2f2',
    fontFamily: 'Arial', // Ganti dengan font yang diinginkan
  },
  slider: {
    flexDirection: 'row',
    marginVertical: 20,
    padding: 10,
  },
  sliderImage: {
    width: 250,
    height: 150,
    marginHorizontal: 10,
    borderRadius: 20,
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: 10,
  },
  exerciseTitle: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'Koulen-Reguler',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
});

const App = () => {
  const [searchText, setSearchText] = useState('');
  const categories = [
    { name: 'Timer', icon: 'stopwatch-20' },
    { name: 'Membership', icon: 'dollar-sign' },
    { name: 'Nutrition', icon: 'utensils' },
    { name: 'FAQ', icon: 'bell' },
  ];

  const exercises = [
    {
      name: 'PUSH UP',
      description: 'Raiden Shogun is the current Electro Archon of Inazuma...',
      imageUri: 'https://i.pinimg.com/564x/af/68/10/af68104406ad16590258cc004e9f81da.jpg',
    },
    {
      name: 'SIT UP',
      description: 'Eula is known for her strict and principled nature...',
      imageUri: 'https://i.pinimg.com/564x/7b/eb/d4/7bebd4ae69599d403c73be6de4e71bb2.jpg',
    },
    {
      name: 'PLANK',
      description: 'Hutao is a character in the popular action role-playing game...',
      imageUri: 'https://i.pinimg.com/564x/b6/b6/ab/b6b6abc81502285b8ebf6498c87832f9.jpg',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>BodyBuff</Text>
        <Icon name="user" size={24} color="white" />
      </View>

      <View style={styles.searchContainer}>
        <View style={{ flexDirection: 'column' }}>
          <TextInput
            style={styles.searchInput}
            placeholder="Cari program latihan..."
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
          />
        </View>
      </View>

      <ScrollView horizontal style={styles.slider}>
        <Image
          style={styles.sliderImage}
          source={{ uri: 'https://i.pinimg.com/564x/a8/32/c3/a832c3745eeaee8c4e948eedefe15e6b.jpg' }}
        />
        <Image
          style={styles.sliderImage}
          source={{ uri: 'https://i.pinimg.com/564x/15/c9/4d/15c94dfd0f8ef15779948ebf567eda76.jpg' }}
        />
        <Image
          style={styles.sliderImage}
          source={{ uri: 'https://i.pinimg.com/564x/2f/38/15/2f3815367655cb86e92cd839a133360c.jpg' }}
        />
        <Image
          style={styles.sliderImage}
          source={{ uri: 'https://i.pinimg.com/564x/f1/3e/23/f13e23aac2fc3e5688241c0cc4aa43e6.jpg' }}
        />
        {/* Tambahkan gambar slider lainnya di sini */}
      </ScrollView>

      <View style={styles.categoryContainer}>
        {categories.map((category, index) => (
          <Category key={index} name={category.name} icon={category.icon} />
        ))}
      </View>

      <Text style={styles.exerciseTitle}>TOP 3 EXERCISES TO DO AT HOME</Text>

      {exercises.map((exercise, index) => (
        <Exercise
          key={index}
          name={exercise.name}
          description={exercise.description}
          imageUri={exercise.imageUri}
        />
      ))}
      
    </ScrollView>
  );
};

export default App;
