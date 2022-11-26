const GlobalParameters = require("./GlobalParameters");
const LocationManager = require("./LocationManager");

class World {
  constructor(options = {}) {
    this.name = options.name || "";
    this.description = options.description || "";
    this.globalParameters = new GlobalParameters();
    this.locations = new LocationManager();
  }

  setDescription(description) {
    this.description = description;
  }

  setName(name) {
    this.name = name;
  }
}

module.exports = World;
