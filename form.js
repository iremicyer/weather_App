
document.querySelector("button").addEventListener("click", e => {
    console.log("merhaba");
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
            console.log(veri);
            document.querySelector(".cities").innerHTML +=
                `<li class="city">
                    <h2 class="city-name" data-name= ${veri.main.name}>
                        <span></span>
                        <sup>${veri.sys.country}</sup>
                    </h2>
                    <span class="city-temp">${veri.main.temp}  <sup>°C</sup></span>
                    <figure>
                        <img class="city-icon" src="${veri.weather[0].icon} " alt="icon" />
                        <figcaption>${veri.weather[0].description}</figcaption>
                    </figure>
                </li>`;

        },

        beforeSend: function (request) {

            // request.setRequestHeader("token", localStorage.getItem("token"));

            // document.getElementById("loading").style.display = "block";

            console.log("getApiUserList ajax send request before");

        },

        complete: function () {

            console.log("getApiUserList ajax send request finished");

            // document.getElementById("loading").style.display = "none";



        },

        error: function (XMLHttpRequest, textStatus, errorThrown) {

            // postErrorLog("app-" + window.location.pathname, XMLHttpRequest.responseText, XMLHttpRequest.status, textStatus, errorThrown);



            if (XMLHttpRequest.readyState == 4) {

                // HTTP error (can be checked by XMLHttpRequest.status and XMLHttpRequest.statusText)

            }

            else if (XMLHttpRequest.readyState == 0) {

            }

            else {

                // something weird is happening

            }
        }

    });

}
