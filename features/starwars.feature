Feature: Consulta filmes

    @person
    Scenario Outline:  Consulta a pessoa com filme e titulo
        Given que sou a pessoa <pessoa>
        When acessar a API no endpoint <endpoint>
        Then deve apresentar o filme <filme> com titulo <titulo>
        Examples:
            | pessoa | endpoint | filme                          | titulo                  |
            | 1      | a        | https://swapi.dev/api/films/3/ | Return of the Jedi      |
            | 1      | a        | https://swapi.dev/api/films/2/ | The Empire Strikes Back |

    @planets
    Scenario Outline: Consultar nomes de planetas e a quantidade da populacao
        Given que tenho os nomes <nomes> dos planetas
        When acessar a API de planetas no endpoint <endpoint>
        Then deve apresentar o terreno <terreno> e populacao <populacao>
        Examples:
            | nomes | endpoint | terreno               | populacao  |
            | 1     | b        | desert                | 200000     |
            | 2     | b        | grasslands, mountains | 2000000000 |

    @person
    Scenario Outline: Consultar a pessoa com os starships
        Given que sou a pessoa <pessoa>
        When acessar a API das naves no endpoint <endpoint>
        Then deve apresentar as naves <naves>
        Examples:
            | pessoa | endpoint | naves                                                                                                                                                                                   |
            | 10     | a        | https://swapi.dev/api/starships/48/, https://swapi.dev/api/starships/59/, https://swapi.dev/api/starships/64/, https://swapi.dev/api/starships/65/, https://swapi.dev/api/starships/74/ |