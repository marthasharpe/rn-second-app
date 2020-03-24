import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import { ErrorBoundary } from './ErrorBoundary';
import StartGameScreen from './components/screens/StartGameScreen';

export default function App() {
  return (
    <ErrorBoundary>
      <View style={styles.container}>
        <Header />
        <StartGameScreen />
      </View>
    </ErrorBoundary>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
    width: "100%",
    flex: 1
  }
});
