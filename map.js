(function (){
    'use strict';
    
    function onPositionReceived(position){
        console.log(position);
    }
    
    function locationNotReceived(positionError){
        console.log(positionError);
    }
    
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(onPositionReceived, locationNotReceived, {timeout:0});
        
        var watch = navigator.geolocation.watchPosition(onPositionReceived, locationNotReceived);
        console.log(watch);
        navigator.geolocation.clearWatch(watch);
    }
}());