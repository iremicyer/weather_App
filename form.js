
document.querySelector("button").addEventListener("click", e => {
    e.preventDefault();
    let input = document.querySelector("input");
    getApiUserList(input);
});
const getApiUserList = (input) => {
     
    $.ajax({
        type: "GET",
        url: `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=4d8fb5b93d4af21d66a2948710284366&units=metric`,
        dataType: 'json',
        success: function (veri) {
            const { main, name, sys, weather } = veri;
            const icon = `https://openweathermap.org/img/wn/${
              weather[0]["icon"]
            }@2x.png`;            document.querySelector(".cities").innerHTML +=
                `<li class="city">
                    <h2 class="city-name" data-name= ${veri.main.name}>
                        <span>${veri.name}</span>
                        <sup>${veri.sys.country}</sup>
                    </h2>
                    <span class="city-temp">${veri.main.temp}  <sup>°C</sup></span>
                    <figure>
                    <img class="city-icon" src=${icon} alt=${weather[0]["main"]}>
                    <figcaption>${veri.weather[0].description}</figcaption>
                    </figure>
                </li>`;

        },
    });

}
