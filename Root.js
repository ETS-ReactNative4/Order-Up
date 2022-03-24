import * as React from 'react';
import { View } from 'react-native';
import { Provider as PaperProvider, DefaultTheme, DarkTheme } from 'react-native-paper';
import { useStoreState } from 'easy-peasy';

const defaulttheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};

const darktheme = {
  ...DarkTheme,
  roundness: 2,
  colors: {
    ...DarkTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
}


export default function App() {
    const isDark = useStoreState(state => state.isDark);
    return (
      <PaperProvider theme={isDark ? darktheme : defaulttheme}>
        <View />
      </PaperProvider>
    );
}

