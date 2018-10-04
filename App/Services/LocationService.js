import { Location, Permissions } from 'expo';

const startLocationTracking = async (options, callback) => {
  const { status } = await Permissions.askAsync(Permissions.LOCATION);
  if (status !== 'granted') {
    // TODO return error
  }
  const location = await Location.watchPositionAsync(options, callback);
  return location;
};

export default {
  startLocationTracking,
};
