/*
    Assignment 4
    {Your name here}
*/

$(document).ready(function(){
    isstorageAvailable();
    isGeoLocationAvailable();
   navigator.geolocation.getCurrentPosition((position)=>{
       let lat2=position.coords.latitude;
       let lon2=position.coords.longitude;
       $("#youarehere").html("the current location is : latitude "+position.coords.latitude + " / longitude "+position.coords.longitude +"<br>")

       if(localStorage.getItem("latitude")==null&& localStorage.getItem("longitude")==null){
        $("#youarehere").html("<h3>welcome to our wibsite</h3> ");

       }
       else{
        $("h3").css("display","none");
           var lat1=localStorage.getItem("latitude");
           var lon1=localStorage.getItem("longitude");
           $("#youarehere").append("you moved away "+calcDistance(lat1,lon1,lat2,lon2));

       }

           localStorage.setItem("latitude",lat2);
           localStorage.setItem("longitude",lon2);

       console.log(lat1,lon1,lat2,lon2);


   },
       function (){
           $("#youarehere").html("Can't use geolocation!!");
       },{
        enableHighAccuracy: true
    });






    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistance(lat1, lon1, lat2, lon2){
        var toRadians = function(num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2-lat1);
        var Δλ = toRadians(lon2-lon1);

        var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ/2) * Math.sin(Δλ/2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

        return ( R * c );
    }
});
function isstorageAvailable(){
    if (typeof localStorage == 'undefined'){
        alert("localStorage is not available");}
        else{
            console.log("localstorage is available");
        }
    }

function isGeoLocationAvailable(){
    if (typeof navigator.geolocation == 'undefined'){
        alert("geolocation is not available");
    }
    else{
        console.log("geolacation is available")
    }
}


