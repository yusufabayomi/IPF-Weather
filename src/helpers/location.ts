const liveLocation = async (): Promise<GeolocationCoordinates> => {
  return new Promise(async (resolve, reject) => {
    if (navigator.geolocation) {
      const permissionStatus = await navigator.permissions.query({ name: 'geolocation' });
      if (permissionStatus.state === 'granted' || permissionStatus.state === 'prompt') {
        navigator.geolocation.getCurrentPosition(
          (position) => resolve(position.coords),
          (error) => reject(error.message)
        );
      } else if (permissionStatus.state === 'denied') {
        reject('You denied permission to get your location');
      }
    } else {
      reject('Sorry, your browser does not support the geolocation feature');
    }
  });
};

export default liveLocation;
