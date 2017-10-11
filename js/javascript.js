// AIzaSyCvv0YXd1w_XI9wnAFiUsZ9VRgV-eKefgQ
function initMap() {
        var uluru = {lat: 22.284208, lng: 114.155059};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }$(document).ready(setup);

      function setup(){
        console.log('Inside setup');
        $('#send').click(sendData);
      }
      function sendData(){
        console.log('Inside sendData');
        var name = $('#name').val();
        var email = $('#email').val();
        var comments = $('#comments').val();
console.log('data:' + name + ', '+ email + ', ' + comments);
      }
