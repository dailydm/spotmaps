import React from 'react';
import { MapView } from 'expo';
import PropTypes from 'prop-types';
import { getCurrentLocation } from '../Services/LocationService';

export default class SpotLocator extends React.Component {

  constructor(props){
    super(props);
    let _mapView;
    this.state = {
      initialRegion: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      currentRegion: null
    };
  }

  componentDidMount(){
    getCurrentLocation().then(location => {
      this.setState({
        currentRegion: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.004,
          longitudeDelta: 0.004,
        }
      });
      this._mapView.animateToRegion(this.state.currentRegion, 3000);
    })
  }

  render(){
    const { initialRegion } = this.state
    return (
      <MapView
        style={{ flex: 1 }}
        ref={ mapView => this._mapView = mapView}
        initialRegion={ initialRegion }
      />
    );
  }
}
