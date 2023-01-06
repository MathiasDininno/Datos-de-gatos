function consumir_API_GATOS() {
    fetch("https://catfact.ninja/fact")
        .then(response => response.json())
        .then(response => {
            console.log(response.fact)
            // document.getElementById("demo").innerHTML = response.fact
            traducir(response.fact)
        }
        )
        .catch(err => console.error(err));
}

function traducir(texto) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2ced268edamsh231a857fab905adp17c230jsnd5e0f4bcbbc9',
            'X-RapidAPI-Host': 'translated-mymemory---translation-memory.p.rapidapi.com'
        }
    };

    fetch('https://translated-mymemory---translation-memory.p.rapidapi.com/get?langpair=en%7Ces&q=' + texto + '&mt=1&onlyprivate=0&de=a%40b.c', options)
        .then(response => response.json())
        .then(response => document.getElementById("demoDos").innerHTML = response.responseData.translatedText)
        .catch(err => console.error(err));
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function consumir_API_FOTOS() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2ced268edamsh231a857fab905adp17c230jsnd5e0f4bcbbc9',
            'X-RapidAPI-Host': 'giphy.p.rapidapi.com',
        }
    };

    fetch('https://giphy.p.rapidapi.com/v1/gifs/search?api_key=BkRHG8Ob3BDXSJWLEOoT2CnhLKoLHSKu&q=funny%20cat&limit=100', options)
        .then(response => response.json())
        .then(response => {
            let random_valor = random(1, 50)
            console.log(response.data[random_valor].images.original.url)
            document.getElementById("foto").src = response.data[random_valor].images.original.url
        }
        )
        .catch(err => console.error(err));
}

function veOtroDato() {
    consumir_API_GATOS()
    consumir_API_FOTOS()
}

consumir_API_GATOS()
consumir_API_FOTOS()

