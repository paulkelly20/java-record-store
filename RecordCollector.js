var RecordCollector = function(name, wallet){
  this.name = name;
  this.wallet = wallet;
  this.recordCollection = [];
};

RecordCollector.prototype.BuyRecordForCollection = function (record) {
  if(this.wallet > record.price){
    this.recordCollection.push(record);
    this.wallet -= record.price;
  };
};

RecordCollector.prototype.valueOfCollection = function () {
  return valueOfCollection = this.recordCollection.reduce(function(accumulator, record){
    return accumulator + record.price;
  }, 0);
};

RecordCollector.prototype.valueOfCollectionByGenre = function (genre) {
  return valueOfCollection = this.recordCollection.filter(record => record.genre === genre).reduce(function(accumulator, record){
    return accumulator + record.price;
  }, 0);
};

RecordCollector.prototype.findMostValuableRecord = function () {
return mvr  = this.recordCollection.reduce((a, b) => (a.price > b.price) ? a : b)};

RecordCollector.prototype.sortRecords = function (sortOrder) {
  if(sortOrder === "ascending"){
    var sortedRecords = this.recordCollection.sort(function (a, b) {
    return a.price - b.price;
  });return sortedRecords;
  };
  if(sortOrder === "descending"){
    var sortedRecords = this.recordCollection.sort(function (a, b) {
    return b.price - a.price;
  });;return sortedRecords;
  };
};


module.exports = RecordCollector;
