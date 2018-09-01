import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import { MapView } from 'expo';
import { Button, Icon } from 'native-base';

import { startLocationTracking } from '../Services/LocationService';


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
    this.updateLocation = this.updateLocation.bind(this);
  }

  componentDidMount(){
    startLocationTracking({}, this.updateLocation)
  }

  updateLocation(location){
    this.setState({
      currentRegion: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.004,
        longitudeDelta: 0.004,
      }
    });
    this._mapView.animateToRegion(this.state.currentRegion, 3000);
  }

  render(){
    const { initialRegion } = this.state
    return (
      <View style={{flex: 1}}>
        <MapView
          provider="google"
          showsUserLocation={true}
          style={styles.map}
          ref={ mapView => this._mapView = mapView}
          initialRegion={ initialRegion }
        />
        <TouchableOpacity
           style={{
               borderWidth:1,
               borderColor:'rgba(0,0,0,0.2)',
               alignItems:'center',
               justifyContent:'center',
               width:50,
               position: 'absolute',
               bottom: 25,
               right: 15,
               height:50,
               backgroundColor:'#3f4afe',
               borderRadius:100,
             }}
         >
         <Icon name="add"  size={20} style={{color: "white"}} />
       </TouchableOpacity>
     </View>
    );
  }
}

styles = StyleSheet.create({
  map: {
    flex: 1,
  }
})
