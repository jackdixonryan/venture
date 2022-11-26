const Location = require("../Location/Location");

class LocationManager {
  constructor() {
    this.locations = [];
  }

  add({ name, description }) {
    this.locations.push(new Location({ name, description }));
  }

  get(options) {
    const { id, name } = options;
    if (!id && !name) {
      throw new Error("You must provide either an id or a name.");
    } 

    if (id) {
      return this.locations.find(location => location.id === id);
    } else {
      return this.locations.find(location => location.name === name);
    }
  }

  getAll() {
    return this.locations;
  }

  remove(options) {
    const { id, name } = options;
    if (!id && !name) {
      throw new Error("You must provide either an id or a name.");
    } else {
      if (id) {
        this.locations = this.locations.filter(location => location.id !== id);
      } else {
        this.locations = this.locations.filter(location => location.name !== name);
      }
    }
  }

  update(options) {
    const { id, name, description } = options;
    if (!id && !name) {
      throw new Error("You must provide either an id or a name.");
    } 

    if (!id && !description) {
      throw new Error("You must provide either an id or a description.");
    }

    if (id) {
      this.locations.find(location => location.id === id).setDescription(description);
    } else if (name) {
      this.locations.find(location => location.name === name).setDescription(description);
    }
    return this.get({ name: name, id: id });
  }

  link(firstName, secondName) {
    const firstLocation = this.get({ name: firstName });
    const secondLocation = this.get({ name: secondName });
    firstLocation.addAdjacentLocation(secondLocation.id);
    secondLocation.addAdjacentLocation(firstLocation.id);
  }
}

module.exports = LocationManager;