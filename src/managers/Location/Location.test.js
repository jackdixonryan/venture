const Location = require("./Location");
describe("The Location Class", () => {
  test("The location can be instantiated.", () => {
    const location = new Location();
    expect(location).toBeDefined();
    expect(location).toBeInstanceOf(Location);
  });

  test("The location can be passed a description and a name as options.", () => {
    const location = new Location({ name: "Test Location", description: "A test location." });
    expect(location.name).toBe("Test Location");
    expect(location.description).toBe("A test location.");
  });

  test("The location has a setDescription method which changes the description.", () => {
    const location = new Location();
    expect(location.description).toBe("");
    location.setDescription("A test location.");
    expect(location.description).toBe("A test location.");
  });

  test("The location has a setName method which changes the name.", () => {
    const location = new Location();
    expect(location.name).toBe("");
    location.setName("Test Location");
    expect(location.name).toBe("Test Location");
  });

  test("When instantiated, an ID, items array, and adjacentLocations array are created.", () => {
    const location = new Location();
    expect(location.id).toBeDefined();
    expect(location.items).toBeDefined();
    expect(location.items).toBeInstanceOf(Array);
    expect(location.adjacentLocations).toBeDefined();
    expect(location.adjacentLocations).toBeInstanceOf(Array);
  });

  test("It has a method, addAdjacentLocation, which adds a new location's ID to its adjacentLocations array.", () => {
    const location = new Location();
    expect(location.addAdjacentLocation).toBeDefined();
    expect(location.addAdjacentLocation).toBeInstanceOf(Function);
    const secondLocation = new Location();
    location.addAdjacentLocation(secondLocation.id);
    expect(location.adjacentLocations).toContain(secondLocation.id);
  });
});
