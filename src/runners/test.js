const World = require("../managers/World/World");
const world = new World({ name: "The Coder's Morning" });
world.globalParameters.add({ exhaustion: 1 });
world.globalParameters.add({ program_complete: false });
world.locations.add({ name: "Office" });
world.locations.add({ name: "Kitchen" });
world.items.createItem({
  name: "Coffee Mug",
  location: "self",
});
world.items.createItem({
  name: "Coffee Machine",
  location: "Kitchen"
});
