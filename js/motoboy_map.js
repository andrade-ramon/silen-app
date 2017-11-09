function parse_query_string(query) {
  var vars = query.split("&");
  var query_string = {};

  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");

    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
      query_string[pair[0]] = arr;
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  }
  return query_string;
}

function backToEntregas(){
  location.reload();
  return false;
}

function tempoPage() {
  var query = window.location.search.substring(1);
  var userId = parse_query_string(query).userId;
  window.location = "motoboy_tempo.html?userId=" + userId;
}

function initializeMap() {
  var query = window.location.search.substring(1);
  var latitude = parseFloat(parse_query_string(query).latitude);
  var longitude = parseFloat(parse_query_string(query).longitude);
  var startLatitude = -23.550475;
  var startLongitude = -46.5969021;

  var companyLocation = new google.maps.LatLng(startLatitude, startLongitude);
  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer;
  
  var myOptions = {
    zoom: 8,
    center: companyLocation,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
  directionsDisplay.setMap(map);

  directionsService.route({
    origin: {lat: startLatitude, lng: startLongitude},
    destination: {lat: latitude, lng: longitude},
    travelMode: 'DRIVING'
  }, function(response, status) {
    if (status === 'OK') {
      directionsDisplay.setDirections(response);
    } else {
      window.alert('Não foi possível carregar a rota até esse endereço' + status);
    }
  });
}

google.maps.event.addDomListener(window,'load', initializeMap)

function backToEntregas() {
  var query = window.location.search.substring(1);
  var userId = parse_query_string(query).userId;
  window.location = "motoboy_entregas.html?userId=" + userId;
  return false;
}


