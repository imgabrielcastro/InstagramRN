import React from 'react';
import { StyleSheet, View, Platform, Image } from 'react-native';
import { Text, useTheme, Surface } from 'react-native-paper';

const icon = require('../../assets/logo.jpg');

export default function Header() {
  const { colors } = useTheme();

  return (
    <Surface style={[styles.container, {backgroundColor: colors.background}]}>
      <View style={styles.rowContainer}>
        <Image source={icon} style={styles.image} />
        <Text variant="titleLarge" style={{ color: colors.onSurface, marginLeft: 10 }}>
          Instagram
        </Text>
      </View>
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    paddingTop: Platform.OS === 'ios' ? 45 : 0,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    elevation: 4, 
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
});
