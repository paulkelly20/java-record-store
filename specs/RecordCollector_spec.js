assert = require("assert");
RecordCollector = require("../RecordCollector.js");
var Record = require('../Record.js');
var RecordStore = require('../RecordStore.js');

var recordCollector;
var record1;
var record2;
var record3;


beforeEach(function(){
  recordCollector = new RecordCollector("Paul", 100)
  recordStore = new RecordStore("Record planet", "Glasgow", 100);
  record1 = new Record("Blur", "Parklife", "Indie", 10);
  record2 = new Record("Oasis", "Whats the story morning glory", "Indie rock", 10);
  record3 = new Record("Blur", "Modern life is rubbish", "Indie", 15);
  let records = [record1, record2, record3];
});

it("record collector has a name", function(){
  assert.strictEqual(recordCollector.name, "Paul")
});

it("record collector has a wallet ", function(){
  assert.strictEqual(recordCollector.wallet, 100)
});

it("record collector has empty collection", function(){
  assert.strictEqual(recordCollector.recordCollection.length, 0)
});

it("record collector buys record", function(){
  recordCollector.BuyRecordForCollection(record1);
  assert.strictEqual(recordCollector.recordCollection.length, 1)
  assert.strictEqual(recordCollector.wallet, 90)
});

it("record collector cant afford record", function(){
  let record = new Record("Gorillaz", "Humanz", "indie rap", 104)
  recordCollector.BuyRecordForCollection(record);
  assert.strictEqual(recordCollector.recordCollection.length, 0)
});

it("record collector gets total value of collection", function(){
  recordCollector.BuyRecordForCollection(record1);
  recordCollector.BuyRecordForCollection(record2);
  recordCollector.BuyRecordForCollection(record3);
  assert.strictEqual(recordCollector.valueOfCollection(), 35)
});

it("record collector gets total value of genre in collection", function(){
  recordCollector.BuyRecordForCollection(record1);
  recordCollector.BuyRecordForCollection(record2);
  recordCollector.BuyRecordForCollection(record3);
  assert.strictEqual(recordCollector.valueOfCollectionByGenre("Indie"), 25)
});

it("record collector finds most valuable record", function(){
  recordCollector.BuyRecordForCollection(record1);
  let record = new Record("Gorillaz", "Humanz", "indie rap", 25)
  recordCollector.BuyRecordForCollection(record);
  recordCollector.BuyRecordForCollection(record2);
  recordCollector.BuyRecordForCollection(record3);
  assert.deepStrictEqual(recordCollector.findMostValuableRecord(), record)
});

it("record collector sorts records asscending", function(){
  recordCollector.BuyRecordForCollection(record1);
  let record = new Record("Gorillaz", "Humanz", "indie rap", 12)
  recordCollector.BuyRecordForCollection(record);
  recordCollector.BuyRecordForCollection(record2);
  recordCollector.BuyRecordForCollection(record3);
  asscendingRecords = [record1, record2, record, record3];
  assert.deepStrictEqual(recordCollector.sortRecords("ascending"), asscendingRecords )
});


it("record collector sorts by descending", function(){
  recordCollector.BuyRecordForCollection(record1);
  let record = new Record("Gorillaz", "Humanz", "indie rap", 12)
  recordCollector.BuyRecordForCollection(record);
  recordCollector.BuyRecordForCollection(record2);
  recordCollector.BuyRecordForCollection(record3);
  descendingRecords = [record3, record, record1, record2];
  assert.deepStrictEqual(recordCollector.sortRecords("descending"), descendingRecords )
});

it("record collector value of records is greater that other collector", function(){
  recordCollector.BuyRecordForCollection(record1);
  recordCollector.BuyRecordForCollection(record2);
  recordCollector.BuyRecordForCollection(record3);
  let recordCollector2 = new RecordCollector("Elaine", 1000);
  let record = new Record("Gorillaz", "Humanz", "indie rap", 12);
  recordCollector2.BuyRecordForCollection(record);
  assert.strictEqual(recordCollector.compareValueWithOtherRecordCollector(recordCollector2), true )
});

it("record collector value of records is less that other collector", function(){
  recordCollector.BuyRecordForCollection(record1);
  let recordCollector2 = new RecordCollector("Elaine", 1000);
  let record = new Record("Gorillaz", "Humanz", "indie rap", 12);
  recordCollector2.BuyRecordForCollection(record);
  assert.strictEqual(recordCollector.compareValueWithOtherRecordCollector(recordCollector2), false )
});
