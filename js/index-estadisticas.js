var paises;
fetch("https://pomber.github.io/covid19/timeseries.json")
    .then(function (response) {
        return response.json();

    })
    .then(function (myJson) {
        datos(myJson);
    });

function datos(data) {

    let tabla = "";
    let id = 0;

    for (let key in data) {

        
        tabla += `<tr id="${id}"/>`
        tabla += "<td>"
        tabla += key
        tabla += "</td>"
        tabla += "<td>"
        tabla += data[key][data[key].length - 1]["confirmed"]
        tabla += "</td>"
        tabla += "<td>"
        tabla += data[key][data[key].length - 1]["recovered"]
        tabla += "</td>"
        tabla += "<td>"
        tabla += data[key][data[key].length - 1]["deaths"]
        tabla += "</td>"
        tabla += "</tr>"
        id++

        document.getElementById("resultado").innerHTML = tabla;
        
 
        
    }


}

