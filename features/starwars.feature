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
    Scenario Outline: look up planet names
        Given que tenho os nomes <nomes> dos planetas
        When acessar a API de planets no endpoint <endpoint>
        Then deve apresentar o terrain <terrain> e population <population>
        Examples:
            | nomes | endpoint | terrain               | population |
            | 1     | b        | desert                | 200000     |
            | 2     | b        | grasslands, mountains | 2000000000 |

    @person
    Scenario Outline: Consultar a pessoa com os starships
        Given que sou a pessoa <pessoa>
        When acessar a API de starships no endpoint <endpoint>
        Then deve apresentar o starships <starships>
        Examples:
            | pessoa | endpoint | starships                                                                                                                                                                               |
            | 10     | a        | https://swapi.dev/api/starships/48/, https://swapi.dev/api/starships/59/, https://swapi.dev/api/starships/64/, https://swapi.dev/api/starships/65/, https://swapi.dev/api/starships/74/ |