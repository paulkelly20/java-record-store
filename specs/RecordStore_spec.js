var assert = require('assert');
var Record = require('../Record.js');
var RecordStore = require('../RecordStore.js');

var recordStore;
var record1;
var record2;
var record3;

beforeEach(function(){
  recordStore = new RecordStore("Record planet", "Glasgow", 100);
  record1 = new Record("Blur", "Parklife", "Indie", 20);
  record2 = new Record("Oasis", "Whats the story morning glory", "Indie rock", 10);
  record3 = new Record("Blur", "Modern life is rubbish", "Indie rock", 11);
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

it("Record store sorts records by artist", function(){
  recordStore.buyRecordForInventory(record1)
  recordStore.buyRecordForInventory(record2)
  recordStore.buyRecordForInventory(record3)
  assert.deepStrictEqual(recordStore.listAllRecordsSortingByArtist(),[record1, record3, record2])
});
