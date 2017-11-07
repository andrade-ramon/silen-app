var LOGIN_URL = "https://silen.herokuapp.com/app/login";
// var LOGIN_URL = "http://localhost:8080/app/login";

function acessar(){
  var login = $("#login").val();
  var password = $("#password").val();
  var data = {
    login : login,
    password: password
  }

  $.ajax({
    url: LOGIN_URL,
    type: 'POST',
    headers: { 
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    data : JSON.stringify(data),
    success: function(data) {
      window.location = "motoboy_entregas.html?userId=" + data.userId + "&username=" + data.login;
    }, 
    error: function(data) {
      console.log(data);
      alert(data.responseJSON.message);
    }
  });

  // $.ajax({
  //   url: 'http://localhost:8080/app/login',
  //   type: 'POST',
  //   contentType: 'application/x-www-form-urlencoded',
  //   data: {
  //     login : "ramon", 
  //     password: "teste"
  //   },
  //   success: function(data) {
  //     alert(data.login);
  //   }
  // });

}