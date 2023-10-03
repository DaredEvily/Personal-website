const cityname = $(".cityname")
// =========================
const temp = $(".Weather-Temp")
// =========================
const clouds = $(".clouds")
// =========================
const wind = $(".wind")
// =========================
const humidity = $(".humidity")
// =========================
const visibility = $(".visibility")
// =========================
const pressure = $(".pressure")
// =========================
var api ="3a78b8ad292b872ff23e93dc61ecf4fc"

$("button").click(()=>{
    // =============================
    if ($(".in").hasClass("hight") &&$(".app").hasClass("display") &&$("h2").hasClass("display")&&$("h3").hasClass("display")&&$(".main").hasClass('display')&&$("span").hasClass('display')&&$("footer").hasClass('display')){
        $(".in").removeClass("hight").hide(0).slideDown(1000)
        $(".app").removeClass("display").hide(0).slideDown(1000)
        $("h2").removeClass("display").hide(0).slideDown(1000)
        $("h3").removeClass("display").hide(0).slideDown(1000)
        $(".main").removeClass("display").hide(0).slideDown(1000)
        $("span").removeClass("display").hide(0).slideDown(1000)
        $("footer").removeClass("display").hide(0).slideDown(1000)

    }
    else{
        $(".in").addClass("hight")
        $(".app").addClass("display")
        $("h2").addClass("display")
        $("h3").addClass("display")
        $(".main").addClass("display")
        $("span").addClass("display")
    }
    // =============================

    var citnamesearch = $("#search").val()
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${citnamesearch}&appid=${api}&lang=ar&units=metric`
        $.get(url,(data)=>{
            var weatherdata = data
            cityname.html(`<h6>Lon : ${weatherdata.coord.lon}| Lat : ${weatherdata.coord.lat}</h6><br>Country : ${weatherdata.sys.country} | ${weatherdata.name}`)
            temp.html(`<img src="" class="img1"><br>${weatherdata.main.temp} ℃ <br> Real Feel ${weatherdata.main.feels_like} ℃`)
            clouds.html(`${weatherdata.weather[0].main} | ${weatherdata.weather[0].description}`)
            humidity.html(`<img src="/images/humidity.png" class="img3">${weatherdata.main.humidity}%`)
            visibility.html(`Visibility: ${weatherdata.visibility}m`)
            pressure.html(`<img src="/images/weather.png" class="img4"> ${weatherdata.main.pressure} hpa`)
            wind.html(`<img src="/images/wind.png" class="img2">${weatherdata.wind.speed} Km\\h`)

            var icon = weatherdata.weather[0].icon
            var imageUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`

            $(".img1").attr("src",imageUrl)
            });
        
})

$(document).ready(()=>{
    navigator.geolocation.getCurrentPosition(function(location) {
    
    var lat = location.coords.latitude
    var lon = location.coords.longitude
    var url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}&lang=ar&units=metric`
    $.get(url,(data)=>{
        var weatherdata = data
        $(".up").html(`
        Country : ${weatherdata.sys.country} | ${weatherdata.name}
        <br>Temp : ${weatherdata.main.temp}℃ | ${weatherdata.weather[0].main}
        <br>Real Feel : ${weatherdata.main.feels_like} ℃
        <br><h4>Wind : ${weatherdata.wind.speed} Km\\h</h4>`)
    });
    })
    var currentdate = new Date(); 
    if (currentdate.getHours() >= 12){
        var Hour =`${currentdate.getHours() - 12}:${currentdate.getMinutes()}:${currentdate.getSeconds()} Pm`
    }
    else{
        var Hour =`${currentdate.getHours()}:${currentdate.getMinutes()}:${currentdate.getSeconds()} Am`
    }

    // var date = `${currentdate.getDate()}/${currentdate.getMonth()}/${currentdate.getFullYear()}`
    
    $(".time").text(`${Hour}`)

})
