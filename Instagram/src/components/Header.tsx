import React from 'react';
import { StyleSheet, View, Platform, Image } from 'react-native';
import { Text, useTheme } from 'react-native-paper';

const icon = require('../../assets/logo.jpg');

export default function Header() {
  const { colors } = useTheme(); 

  return (
    <View style={[styles.container, { borderColor: colors.outline }]}>
      <View style={styles.rowContainer}>
        <Image source={icon} style={styles.image} />
        <Text style={[styles.title, { color: colors.text}]}>Instagram</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 45 : 0,
    padding: 10,
    borderBottomWidth: 1,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    marginLeft: 10,
  },
});
