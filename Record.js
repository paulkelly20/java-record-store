var Record = function(artist, title,genre, price){
  this.artist = artist;
  this.genre = genre;
  this.title = title;
  this.price = price;
}

Record.prototype.recordsDetails = function () {
  return ("Artist:" + this.artist + "\nTitle: " + this.title + "\nGenre: " + this.genre + "\nPrice: " + this.price);
};


module.exports = Record;
