import { StyleSheet } from 'react-native';
import Colors from '../../Themes/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  map: {
    width: '100%',
    height: '100%',
  },

  newButton: {
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:50,
    position: 'absolute',
    bottom: 25,
    right: 15,
    height:50,
    backgroundColor: Colors.blue,
    borderRadius:100,
  },

  newButtonIcon: {
    color: "white",
  }
})
