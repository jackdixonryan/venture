const World = require("../src/managers/World/World");
describe("The Coder's Morning", () => {
  let world;
  beforeAll(() => {
    world = new World({
      name: "Coder's Morning",
      description: "All you need to do is complete the program."
    });
  })
  test("I can create the Coder's Morning game world.", () => {
    expect(world).toBeDefined();
    expect(world).toBeInstanceOf(World);
    expect(world.name).toBe("Coder's Morning");
    expect(world.description).toBe("All you need to do is complete the program.");
  });

  test("I can add a global parameter for the exhaustion mechanic.", () => {
    expect(world.globalParameters).toBeDefined();
    world.globalParameters.add({
      name: "exhaustion",
      value: 0
    });
    expect(world.globalParameters.get("exhaustion")).toBeDefined();
    expect(world.globalParameters.get("exhaustion").value).toBe(0);
  });

  test("I can add a global mechanic for the program_complete mechanic.", () => {
    expect(world.globalParameters).toBeDefined();
    world.globalParameters.add({
      name: "program_complete",
      value: false
    });
    expect(world.globalParameters.get("program_complete")).toBeDefined();
    expect(world.globalParameters.get("program_complete").value).toBe(false);
  });

  test("I can add two locations, the kitchen and the office, and I can link them.", () => {
    expect(world.locations).toBeDefined();
    world.locations.add({
      name: "kitchen",
      description: "You are in the kitchen. There is a coffee maker."
    });
    world.locations.add({
      name: "office",
      description: "You are in the office. There is a computer."
    });
    expect(world.locations.get({ name: "office" })).toBeDefined();
    expect(world.locations.get({ name: "kitchen" })).toBeDefined();

    world.locations.link("kitchen", "office");
    expect(world.locations.get({ name: "kitchen" }).adjacentLocations.length).toBe(1);
    expect(world.locations.get({ name: "office" }).adjacentLocations.length).toBe(1);
  });
});