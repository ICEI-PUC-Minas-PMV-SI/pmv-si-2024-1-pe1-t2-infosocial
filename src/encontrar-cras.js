async function start() {
    console.log('Hello World')
    try {
      if (!navigator.geolocation) {
        console.error('Geolocation não suportada pelo navegador.');
        return
      }
      const position = await getGeolocation()
      console.log('Latitude:', position.coords.latitude);
      console.log('Longitude:', position.coords.longitude);
      const latitude = Number(position.coords.latitude);
      const longitude = Number(position.coords.longitude);
      maptilersdk.config.apiKey = 'sW2z4hanaqIoO0RZkoWM';
      const map = new maptilersdk.Map({
        container: 'map', // container's id or the HTML element in which the SDK will render the map
        style: maptilersdk.MapStyle.STREETS,
        center: [longitude, latitude], // starting position [lng, lat]
        zoom: 14 // starting zoom
      });
    } catch (error) {
         console.log(error)
    
    }
  }
  
  function getGeolocation() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject)
    })
  }
  
  navigator.permissions.query({ name: "geolocation" }).then(start)