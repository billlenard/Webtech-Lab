function initMap(){
          // Map options
            
            var options = {
            zoom: 14,
            center:{lat:16.4023332,lng: 120.59600709999995}
          }

	var map = new google.maps.Map(document.getElementById('map'), options);
          
          var markers = [
            {
              coordinates:{lat:16.4170164, lng:120.6145349},
              content:'<h1>Pacdal - Saint Louis High School</h1>'
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
              coordinates:{lat:16.426949, lng:120.5936129},
              content: '<h1>New Lucban - Lucban Elementary School, Camdas Subdivision</h1>'
            },
            {
              coordinates:{lat:16.426949, lng:120.5936129},
              content: '<h1>New Lucban - Lucban Elementary School, Camdas Subdivision</h1>'
            },
            { 
              coordinates:{lat:16.4196101, lng:120.5879625},
              content: '<h1>Legarda - Kisad Rd., Bonifacio Elementary School</h1>'	
            },                         
            { 
              coordinates:{lat:16.4196101, lng:120.5879625},
              content: '<h1>Pinsao - Pinsao Rd., Burnham, Bonifacio National High School</h1>'	
            },
            { 
              coordinates:{lat:16.4278142, lng:120.5817729},
              content: '<h1>Pinsao - Pinsao Rd., Pinsao Elementary School</h1>'	
            },
            { 
              coordinates:{lat:16.431977, lng:120.583536},
              content: '<h1>Pinget - Purok 8, Upper Pinget, Pinget National High School</h1>'	
            },
            { 
              coordinates:{lat:16.431977, lng:120.583536},
              content: '<h1>Pinget - Pinget Elementary School</h1>'	
            },
            { 
              coordinates:{lat:16.4086715, lng:120.5893322},
              content: '<h1>City Camp - Aguinaldo Elementary School</h1>'	
            },
            { 
              coordinates:{lat:16.4041062, lng:120.6032016},
              content: '<h1>Quezon Hill - Quezon Elementary School</h1>'	
            },
                
                                          
            { 
              coordinates:{lat:16.3845482, lng:120.5930252},
              content: '<h1>Bakakeng Annex - Baguio City National High School</h1>'	
            },                        
            { 
              coordinates:{lat:16.3842153, lng:120.5931548},
              content: '<h1>Bakakeng Norte/Sur - Saint Louis University Maryheights Campus</h1>'	
            },
            { 
              coordinates:{lat:16.4041062, lng:120.6032016},
              content: '<h1>Bakakeng Norte/Sur - CICM Loop New Site, Cherubim School Inc.</h1>'	
            },
            { 
              coordinates:{lat:16.3884633, lng:120.5909307},
              content: '<h1>Bakakeng Norte/Sur - Brgy. Unamed, Daily International School</h1>'	
            },
            { 
              coordinates:{lat:16.406874, lng:120.5972387},
              content: '<h1>Governor Pack Rd. - Governor Pack Rd., Baguio City National High School</h1>'	
            },
            { 
              coordinates:{lat:16.413854, lng:120.599267},
              content: '<h1>General Luna - Mary Immaculate School Baguio City Inc.</h1>'	
            },
            { 
              coordinates:{lat:16.3782207, lng:120.5712606},
              content: '<h1>Marcos Highway - Sto. Tomas Rd., Roxas National High School</h1>'	
            },
            { 
              coordinates:{lat:16.4037463, lng:120.603269},
              content: '<h1>DPS - DPS Compound Access Rd., Manuel L. Quezon Elementary School</h1>'	
            },
            { 
              coordinates:{lat:16.3804763, lng:120.6038954},
              content: '<h1>Camp 7 - Monticello Rd., WESTMONT - Westgrove Heights</h1>'	
            },
            { 
              coordinates:{lat:16.4030723, lng:120.6047666},
              content: '<h1>Military Cutoff - Military Cutoff Rd., Baguio City Special Education Center</h1>'	
            },
                                          
                                          
                                          
                                          
            { 
              coordinates:{lat:16.3949891, lng:120.5966611},
              content: '<h1>Military Cutoff - Military Cutoff Rd., Baguio City Special Education Center</h1>'	
            },
            { 
              coordinates:{lat:16.3949891, lng:120.5966611},
              content: '<h1>Camp 7 - San Vicente National High School</h1>'	
            },
            { 
              coordinates:{lat:16.4133214, lng:120.6034899},
              content: '<h1>Brent Road - Yangco Rd., Philippine Bell International School</h1>'	
            },
            { 
              coordinates:{lat:16.410419, lng:120.600965},
              content: '<h1>Bagumbayan Road - Mabini Elementary School</h1>'	
            },
            { 
              coordinates:{lat:16.395099, lng:120.596532},
              content: '<h1>Camp 7 - San Vicente Elementary School</h1>'	
            },
            { 
              coordinates:{lat:16.4118197, lng:120.6024824},
              content: '<h1>General Luna - Salud Mitra, St. Elizabeth Montessori School of Baguio City</h1>'	
            },
            { 
              coordinates:{lat:16.4235758, lng:120.587002},
              content: '<h1>Easter Road - EASTER COLLEGE</h1>'	
            },
            { 
              coordinates:{lat:16.4015988, lng:120.5942076},
              content: '<h1>Palispis Highway - Keystone College</h1>'	
            },
            { 
              coordinates:{lat:16.4023332, lng:120.5960071},
              content: '<h1>Kennon Road - Aguinaldo Elementary School Baguio City</h1>'	
            },
            { 
              coordinates:{lat:16.413687, lng:120.58947},
              content: '<h1>Palma Street - Pines City National High School</h1>'	
            },
            { 
              coordinates:{lat:16.3807332, lng:120.6069221},
              content: '<h1>Kennon Road - Camp 7 Elementary School</h1>'	
            },
            { 
              coordinates:{lat:16.3772707, lng:120.6125453},
              content: '<h1>Loakan Road - Loakan Elementary School</h1>'	
            },
            { 
              coordinates:{lat:16.394608, lng:120.606928},
              content: '<h1>Hillside Road - JP Laurel Elementary School</h1>'	
            },
            { 
              coordinates:{lat:16.3963616, lng:120.6087579},
              content: '<h1>Camp John Hay - John Hay Elementary School</h1>'	
            },
            { 
              coordinates:{lat:16.4037463, lng:120.603269},
              content: '<h1>DPS Compound - DPS Compound Access Rd., Manuel L. Quezon Elementary School</h1>'	
            },
          ];
        
            
          // Loop through markers
          for(var i = 0;i < markers.length;i++){
            // Add marker
            addMarker(markers[i]);
          }

          // Add Marker Function
          function addMarker(props){
            var marker = new google.maps.Marker({
              position:props.coordinates,
              map:map,
              //icon:props.iconImage
            });

            // Check for customicon
            if(props.iconImage){
              // Set icon image
              marker.setIcon(props.iconImage);
            }

            // Check content
            if(props.content){
              var infoWindow = new google.maps.InfoWindow({
                content:props.content
              });

              marker.addListener('click', function(){
                infoWindow.open(map, marker);
              });
            }
          }
            
        var infoWindow = new google.maps.InfoWindow;
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
                    
                infoWindow.setPosition(pos);
                infoWindow.setContent('You are here.');
                infoWindow.open(map);
                    map.setCenter(pos);
                }, function() {
                    handleLocationError(true, infoWindow, map.getCenter());
                    });
            } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
            }
      }

            function handleLocationError(browserHasGeolocation, infoWindow, pos) {
                infoWindow.setPosition(pos);
                infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
                infoWindow.open(map);
            }
    
    