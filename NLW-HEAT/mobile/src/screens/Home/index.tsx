import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { Header } from '../../components/Header';

export function Home() {
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Header />
      </View>
    </>
  );
}
