import React from 'react';
import { View } from 'react-native';
import { Container } from 'native-base';
import SpotLocator from './App/Components/SpotLocator';
import styles from './App/Themes/ApplicationStyles';

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <SpotLocator />
      </View>
    );
  }
}
