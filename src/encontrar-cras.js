const cras = [
  {
    "endereco": "Rua Água da Vida, 14 - Independência",
    "longitude": -43.9498,
    "latitude": -19.9173
  },
  {
    "endereco": "Rua Frederico Boy Prussiano, 137 - Petrópolis",
    "longitude": -43.9354,
    "latitude": -19.9082
  },
  {
    "endereco": "Rua Faisão, 1071 Flávio Marques Lisboa",
    "longitude": -43.9243,
    "latitude": -19.8911
  },
  {
    "endereco": "Rua Dona Benta, 145 Vila Fátima",
    "longitude": -43.9312,
    "latitude": -19.9163
  },
  {
    "endereco": "Rua Engenheiro Lucas Júlio de Proença, 73 Serra",
    "longitude": -43.9267,
    "latitude": -19.9315
  },
  {
    "endereco": "Rua São Tomaz de Aquino, 640 Vila Santa Rita de Cássia",
    "longitude": -43.9348,
    "latitude": -19.9278
  },
  {
    "endereco": "Centro de Apoio Comunitário Alto Vera Cruz (Rua General Osório esquina com Fernão Dias)",
    "longitude": -43.9201,
    "latitude": -19.9134
  },
  {
    "endereco": "Rua do Grupo, 12 Granja de Freitas",
    "longitude": -43.9324,
    "latitude": -19.9229
  },
  {
    "endereco": "Rua Fernão Dias, nº 220, Mariano de Abreu",
    "longitude": -43.9265,
    "latitude": -19.9352
  },
  {
    "endereco": "Rua Ludgero Felipe Ferreira com Joaquim Teixeira dos Anjos, 42 - Taquaril",
    "longitude": -43.9309,
    "latitude": -19.9176
  },
  {
    "endereco": "Rua Prof. Geraldo Fontes, 30 - União",
    "longitude": -43.9202,
    "latitude": -19.9165
  },
  {
    "endereco": "Rua Neblina, 120 Conjunto Paulo VI",
    "longitude": -43.9338,
    "latitude": -19.9141
  },
  {
    "endereco": "Rua Cipriano del Favero, 808 - Centro",
    "longitude": -48.2810,
    "latitude": -18.9178
  },
  {
    "endereco": "Rua Rio Grande do Sul, 931 - Bairro Brasil",
    "longitude": -48.2795,
    "latitude": -18.9150
  },
  {
    "endereco": "Av. Dr. Manoel Tomaz T. de Souza, 758 - Bairro Tocantins",
    "longitude": -48.2832,
    "latitude": -18.9144
  },
  {
    "endereco": "Rua Cipriano del Favero, 808 - Bairro Pampulha",
    "longitude": -48.2729,
    "latitude": -18.9127
  },
  {
    "endereco": "Rua Cipriano del Favero, 808 - Bairro Presidente Roosevelt",
    "longitude": -48.2694,
    "latitude": -18.9119
  },
  {
    "endereco": "Rua Cipriano del Favero, 808 - Bairro São Jorge",
    "longitude": -48.2641,
    "latitude": -18.9185
  }
]

async function start() {
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
        container: 'map',
        style: maptilersdk.MapStyle.STREETS,
        center: [longitude, latitude],
        zoom: 14,
        geolocateControl: false
      });

      new maptilersdk.Popup()
        .setLngLat([longitude, latitude])
        .setText('Você está aqui')
        .addTo(map)

      cras.forEach((item) => {
        new maptilersdk.Popup()
          .setLngLat([item.longitude, item.latitude])
          .setText(item.endereco)
          .addTo(map)
      }) 
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
