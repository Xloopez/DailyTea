import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import Header from './src/components/Header';
import Card from './src/components/Card';


const loadFonts = () => {
  //let barlowL = require('./fonts/Barlow-Light.ttf');
  //let barlowR = require('./fonts/Barlow-Regular.ttf');

  return Font.loadAsync({
    'Barlow-Light': require('./fonts/Barlow-Light.ttf'),
    'Barlow-Regular': require('./fonts/Barlow-Regular.ttf')
  })
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading 
      startAsync={loadFonts}
      onFinish={() => setFontLoaded(true)}
      onError={console.log('error ocurred')}
      />
    );
  }

  return (
    <View>
      <Header />
      <Card /> 
    </View>
  );
}

const styles = StyleSheet.create({
  
});
