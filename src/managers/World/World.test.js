const World = require("./World");

describe("The World", () => { 
  test("The world can be instantiated.", () => {
    const world = new World();
    expect(world).toBeDefined();
    expect(world).toBeInstanceOf(World);
  });

  test("The world can be passed a description and a name as options.", () => {
    const world = new World({ name: "Test World", description: "A test world." });
    expect(world.name).toBe("Test World");
    expect(world.description).toBe("A test world.");
  });

  test("The world has a setDescription method which changes the description.", () => {
    const world = new World();
    expect(world.description).toBe("");
    world.setDescription("A test world.");
    expect(world.description).toBe("A test world.");
  });

  test("The world has a setName method which changes the name.", () => {
    const world = new World();
    expect(world.name).toBe("");
    world.setName("Test World");
    expect(world.name).toBe("Test World");
  });

  test("When instantiated, the world has a globalParameters property.", () => {
    const world = new World();
    expect(world.globalParameters).toBeDefined();
  });

  test("The globalParameters property has a method, addGlobalParameter.", () => {
    const world = new World();
    expect(world.globalParameters.add).toBeDefined();
    expect(world.globalParameters.add).toBeInstanceOf(Function);
  });

  test("The globalParameters property has a method, getGlobalParameter.", () => {
    const world = new World();
    expect(world.globalParameters.get).toBeDefined();
    expect(world.globalParameters.get).toBeInstanceOf(Function);
  });

  test("The globalParameters property has a method, getAllGlobalParameters.", () => {
    const world = new World();
    expect(world.globalParameters.getAll).toBeDefined();
    expect(world.globalParameters.getAll).toBeInstanceOf(Function);
  });

  test("The globalParameters property has a method, removeGlobalParameter.", () => {
    const world = new World();
    expect(world.globalParameters.remove).toBeDefined();
    expect(world.globalParameters.remove).toBeInstanceOf(Function);
  });

  test("The globalParameters property has a method, updateGlobalParameter.", () => {
    const world = new World();
    expect(world.globalParameters.update).toBeDefined();
    expect(world.globalParameters.update).toBeInstanceOf(Function);
  });

  test("You can create a global parameter with any object.", () => {
    const world = new World();
    world.globalParameters.add({ name: "test", value: 1 });
    expect(world.globalParameters.get("test").value).toBe(1);
  });

  test("You can update global parameters with a value of the same type.", () => {
    const world = new World();
    world.globalParameters.add({ name: "test", value: 1 });
    world.globalParameters.update("test", 2);
    expect(world.globalParameters.get("test").value).toBe(2);
  });

  test("You receive an error if you try to retype a global parameter.", () => {
    const world = new World();
    world.globalParameters.add({ name: "test", value: 1 });
    expect(() => {
      world.globalParameters.update("test", "2");
    }).toThrow();
  });

  test("You can remove global parameters.", () => {
    const world = new World();
    world.globalParameters.add({ name: "test", value: 1 });
    world.globalParameters.remove("test");
    expect(world.globalParameters.get("test")).toBeUndefined();
  });
});