import { Location, Permissions } from 'expo';

export const startLocationTracking = async (options, callback) => {
  let { status } = await Permissions.askAsync(Permissions.LOCATION);
  if (status !== 'granted') {
    // TODO return error
  }
  let location = await Location.watchPositionAsync(options, callback);
  return location;
}
