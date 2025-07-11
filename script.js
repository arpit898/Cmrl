
    mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNreXN5anp3ZDA2aGgyb3A3OHZ6OXM3NHoifQ.VRQGnT8pNU-MzzJrmWxPgw';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/light-v11',
        center: [80.2276571, 12.8951273],
        zoom: 12,
        pitch: 60,
        bearing: 20,
        antialias: true
    });
    map.on('load', () => {
        fetch('progress-data.json')
        .then(res => res.json())
        .then(data => {
            data.forEach(pier => {
                const el = document.createElement('div');
                el.className = 'marker ' + pier.Type;
                new mapboxgl.Marker(el)
                    .setLngLat([pier.Longitude, pier.Latitude])
                    .setPopup(new mapboxgl.Popup().setHTML(`<b>${pier.Pier_ID}</b><br>Status: ${pier.Pier_Cap_Erection}`))
                    .addTo(map);
            });
        });
    });
    