const chai = require("chai");
const { assert, expect } = chai;
const deepEqualInAnyOrder = require("deep-equal-in-any-order");
chai.use(deepEqualInAnyOrder);
const { Given, When, Then } = require("@cucumber/cucumber");


Given(/^que sou a pessoa (.*)$/, async function (pessoa) {
  this.pessoa = pessoa;
});

When(/^acessar a API no endpoint (.*)$/, { timeout: 1000 * 50000 }, async function (endpoint) {
  this.endpoint = endpoint;
  var response = await this.acessarFilme()
  this.films = response.filmes;
});

Then(/^deve apresentar o filme (.*) com titulo (.*)$/, { timeout: 1000 * 50000 }, async function (filme, titulo) {
  var response = await this.filme(filme)

  this.title = response.title;
  let indice;

  if (this.films.includes(filme)) {
    indice = this.films.indexOf(filme)
  }

  expect(this.films[indice]).to.eq(filme);
  expect(this.title).to.eq(titulo);
});


Given(/^que tenho os nomes (.*) dos planetas$/, async function (nomes) {
  this.nomes = nomes;
});

When(/^acessar a API de planets no endpoint (.*)$/, { timeout: 1000 * 50000 }, async function (endpoint) {
  this.endpoint = endpoint;
  var response = await this.planets()
  this.nomes = response.planets;
  this.terrain = response.terrain;
  this.population = response.population
});

Then(/^deve apresentar o terrain (.*) e population (.*)$/, async function (terrain, population) {
  expect(terrain).to.eq(this.terrain);
  expect(population).to.eq(this.population);
});

When(/^acessar a API de naves no endpoint (.*)$/, async function (endpoint) {
  this.endpoint = endpoint;
  var response = await this.acessarFilme()
  this.starships = response.starships
});


Then(/^deve apresentar o naves (.*)$/, async function (starships) {
  var listaDeTeste = starships.split(", ");
  expect(this.starships.sort()).to.eql(listaDeTeste.sort());

});

