function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
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
        .then(response => {
            document.getElementById("demoIngles").innerHTML = response.responseData.translatedText
        })
        .catch(err => console.error(err));
}

function consumir_API_Gatos() {
    fetch('https://catfact.ninja/fact')
        .then(response => response.json())
        .then(response => {
            console.log(response.fact)
            document.getElementById("demo").innerHTML = response.fact;
            //traducir(response.fact);
        }
        )
        .catch(err => console.error(err));
}

function consumir_API_Gifs() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2ced268edamsh231a857fab905adp17c230jsnd5e0f4bcbbc9',
            'X-RapidAPI-Host': 'giphy.p.rapidapi.com',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    };

    fetch('https://giphy.p.rapidapi.com/v1/gifs/search?api_key=BkRHG8Ob3BDXSJWLEOoT2CnhLKoLHSKu&q=funny%20cat&limit=100', options)
        .then(response => response.json())
        .then(response => {
            let valor_random = random(1, 50);
            console.log(response.data[valor_random].url);
            document.getElementById("gifGatuno").src = response.data[valor_random].images.original.url;
            animar();
        }
        )
        .catch(err => console.error(err));
}

function cambiarColores() {
    const colores = ["linear-gradient(117.07deg, #94C7E8 0%, #EFC080 85.69%);",
        "linear-gradient(116.82deg, #43CB37 0%, #6AE79C 48.44%, #EBC461 100%);",
        "linear-gradient(243.18deg, #E48A8A 0%, #8476DE 100%);",
        "linear-gradient(180deg, #EB7CA3 17.33%, #86EA8F 100%);",
        "linear-gradient(270deg, #9FEE84 0%, #AC8CF0 100%);",
        "linear-gradient(296.82deg, #9782EB 0%, #F1C787 100%);"]
    const body = document.querySelector("html");
    body.style = "background: " + colores[Math.floor(Math.random() * colores.length)] + "height: 100%";
}

function animar() {
    document.getElementById("gifGatuno").style = "animation: example 2s";
    document.getElementById("demo").style = "animation: exampleDos 2s";
}

function cargar() {
    document.getElementById("gifGatuno").style.removeProperty('animation');
    document.getElementById("demo").style.removeProperty('animation');
    consumir_API_Gatos();
    consumir_API_Gifs();
    cambiarColores();
}

consumir_API_Gatos();
consumir_API_Gifs();
cambiarColores();