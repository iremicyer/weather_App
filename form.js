
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

            // if (veri[0].id != "0") {

            // for (var i = 0; i < veri.length; i++) {

            //     $('#weatherList').append(

            //         `<tr>

            //                       <td>

            //                          ${veri[i].sehir}

            //                       </td>

            //                       <td>

            //                           ${veri[i].weather}

            //                       </td>

            //                       <td>

            //                           ${veri[i].title}

            //                       </td>

            //                       <td>

            //                           ${veri[i].completed}

            //                       </td
            //               </tr>`);

            // } }

            // else {

            //     console.log("getApiUserList ajax send request nodata");

            // }

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
