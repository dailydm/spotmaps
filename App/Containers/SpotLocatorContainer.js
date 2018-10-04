import React, { Component } from 'react';

import SpotLocator from '../Components/SpotLocator';
import LocationService from '../Services/LocationService';

export default class SpotLocatorContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRegion: null,
    };
    this.updateLocation = this.updateLocation.bind(this);
  }

  componentDidMount() {
    LocationService.startLocationTracking({}, this.updateLocation);
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
      <SpotLocator
        currentRegion={currentRegion}
      />
    );
  }
}
