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
