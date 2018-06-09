assert = require("assert");
RecordCollector = require("../RecordCollector.js");

var recordCollector;

beforeEach(function(){
  recordCollector = new RecordCollector("Paul", 100)
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
