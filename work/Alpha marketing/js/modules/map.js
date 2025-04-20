// Инициализация карты Яндекс 
export function map() {
    ymaps.ready(function () {
        var myMap = new ymaps.Map("map", {
            center: [54.381696, 48.583280],
            zoom: 17
        });

        var myPlacemark = new ymaps.Placemark([54.381696, 48.583280], {
            balloonContent: `
            <div class="balloon">
                <div class="balloon_address">г.&nbsp;Ульяновск, б-р&nbsp;Новосондецкий, д.&nbsp;18</div>
                <div class="balloon__contacts">
                    <a href="tel:+788124095222">+78 812 409-52-22</a>
                </div>
            </div>
         `
        }, {
            iconLayout: 'default#image',
            iconImageHref: './img/favicon.png',
            iconImageSize: [20, 20],
            iconImageOffset: [10, -42]
        });

        myMap.controls.remove('geolocationControl');
        myMap.controls.remove('searchControl');
        myMap.controls.remove('trafficControl');
        myMap.controls.remove('typeSelector');
        myMap.controls.remove('fullscreenControl');
        myMap.controls.remove('zoomControl');
        myMap.controls.remove('rulerControl');

        myMap.geoObjects.add(myPlacemark);
    });
}
