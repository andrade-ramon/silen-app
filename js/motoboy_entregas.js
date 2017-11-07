var ENTREGAS_URL = "https://silen.herokuapp.com/app/minhas-entregas/";
var ENTREGAS_START_URL = "https://silen.herokuapp.com/app/entrega/";
// var ENTREGAS_URL = "http://localhost:8080/app/minhas-entregas/";
// var ENTREGAS_START_URL = "http://localhost:8080/app/entrega/";

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

function entregasPage(){
  location.reload();
  return false;
}


function getEntregas(userId) {
  $.ajax({
    url: ENTREGAS_URL + userId,
    type: 'GET',
    headers: { 
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    success: function(data) {
      for (var i = 0; i < data.length; i++) {
        $("#tabela-entregas").append("<tr><td class='text-center'>" + data[i].id + "</td><td><a href='motoboy_map.html?latitude=" + data[i].latitude + "&longitude=" + data[i].longitude + "&userId=" + data[i].motoboy.user.id + "' class='btn-link'>"+data[i].cliente.endereco+"</a></td><td>" + data[i].status + "</td><td onclick='iniciarEntrega("+data[i].id+")'>Iniciar</td><td onclick='finalizarEntrega(" + data[i].id+")'>Finalizar</td></tr>");
      }
    }, 
    error: function(data) {
      alert(data.responseJSON.message);
    }
  });
}

function iniciarEntrega(entregaId) {
  $.get(ENTREGAS_START_URL + entregaId + "/start");
  location.reload();

}

function finalizarEntrega(entregaId) {
  $.get(ENTREGAS_START_URL + entregaId + "/finish");
  location.reload();
}

var query = window.location.search.substring(1);
var userId = parse_query_string(query).userId;



getEntregas(userId);