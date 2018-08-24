import { Location, Permissions } from 'expo';

export const getCurrentLocation = async () => {
  let { status } = await Permissions.askAsync(Permissions.LOCATION);
  if (status !== 'granted') {
    // TODO return error
  }
  let location = await Location.getCurrentPositionAsync({});
  return location;
}
