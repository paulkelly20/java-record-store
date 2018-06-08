var assert = require('assert');
var Record = require('../Record.js');
var RecordStore = require('../RecordStore.js');

var recordStore;
var record1;
var record2;

beforeEach(function(){
  recordStore = new RecordStore("Record planet", "Glasgow", 100);
  record1 = new Record("Blur", "Parklife", "Indie", 20);
  record2 = new Record("Oasis", "Whats the story morning glory", "Indie rock", 10);
});

it("Record store has a name", function(){
  assert.strictEqual(recordStore.name, "Record planet")
});

it("Record store has a location", function(){
  assert.strictEqual(recordStore.city, "Glasgow")
});
