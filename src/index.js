import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

import './config/ReactotronConfig';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

console.tron.log('Hello World');

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Ola Raul Tudo Bem?</Text>
    </View>
  );
}
