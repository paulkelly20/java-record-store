var RecordStore = function(name, city, balance){
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = balance;
}

RecordStore.prototype.buyRecordForInventory = function (record) {
  if(this.balance >= record.price){
  this.inventory.push(record);
  this.balance -= record.price;}
};

RecordStore.prototype.listAllRecordsSortingByArtist = function () {
  var sortedRecords = this.inventory.sort(function (a, b) {
  return ((a.artist < b.artist) ? -1 : ((a.artist > b.artist) ? 1 : 0));
  });return sortedRecords;
};

RecordStore.prototype.sell = function (recordToSell) {
  var indexOfRecord = this.inventory.findIndex(record => record === recordToSell);
  this.inventory.splice(indexOfRecord, 1);
  let sellPrice = recordToSell.price * 1.5;
  this.balance += sellPrice;
};

RecordStore.prototype.stockValue = function () {
    return  stockValue = this.inventory.reduce(function(accumulator, record){
      return accumulator + record.price;
    }, 0);
};

RecordStore.prototype.finances = function () {
  return finances = this.stockValue() + this.balance;
};

RecordStore.prototype.findByGenre = function (genre) {
  return recordsBelongingToAGenre = this.inventory.filter(record => record.genre === genre);
};



module.exports = RecordStore;
