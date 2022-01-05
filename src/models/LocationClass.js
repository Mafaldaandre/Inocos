class Coordinates {
    constructor(lat, lng) {
        this.lat = lat;
        this.lng = lng;
    }
}

export default class Location {
    constructor(id, name, address, position, image ) {
      this.id = id;
      this.name = name;
      this.address = address;
      this.position = new Coordinates(position);
      this.image = image;
      
    }
  }