
class Action {
  constructor(options) {
    this.displayText = options.displayText;
    this.requirements = options.requirements;
    this.flavor = options.flavor;
    this.outcomes = options.outcomes;
  } 

  setDisplayText(displayText) {
    this.displayText = displayText;
  }

  // hmmm....
  setRequirements(requirements) {
    this.requirements = requirements;
  }

  setFlavor(flavor) {
    this.flavor = flavor;
  }

  // outcomes.... 
}