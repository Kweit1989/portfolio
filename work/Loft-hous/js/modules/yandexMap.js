// yandexMap.js
export function yandexMap() {
    ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("map", {
            center: [54.383143, 48.578744],
            zoom: 16
        });

        var myPlacemark = new ymaps.Placemark([54.383143, 48.578744], {
            balloonContent: `
            <div class="balloon">
                <div class="balloon_address">пр-т Авиастроителей-21</div>
                <div class="balloon__contacts">
                    <a href="tel:+79603604732">+7 (960) 360-47-32</a>
                </div>
            </div>
         `
        }, {
            iconLayout: 'default#image',
            iconImageHref: './img/icon/favicon.png',
            iconImageSize: [24, 24],
            iconImageOffset: [10, -42]
        });

        myMap.controls.remove('geolocationControl');
        myMap.controls.remove('searchControl');
        myMap.controls.remove('trafficControl');
        myMap.controls.remove('typeSelector');
        myMap.controls.remove('fullscreenControl');
        myMap.controls.remove('rulerControl');

        myMap.geoObjects.add(myPlacemark); 
    }
}
