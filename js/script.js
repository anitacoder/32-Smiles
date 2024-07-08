function initMap() {
    const maps = document.querySelectorAll('.location-map');
    
    maps.forEach(mapElement => {
        const lat = parseFloat(mapElement.getAttribute('data-lat'));
        const lng = parseFloat(mapElement.getAttribute('data-lng'));
        
        const map = new google.maps.Map(mapElement, {
            center: { lat, lng },
            zoom: 15 
        });

        
        new google.maps.Marker({
            position: { lat, lng },
            map: map,
            title: 'Dental Professional Location'
        });
    });
}

let nav = document.querySelector('nav');
let togbtn = document.getElementById('tog-btn');

togbtn.addEventListener('click', function(){
    if (nav.style.display === 'flex') {
        nav.style.display = 'none';
        togbtn.innerHTML = '<i class="fa-solid fa-bars"></i>'
    } else {
        nav.style.display = 'flex';
        togbtn.innerHTML = '<i class="fa-solid fa-x"></i>'
    }
})