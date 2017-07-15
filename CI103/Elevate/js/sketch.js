var EApi = "https://maps.googleapis.com/maps/api/elevation/json?";
var EKey = "&key=AIzaSyCDI1HcLHwkc5f0zXzMMVQ3p5ZMmX1CM0c";
var GeoCodeApi = "https://maps.googleapis.com/maps/api/geocode/json?";
var GeoCodeKey = "&key=AIzaSyDm1KGW61od7L06MpSubA3aPP0ZXDCf8Ks";
var GeoLocApi = "https://www.googleapis.com/geolocation/v1/geolocate/json?";
var GeoLocKey= "key=AIzaSyDWvn6VERjjM79Bvax24hMyO5RcK4sSrdo";

var address="&1129+Wilson+Drive,+Drexel+Hill,+PA"; //for testing
var locations = "&locations=40.714728,-73.998672"; //for testing

function setup() {

	var btn1 = document.getElementById("currentlocation"); //Current Location
	var btn2 = document.getElementById("submit"); //Address Submition

	btn1.addEventListener("click", function() {
		geoLocate();
	});

	btn2.addEventListener("click", function() {

		var userLocation = document.getElementById("textAddress").value;
		var ourRequest = new XMLHttpRequest();
		ourRequest.open('GET', encodeURI(GeoCodeApi + "&address=" + userLocation + GeoCodeKey));
		ourRequest.onload = function() {
			var data=JSON.parse(ourRequest.responseText);
			console.log(data);
			locate(data);
		}
		ourRequest.send();
	});
}

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  //geolocate(crd.latitude, crd.longitude)
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
};

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
};

navigator.geolocation.getCurrentPosition(success, error, options);

function locate(data) {
	var url = EApi + data + EKey;
  	console.log(data);
}

function gotData(data) {
  	console.log(data);
}

function draw() {

}
