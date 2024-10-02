export default class Place {
  constructor(id, title, address, location, imageUrl) {
    this.id = id;
    this.title = title;
    this.address = address;
    this.location = location; // {lat: 1.00986, long: 1.3455633}
    this.imageUrl = imageUrl;
  }
}
