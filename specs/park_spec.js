const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;
  let park;

  beforeEach(function () {
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('stegosaurus', 'herbivore', 40);
    dinosaur3 = new Dinosaur('pterodactyl', 'carnivore', 60);
    dinosaur4 = new Dinosaur('brontosaurus', 'herbivore', 100);
    dinosaur5 = new Dinosaur('t-rex', 'carnivore', 45)
    park = new Park('Jurassic Park', 100, [dinosaur1, dinosaur2, dinosaur3]);
  })

  it('should have a name', function() {
    actual = park.name;
    assert.strictEqual(actual, "Jurassic Park");
  });

  it('should have a ticket price', function() {
    actual = park.ticketPrice;
    assert.strictEqual(actual, 100);
  });

  it('should have a collection of dinosaurs', function() {
    actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur2, dinosaur3]);
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDinosaur(dinosaur4);
    actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur2, dinosaur3, dinosaur4]);
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.addDinosaur(dinosaur4);
    park.removeDinosaur(dinosaur4);
    actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur2, dinosaur3]);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    actual = park.mostPopular();
    assert.strictEqual(actual, dinosaur3);
  });

  it('should be able to find all dinosaurs of a particular species', function() {
    park.addDinosaur(dinosaur5);
    actual = park.oneSpecies('t-rex').length;
    assert.strictEqual(actual, 2);
  });

  it('should be able to calculate the total number of visitors per day', function() {
    actual = park.calculateDailyVisitors();
    assert.strictEqual(actual, 150);
  });

  it('should be able to calculate the total number of visitors per year', function() {
    actual = park.calculateYearlyVisitors();
    assert.strictEqual(actual, 54750);
  });

  it('should be able to calculate total revenue for one year', function() {
    actual = park.calculateAnnualRevenue();
    assert.strictEqual(actual, 5475000);
  });

  it('should be able to remove all dinosaurs of a particular species', function() {
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur5);
    actual = park.removeDinosaursBySpecies('t-rex');
    assert.deepStrictEqual(actual, [dinosaur2, dinosaur3, dinosaur4]);
  });

  it('should be able to provide an object containing each of the diet types and the number of dinosaurs in the park with that diet type', function() {
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur5);
    actual = park.getDietTypes();
    assert.deepStrictEqual(actual, {'carnivore': 3, 'herbivore': 2});
  });

});
