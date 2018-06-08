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

it("Record store has empty inventory at start", function(){
  assert.strictEqual(recordStore.inventory.length, 0)
});

it("Record store has a balance", function(){
  assert.strictEqual(recordStore.balance, 100)
});


it("Record store buys record for inventory", function(){
  recordStore.buyRecordForInventory(record1)
  assert.strictEqual(recordStore.inventory.length, 1)
  assert.strictEqual(recordStore.balance, 80)
});
