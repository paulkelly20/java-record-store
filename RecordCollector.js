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



module.exports = RecordCollector;
