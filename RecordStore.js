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



module.exports = RecordStore;
