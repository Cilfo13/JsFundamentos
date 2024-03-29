const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain:true }

    const onPeopleResponse = function (persona) {
        console.log(`Hola, yo soy ${persona.name}`)
    }

    function obtenerPersonaje(id){
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $.get(url ,opts, onPeopleResponse)
    }

    for(i = 1; i < 10; i++){
        obtenerPersonaje(i)
    }
    