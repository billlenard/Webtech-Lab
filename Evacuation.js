function initMap() {
			var opts = {
				zoom:4,
				center:{lat:16.4023, lang:120.5960}
			} 
			var map = new google.maps.Map(document.getElementsById('map'), opts);

			google.maps.event.addListener(map, 'click', function(event){
				addMarker({coordinates:event.latlLng});
			}
			var markers = [
            {
              coordinates:{lat:16.4170164, lng:120.6145349},
              content:'<h1>Pacdal - Saint Louis High School</h1>
            },
            {
              coordinates:{lat:16.4170379, lng:120.6160942},
              content:'<h1>Pacdal - Rizal National School</h1>'
            },
            {
              coordinates:{lat:16.418045, lng:120.6209106},
              content:'<h1>Pacdal, Rizal Annex - Baguio City National Highschool</h1>'
            },
            {
              coordinates:{lat:16.4240257, lng:120.6059267},
              content:'<h1>Pacdal, Gibraltar Elementary School</h1>'
            },
            {
              coordinates:{lat:16.4222262, lng:120.6133301},
              content:'<h1>Aurora Hill, Malvar St. - Doña Aurora National High School</h1>'
            },
            {
              coordinates:{lat:16.4249998, lng:120.6048826},
              content:'<h1>Aurora Hill - Doña Aurora National High School</h1>'
            },
                
            	
          ]};
			for(var i = 0; i < markers.length;i++){
				addMarker(markers[i])
			}
			if (content) {
				var InfoWindow = new google.maps.InfoWindow({
					content: content
				});
				markers.addListener('click', function(){
					InfoWindow.open(map, markers)
				});
			};
}