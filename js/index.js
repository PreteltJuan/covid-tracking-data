fetch("https://pomber.github.io/covid19/timeseries.json")
    .then(function (response) {
        return response.json();

    })
    .then(function (myJson) {
        datos(myJson);

    });


function datos(data) {

    let tabla = "";
    let paises = new Array(10)
    paises[5] = 0
    paises[6] = 0
    paises[7] = 0
    paises[8] = 0
    paises[9] = 0

  

    for (let index = 0; index < 5; index ++) {
        for (const key in data) {
            if ( data[key][data[key].length - 1].saltar == undefined && data[key][data[key].length - 1]["deaths"] > paises[index+5]) {
                paises[index] = key
                paises[index + 5] = data[key][data[key].length - 1]["deaths"]             
            }
        }
        data[ paises[index] ][data[ paises[index] ].length - 1].saltar = true
    }
    

    for (let index = 0; index < paises.length/2; index++) {
        tabla += `<tr/>`
        tabla += "<td>"
        tabla += paises[index]
        tabla += "</td>"
        tabla += "<td>"
        tabla += data[ paises[index] ][data[paises[index]].length - 1]["confirmed"]
        tabla += "</td>"
        tabla += "<td>"
        tabla += data[ paises[index] ][data [paises[index] ].length - 1]["recovered"]
        tabla += "</td>"
        tabla += "<td>"
        tabla += data[ paises[index] ][data[ paises[index] ].length - 1]["deaths"]
        tabla += "</td>"
        tabla += "</tr>"
             
    }
    document.getElementById("resultado").innerHTML = tabla;   

}
