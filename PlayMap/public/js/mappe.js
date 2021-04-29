// On s'assure que la page est chargée
window.onload = function () {
  // On initialise la carte sur les coordonnées GPS de Paris
  let macarte = L.map('carte').setView([48.852969, 2.349903], 13)

  // Cette méthode est à insérer juste après avoir initialisé la carte
  // L.Routing.control({
  //   // Nous personnalisons le tracé
    // lineOptions: {
    //   styles: [{ color: 'blue', opacity: 1, weight: 10 }]
    // },

  //   // Nous personnalisons la langue et le moyen de transport
  //   router: new L.Routing.osrmv1({
  //     language: 'fr',
  //     profile: 'car', // car, bike, foot
  //   }),

  //   geocoder: L.Control.Geocoder.nominatim()
  // }).addTo(macarte)

  // L.Routing.control({
  //   waypoints: [
  //     L.latLng(48.882829, 2.3664843),
  //     L.latLng(48.8794073, 2.3579688)
  //   ]
  // }).addTo(macarte);


  // On charge les tuiles depuis un serveur au choix, ici OpenStreetMap France
  L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
    attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
    minZoom: 13,
    maxZoom: 20
  }).addTo(macarte)

  function ajaxSearch(keyword,) {
    window.fetch("https://nominatim.openstreetmap.org/search?q=" + keyword + "&format=geocodejson")
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        console.log(response)
      })
  }

  let start = document.getElementById('start');
  let stop = document.getElementById('stop');
  let search = document.getElementById('search');


  search.addEventListener('click', function (e) {
    console.log('recherche itinéraire');
    e.preventDefault();
    window.fetch("https://nominatim.openstreetmap.org/search?q=" + start.value + "&format=geocodejson")
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        console.log(response)

        window.fetch("https://nominatim.openstreetmap.org/search?q=" + stop.value + "&format=geocodejson")
          .then((data) => {
            return data.json();
          })
          .then((jsonData) => {
            console.log(jsonData)


            L.Routing.control({
              waypoints: [
                L.latLng(response.features[0].geometry.coordinates[1], response.features[0].geometry.coordinates[0]),
                L.latLng(jsonData.features[0].geometry.coordinates[1], jsonData.features[0].geometry.coordinates[0])
              ],
              lineOptions: {
                styles: [{ color: '#8D51B4', opacity: 1, weight: 10 }]
              },
            }).addTo(macarte);


          })


      })

  })



}

