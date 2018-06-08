var assert = require('assert');
var Record = require('../Record.js');

var record;

beforeEach(function(){
  record = new Record("Blur", "Parklife", "Indie", 20)
});

it("record has a Artist", function(){
  assert.strictEqual(record.artist, "Blur")
});

it("record has a Title", function(){
  assert.strictEqual(record.title, "Parklife")
});

it("record has a genre", function(){
  assert.strictEqual(record.genre, "Indie")
});

it("record has a price", function(){
  assert.strictEqual(record.price, 20)
});
