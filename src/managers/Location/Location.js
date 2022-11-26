const crypto = require("crypto");

class Location {
  constructor(options) {
    this.id = crypto.randomUUID();
    this.name = options?.name || "";
    this.description = options?.description || "";
    this.items = [];
    this.adjacentLocations = [];
  }

  setDescription(description) {
    this.description = description;
  }

  setName(name) {
    this.name = name;
  }

  addAdjacentLocation(locationId) {
    this.adjacentLocations.push(locationId);
  }
}

module.exports = Location;
