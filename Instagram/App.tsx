import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import * as React from 'react';
import Header from './src/components/Header'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6200ee',
    background: '#ffffff',
    text: '#000',
  },
};


export default function App() {
  return (
    <PaperProvider theme={theme}>
    <Header />
    <StatusBar style="auto" />
  </PaperProvider>
  );
}
