$(document).ready(function () {
    var input = $('#search-btn').click(function () {
        var cityname = $('#search-area').val();
        var key = '182a7a3fa380dc5efe7e62fb6fbbf390';
        var generalReport = {};

        // Check if nothing is selected
        if (!cityname) {
            return $('#error-msg').text('Error Message');
        }

        $.ajax({
            url: 'https://api.openweathermap.org/data/2.5/weather',
            datatype: 'json',
            type: 'GET',
            data: { q: cityname, appid: key, units: 'metric' },
            success: function (val) {
                console.log('*******general', val);
                $('#weather-report').text(val.weather[0].main);
                $('#cityname').text(val.name);
                $('#temp-value').text(val.main.temp);
                $('#pres-val').text(val.main.pressure);
                $('#wind-val').text(val.wind.speed);
                $('#hum-val').text(val.main.humidity);
            }


        });

    });


});

