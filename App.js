import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MapView } from 'expo';
import { getCurrentLocation } from './App/Services/LocationService';

export default class App extends React.Component {

  constructor(props){
    super(props);
    let _mapView;
    this.state = {
      location: null,
    }
  }

  componentDidMount(){
    getCurrentLocation().then(location => {
      this._mapView.animateToCoordinate({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      })
      this.setState({ location });
    });
  }

  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        ref={ mapView => this._mapView = mapView}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        { this.state.location &&
          <MapView.Marker coordinate={{
             latitude: this.state.location.coords.latitude,
             longitude: this.state.location.coords.longitude,
            }}
          />
        }
      </MapView>
    );
  }
}
