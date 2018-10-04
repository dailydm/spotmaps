import React from 'react';
import PropTypes from 'prop-types';

import { TouchableOpacity, View } from 'react-native';
import { MapView } from 'expo';
import { Icon } from 'native-base';
import styles from './Styles/SpotLocatorStyles';

const SpotLocator = ({ currentRegion }) => (
  <View style={styles.container}>
    <MapView
      provider="google"
      showsUserLocation
      style={styles.map}
      region={currentRegion}
    />
    <TouchableOpacity style={styles.newButton}>
      <Icon name="add" size={20} style={styles.newButtonIcon} />
    </TouchableOpacity>
  </View>
);

SpotLocator.propTypes = {
  currentRegion: PropTypes.shape(),
};

SpotLocator.defaultProps = {
  currentRegion: null,
};


export default SpotLocator;
