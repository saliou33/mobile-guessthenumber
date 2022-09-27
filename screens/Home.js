import React from 'react';
import { StyleSheet, TouchableHighlight, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={() => navigation.navigate('Game')} style={styles.button}>
        <Text style={styles.buttonText}>Start game!</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    width: 250,
    height: 250,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 150,
    backgroundColor: 'purple',
  },
  buttonText: {
    color: 'white',
    fontSize: 36,
  },
});
