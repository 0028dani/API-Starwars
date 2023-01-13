Feature: Consulta filmes

    @teste
    Scenario Outline:  Consulta a pessoa com filme e titulo
        Given que sou a pessoa <pessoa>
        When acessar a API
        Then deve apresentar o filme <filme> com titulo <titulo>
        Examples:
            | pessoa | filme                          | titulo             |
            | 1      | https://swapi.dev/api/films/3/ | Return of the Jedi |

    @planets
    Scenario Outline: look up planet names
        Given que tenho os nomes <nomes> dos planetas
        When acessar a API de planets
        Then deve apresentar o terrain <terrain> e population <population>
        Examples:
            | nomes | terrain               | population |
            | 1     | desert                | 200000     |
            | 2     | grasslands, mountains | 2000000000 |