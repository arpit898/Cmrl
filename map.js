
mapboxgl.accessToken = 'pk.eyJ1IjoiZGVtb3N1c2VyIiwiYSI6ImNsaW1kMHR5ZDAwMGoyd3FzY3RxaDV6ZWYifQ.FsFF-rnW7kqdyAxtNL-tAA';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v12',
  center: [80.2276571, 12.8951273],
  zoom: 13.3
});

fetch('progress-data.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(pier => {
      const el = document.createElement('div');
      el.style.background = '#3498db';
      el.style.width = '12px';
      el.style.height = '12px';
      el.style.borderRadius = '50%';

      const popupContent = `<div class='marker-label'>
        <strong>${pier.Pier_ID}</strong><br>
        Type: ${pier.Type}<br>
        Pile Cap: ${pier.Pile_Cap}<br>
        Pier: ${pier.Pier}<br>
        Cap Casting: ${pier.Pier_Cap_Casting}<br>
        Cap Erection: ${pier.Pier_Cap_Erection}
      </div>`;
      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(popupContent);

      new mapboxgl.Marker(el)
        .setLngLat([pier.Longitude, pier.Latitude])
        .setPopup(popup)
        .addTo(map);
    });
  });
