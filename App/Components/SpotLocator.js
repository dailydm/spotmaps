import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { MapView } from 'expo';
import { Icon } from 'native-base';
import styles from './Styles/SpotLocatorStyles';
import startLocationTracking from '../Services/LocationService';

export default class SpotLocator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRegion: null,
    };
    this.updateLocation = this.updateLocation.bind(this);
  }

  componentDidMount() {
    startLocationTracking({}, this.updateLocation);
  }

  updateLocation(location) {
    this.setState({
      currentRegion: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.004,
        longitudeDelta: 0.004,
      },
    });
  }

  render() {
    const { currentRegion } = this.state;
    return (
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
  }
}
