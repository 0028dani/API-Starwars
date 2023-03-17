const chai = require("chai");
const { assert, expect } = chai;
const deepEqualInAnyOrder = require("deep-equal-in-any-order");
chai.use(deepEqualInAnyOrder);
const { Given, When, Then } = require("@cucumber/cucumber");


Given(/^que sou a pessoa (.*)$/, async function (pessoa) {
  this.pessoa = pessoa;
});

When(/^acessar a API$/, async function () {
  var response = await this.acessarFilme()
  this.films = response.filmes;
});

Then(/^deve apresentar o filme (.*) com titulo (.*)$/, async function (filme, titulo) {

  var response = await this.filme(filme)


  this.title = response.title;
  console.log("o que puxa: " + this.title)
  let indice;

  if (this.films.includes(filme)) {
    indice = this.films.indexOf(filme)
    console.log(this.films.indexOf(filme))
  }

  console.log("cucumber " + titulo)
  expect(this.films[indice]).to.eq(filme);
  expect(this.title).to.eq(titulo);
});


Given(/^que tenho os nomes (.*) dos planetas$/, async function (nomes) {
  this.nomes = nomes;
});

When(/^acessar a API de planets$/, async function () {
  var response = await this.planets()
  this.nomes = response.planets;
  this.terrain = response.terrain;
  this.population = response.population
});

Then(/^deve apresentar o terrain (.*) e population (.*)$/, async function (terrain, population) {
  expect(terrain).to.eq(this.terrain);
  expect(population).to.eq(this.population);
});

When(/^acessar a API de starships$/, async function () {
  var response = await this.acessarFilme()
  this.starships = response.starships
  console.log("teste " + this.starships)

});


Then(/^deve apresentar o starships (.*)$/, async function (starships) {
  var listaDeTeste = starships.split(", ");

  console.log("a " + listaDeTeste.sort())
  console.log("a " + this.starships.sort())
  expect(this.starships.sort()).to.eql(listaDeTeste.sort());

});

