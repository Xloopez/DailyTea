import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/components/Header';
import Card from './src/components/Card';

export default function App() {
  return (
    <View>
      <Header />
      <Card /> 

    </View>
  );
}

const styles = StyleSheet.create({
  
});
