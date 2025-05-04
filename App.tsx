import React from 'react';
import { View, Text, StyleSheet, Button, Alert, SafeAreaView } from 'react-native';

const App = () => {
  const handlePress = () => {
    Alert.alert('Button Pressed', 'You pressed the button!');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Welcome to My Dummy Page</Text>
      <Text style={styles.description}>
        This is just a simple screen built with React Native. You can customize it as needed.
      </Text>
      <Button title="Press Me" onPress={handlePress} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default App;
