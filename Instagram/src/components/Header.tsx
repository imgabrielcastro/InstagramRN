import React from 'react';
import { StyleSheet, View, Platform, Image } from 'react-native';
import { Text, useTheme, Surface } from 'react-native-paper';

const icon = require('../../assets/icon.png');

const Header: React.FC = () => {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.rowContainer}>
        <Image source={icon} style={styles.image} />
        <Text variant="titleLarge" style={{ color: colors.onSurface, marginLeft: 10 }}>
          Instagram
        </Text>
      </View>
    </View>
  );
};

export default Header;

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
