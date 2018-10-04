import React from 'react';
import { View } from 'react-native';
import SpotLocatorContainer from './App/Containers/SpotLocatorContainer';
import styles from './App/Themes/ApplicationStyles';

const App = () => (
  <View style={styles.container}>
    <SpotLocatorContainer />
  </View>
);

export default App;
