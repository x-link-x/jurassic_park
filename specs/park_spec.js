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
    assert.strictEqual(park.name, "Jurassic Park");
  });

  it('should have a ticket price', function() {
    assert.strictEqual(park.ticketPrice, 100);
  });

  it('should have a collection of dinosaurs', function() {
    assert.deepStrictEqual(park.dinosaurs, [dinosaur1, dinosaur2, dinosaur3]);
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDinosaur(dinosaur4);
    assert.deepStrictEqual(park.dinosaurs, [dinosaur1, dinosaur2, dinosaur3, dinosaur4]);
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.addDinosaur(dinosaur4);
    park.removeDinosaur(dinosaur4);
    assert.deepStrictEqual(park.dinosaurs, [dinosaur1, dinosaur2, dinosaur3]);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    assert.strictEqual(park.mostPopular(), dinosaur3);
  });

  it('should be able to find all dinosaurs of a particular species', function() {
    park.addDinosaur(dinosaur5);
    assert.strictEqual(park.oneSpecies('t-rex').length, 2);
  });

  it('should be able to calculate the total number of visitors per day', function() {
    assert.strictEqual(park.calculateDailyVisitors(), 150);
  });

  it('should be able to calculate the total number of visitors per year', function() {
    assert.strictEqual(park.calculateYearlyVisitors(), 54000);
  });

  it('should be able to calculate total revenue for one year', function() {
    assert.strictEqual(park.calculateAnnualRevenue(), 5400000);
  });

  it('should be able to remove all dinosaurs of a particular species', function() {
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur5);
    park.removeDinosaursBySpecies('t-rex');
    assert.deepStrictEqual(park.dinosaurs, [dinosaur2, dinosaur3, dinosaur4]);
  })

});
