import React from 'react';
import { View, Text } from 'react-native';
import LogoSVG from '../../assets/logo.svg';
import { styles } from './styles';

export function Header() {
  return (
    <View style={styles.container}>
      <LogoSVG />
      <Text style={styles.logoutText}>Sair</Text>
    </View>
  );
}
