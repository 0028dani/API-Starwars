<h1 align="center"> API Starwars</h1>

<p align="center">
  A API do Star Wars trás informações sobre personagens, planetas, naves e outras informações sobre os filmes do Star Wars.
</p>
<p align="center">
  <img src="image/starwars.png" width="250"/>
</p>

## Tecnologias

<table border="0">
  <tr>
    <td>
      <a href="https://nodejs.org/en" target="_blank">
        <img src="https://skillicons.dev/icons?i=nodejs" alt="Node.js"/>
      </a>
    </td>
    <td style="border:none"><a href="https://nodejs.org/en" target="_blank">Node.js</a></td>
  </tr>
  <tr>
    <td>
      <a href="https://docs.cucumber.io/" target="_blank">
        <img src="https://skillicons.dev/icons?i=gherkin" alt="Cucumber"/>
      </a>
    </td>
    <td><a href="https://docs.cucumber.io/" target="_blank">Cucumber</a></td>
  </tr>
  <tr>
    <td>
      <a href="https://www.chaijs.com/" target="_blank">
        <img src="https://camo.githubusercontent.com/aadaadaede0d9d49b9445eaf9ffad39b10a38c531da4a2595b1ea4943a2ebf91/687474703a2f2f636861696a732e636f6d2f696d672f636861692d6c6f676f2e706e67" alt="Chai" style="width:47px;border-radius:10px;"/>
      </a>
    </td>
    <td><a href="https://www.chaijs.com/" target="_blank">Chai</a></td>
  </tr>
</table>


## Pré requisitos
> [!WARNING]
> Para executar o projeto, você deve instalar as seguintes ferramentas em sua máquina:
- [Node.js](https://nodejs.org/en): v18 ou maior.

## Instalação
Clone o repositório no seu computador
```
git clone https://github.com/0028dani/API-Starwars.git
```

Acesse o projeto
```
cd API-Starwars
```

Instale as dependências
```
npm install
```
## Para rodar os testes localmente


Para testar o endpoint dos planetas
```
npm run test:planets
```

Para testar o endpoint das pessoas
```
npm run test:person
```

Para testar cenários diferentes você pode esta utilizando a tag @debug

```
@debug
    Scenario Outline:  Consulta a quantidade de jedi
        Given que sou o senado <senado>
        When acessar a API no endpoint <endpoint>
        Then deve apresentar a quantidade de jedi <quantidade>
```
Para testar o debug
```
npm run test:debug
```
  
