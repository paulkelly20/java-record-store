var assert = require('assert');
var Record = require('../Record.js');
var RecordStore = require('../RecordStore.js');
var RecordCollector = require('../RecordCollector.js');

var recordStore;
var record1;
var record2;
var record3;
var recordCollector


beforeEach(function(){
  recordStore = new RecordStore("Record planet", "Glasgow", 100);
  record1 = new Record("Blur", "Parklife", "Indie", 10);
  record2 = new Record("Oasis", "Whats the story morning glory", "Indie rock", 10);
  record3 = new Record("Blur", "Modern life is rubbish", "Indie", 15);
  recordCollector = new RecordCollector("Paul", 100);
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
  assert.strictEqual(recordStore.balance, 90)
});

it("Record store sorts records by artist", function(){
  recordStore.buyRecordForInventory(record1)
  recordStore.buyRecordForInventory(record2)
  recordStore.buyRecordForInventory(record3)
  assert.deepStrictEqual(recordStore.listAllRecordsSortingByArtist(),[record1, record3, record2])
});

it("Record store sells record", function(){
  recordStore.buyRecordForInventory(record1)
  recordStore.buyRecordForInventory(record2)
  recordStore.buyRecordForInventory(record3)
  recordStore.sell(record1);
  assert.strictEqual(recordStore.inventory.length, 2);
  assert.strictEqual(recordStore.balance, 80);
});

it("Record stores stock value", function(){
  recordStore.buyRecordForInventory(record1);
  recordStore.buyRecordForInventory(record2);
  recordStore.buyRecordForInventory(record3);
  assert.strictEqual(recordStore.stockValue(), 35);
});

it("Record store finances", function(){
  recordStore.buyRecordForInventory(record1);
  recordStore.buyRecordForInventory(record2);
  recordStore.buyRecordForInventory(record3);
  recordStore.sell(record1);
  assert.strictEqual(recordStore.finances(), 105);
});

it("Record stores all indie albums", function(){
  recordStore.buyRecordForInventory(record1);
  recordStore.buyRecordForInventory(record2);
  recordStore.buyRecordForInventory(record3);
  assert.deepStrictEqual(recordStore.findByGenre("Indie"), [record1, record3]);
});
