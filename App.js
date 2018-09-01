import React from 'react';
import { View } from 'react-native';
import SpotLocator from './App/Components/SpotLocator';
import styles from './App/Themes/ApplicationStyles';

const App = () => (
  <View style={styles.container}>
    <SpotLocator />
  </View>
);

export default App;
