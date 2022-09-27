import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AnimatedButton from '../components/AnimatedButton';

const Game = () => {
  const navigation = useNavigation();
  const baseNumber = Math.floor(Math.random() * 100);
  const score = Math.floor(Math.random() * 100);
  const [choice, setChoice] = useState('');

  useEffect(() => {
    if (choice) {
      const winner =
        (choice === 'higher' && score > baseNumber) || (choice === 'lower' && score < baseNumber);

      navigation.navigate('Result', { winner });
    }
  }, [baseNumber, score, choice]);

  return (
    <View style={styles.container}>
      <Text style={styles.baseNumber}>Starting Point: {baseNumber}</Text>
      <AnimatedButton onPress={() => setChoice('higher')} action="higher" />
      <AnimatedButton onPress={() => setChoice('lower')} action="lower" />
    </View>
  );
};

export default Game;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  baseNumber: {
    fontSize: 20,
    marginBottom: 30,
  },
});
