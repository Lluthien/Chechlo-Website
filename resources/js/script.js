$(document).ready(function() {
	
    $('.button').addClass('animated  pulse');

	 // Stała nawigacja // 
	$('.news_section').waypoint(function(direction) {
    if (direction == "down") {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  }, {
    offset: '60px'
  });
	
	 /* Scrollowanie na przyciskach */
	$('.scroll-to-news').click(function() {
		$('html, body').animate( {scrollTop: $('.news_section').offset().top}, 1000);
	});
	  
	$('.scroll-to-contact').click(function() {
		$('html, body').animate( {scrollTop: $('.contact').offset().top}, 1000);
	});


	// Animacje podczas scrollowania //
	$('.animation').waypoint(function(direction) {
        $('.animation').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
	
	$('.animationinput1').waypoint(function(direction) {
	        $('.animationinput1').addClass('animated fadeInRight');
	    }, {
	        offset: '50%'
	    });

	$('.animationinput2').waypoint(function(direction) {
		    $('.animationinput2').addClass('animated fadeInRight');
		}, {
		    offset: '50%'
		});
	$('.animationinput3').waypoint(function(direction) {
		    $('.animationinput3').addClass('animated fadeInRight');
		}, {
		    offset: '50%'
		});
		  
	// Mapa //
	var map = new GMaps ({
      div: '.map',
      lat: 50.3683928,
      lng: 19.4537292,
      zoom: 12,
      scrollwheel: false, // wylaczenie scrollowania mapy
      styles: [
        {
          "featureType": "all",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "saturation": 36
            },
            {
              "color": "#000000"
            },
            {
              "lightness": 40
            }
          ]
        },
        {
          "featureType": "all",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "visibility": "on"
            },
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 16
                  }
              ]
          },
          {
              "featureType": "all",
              "elementType": "labels.icon",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "administrative",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 20
                  }
              ]
          },
          {
              "featureType": "administrative",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 17
                  },
                  {
                      "weight": 1.2
                  }
              ]
          },
          {
              "featureType": "landscape",
              "elementType": "geometry",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 20
                  }
              ]
          },
          {
              "featureType": "poi",
              "elementType": "geometry",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 21
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 17
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 29
                  },
                  {
                      "weight": 0.2
                  }
              ]
          },
          {
              "featureType": "road.arterial",
              "elementType": "geometry",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 18
                  }
              ]
          },
          {
              "featureType": "road.local",
              "elementType": "geometry",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 16
                  }
              ]
          },
          {
              "featureType": "transit",
              "elementType": "geometry",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 19
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
                  {
                      "color": "#000000"
                  },
                  {
                      "lightness": 17
                  }
              ]
          }
      ]
    });

	map.addMarker({
      lat: 50.3683928,
      lng: 19.4537292,
      title: 'Chechło',
      infoWindow: {
        content: '<p>Our Lisbon HQ</p>'
      }
    });
});

function goNext(){

	var jedynka = document.getElementById('news1');
	var czworka = document.getElementById('news4');
	$('.news').removeClass('animated bounceInLeft');
	

	if (jedynka.classList.contains('news_show')) {	
		document.getElementById("arrow_left").classList.remove('arrow_left_hidden');
		document.getElementById("arrow_left").classList.add('arrow_left');
		document.getElementById("news1").classList.remove('news_show');
		document.getElementById("news2").classList.remove('news_show');
		document.getElementById("news3").classList.remove('news_show');
		document.getElementById("news4").classList.add('news_show');
		document.getElementById("news5").classList.add('news_show');
		document.getElementById("news6").classList.add('news_show');
	} else if (czworka.classList.contains('news_show')) {
		document.getElementById("arrow_left").classList.add('arrow_left');
		document.getElementById("news4").classList.remove('news_show');
		document.getElementById("news5").classList.remove('news_show');
		document.getElementById("news6").classList.remove('news_show');
		document.getElementById("news7").classList.add('news_show');
		document.getElementById("news8").classList.add('news_show');
		document.getElementById("news9").classList.add('news_show');
		document.getElementById("arrow_right").classList.remove('arrow_right');
		document.getElementById("arrow_right").classList.add('arrow_right_hidden');
	}
	
}

 
function goBack(){
	var czworka = document.getElementById('news4');
	var siodemka = document.getElementById('news7');
	
	
	if (siodemka.classList.contains('news_show')) {
		document.getElementById("news7").classList.remove('news_show');
		document.getElementById("news8").classList.remove('news_show');
		document.getElementById("news9").classList.remove('news_show');
		document.getElementById("news4").classList.add('news_show');
		document.getElementById("news5").classList.add('news_show');
		document.getElementById("news6").classList.add('news_show');
		document.getElementById("arrow_right").classList.remove('arrow_right_hidden');
		document.getElementById("arrow_right").classList.add('arrow_right');
	} else if (czworka.classList.contains('news_show')) {
		document.getElementById("arrow_right").classList.remove('arrow_right_hidden');
		document.getElementById("arrow_right").classList.add('arrow_right');
		document.getElementById("news4").classList.remove('news_show');
		document.getElementById("news5").classList.remove('news_show');
		document.getElementById("news6").classList.remove('news_show');
		document.getElementById("news1").classList.add('news_show');
		document.getElementById("news2").classList.add('news_show');
		document.getElementById("news3").classList.add('news_show');
		document.getElementById("arrow_left").classList.remove('arrow_left');
		document.getElementById("arrow_left").classList.add('arrow_left_hidden');
	}
}
