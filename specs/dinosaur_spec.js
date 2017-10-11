var assert = require("assert");
var Dinosaur = require("../dinosaur.js");

describe("Dinosaur", function() {
  var dinosaur1;
  var dinosaur2;
  var dinosaur3;
  var dinosaur4;
  var dinosaur5;

  beforeEach(function(){
    dinosaur1 = new Dinosaur("Diplodocus", 5);
    dinosaur2 = new Dinosaur("T Rex", 2);
    dinosaur3 = new Dinosaur("Spinosaurus", 3);
    dinosaur4 = new Dinosaur("Triceratops", 5);
    dinosaur5 = new Dinosaur("Brontosaurus", 1);

  });

  it("should have a type ", function() {
    assert.strictEqual(dinosaur1.type, "Diplodocus");

  });

  it("should have a number of offspring", function() {
    assert.strictEqual(dinosaur1.offspringAmount, 5);
  });




})
