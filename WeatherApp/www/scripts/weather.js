var WeatherApp = {};

(function ($, ns, navigator) {
	ns.getWeather = function () {
		var zipcode = $('#zip-code-input').val();

		// get weather using zip code
		var queryString =
			'https://query.yahooapis.com/v1/public/yql?q='
			+ 'select+*+from+weather.forecast+where+location='
			+ zipcode + '&format=json';

		$.getJSON(queryString, function (results) {
			if (results.query.count > 0 && results.query.results.channel.wind) {
				$('#error-msg').hide();
				$('#weather-data').show();

				var weather = results.query.results.channel;
				$('#title').text(weather.title);

				var wind = weather.wind;
				$('#temperature').text(wind.chill);
				$('#wind').text(wind.speed);

				var atmosphere = weather.atmosphere;
				$('#humidity').text(atmosphere.humidity);
				$('#visibility').text(atmosphere.visibility);

				var astronomy = weather.astronomy;
				$('#sunrise').text(astronomy.sunrise);
				$('#sunset').text(astronomy.sunset);

				$('#summary img').attr('src', $(weather.item.description)[0].src);

			} else {
				$('#weather-data').hide();
				$('#error-msg').show();
				$('#error-msg').text("Error retrieving data. " + results.query.results.channel.item.title);
			}
		}).fail(function (jqXHR) {
			$('#error-msg').show();
			$('#error-msg').text("Error retrieving data. " + jqXHR.statusText);
		});

		return false;
	}

})($, WeatherApp, navigator);