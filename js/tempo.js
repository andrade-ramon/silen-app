jQuery.get('https://query.yahooapis.com/v1/public/yql',{
        q:'select * from weather.forecast where woeid in (455827)',
        format:'json'
    },function (res) {
        if(res){
			console.log(res);
      //jQuery('#temp-day').html((res.query.results.channel.item.condition.temp - 32) * (5/9));
      jQuery('#temp-day').html((res.query.results.channel.item.condition.temp - 50) + '&#176');
      //jQuery('#tittle-day').html(res.query.results.channel.item.title);
      jQuery('#now-time').html(res.query.results.channel.lastBuildDate);
 			jQuery('#tittle-day').html(res.query.results.channel.location.city + ' - ' + res.query.results.channel.location.region);
        }
    },'json');

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

function entregasPage() {
  var query = window.location.search.substring(1);
  var userId = parse_query_string(query).userId;
  window.location = "motoboy_entregas.html?userId=" + userId;
}