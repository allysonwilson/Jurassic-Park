var assert = require("assert");
var Dinosaur = require("../dinosaur");
var Park = require("../park");

describe("Park", function(){
  var park;
  var diplodocus;
  var triceratops;


  beforeEach(function(){
    park = new Park();
  dinosaur1 = new Dinosaur("Diplodocus", 5);
  dinosaur2 = new Dinosaur("Diplodocus", 5);
  dinosaur3 = new Dinosaur("Diplodocus", 5);
  dinosaur4 = new Dinosaur("Diplodocus", 5);
  dinosaur5 = new Dinosaur("Diplodocus", 5);
  });

   it("park should start empty", function() {
     assert.strictEqual(park.dinosaurs.length, 0);
   });

});
