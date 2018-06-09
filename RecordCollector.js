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


module.exports = RecordCollector;
