const axios = require("axios").default;
const { setWorldConstructor } = require("@cucumber/cucumber");
const { default: json_formatter } = require("cucumber/lib/formatter/json_formatter");

class Contexto {
    async acessarFilme() {
        var { pessoa } = this;
        var url = `https://swapi.dev/api/people/${pessoa}`;

        var response = await axios.get(url);
        //console.log(" API dos filmes " + JSON.stringify(response.data.films))
        //console.log(" API de starships " + JSON.stringify(response.data.starships))
        console.log("data " + JSON.stringify(response.data))
        return {
            ...response.data, filmes: response.data.films, starships: response.data.starships
        }
    }

    async filme(filme) {
        var url = filme;
        var response = await axios.get(url);
        console.log(" informações do filme: " + JSON.stringify(response.data.title))

        return {
            ...response.data, title: response.data.title
        }
    }

    async planets() {
        var { nomes } = this;
        var url = `https://swapi.dev/api/planets/${nomes}`;
        var response = await axios.get(url);
        console.log("retorno: " + JSON.stringify(response.data))
        return {
            ...response.data
        }
    }

    async starships() {

    }
}
setWorldConstructor(Contexto)