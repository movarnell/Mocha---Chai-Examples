let expect = chai.expect;

let newArray = [1, 2, 4, 5, 6, 7, 8, 9]; // the sum of this array is 42

describe("arraySum Function Tests", () => {
  describe("arraySum", () => {
    it("should return the sum of the array", () => {
      expect(arraySum(newArray)).to.equal(42);
    });
    it("should return a number", () => {
      expect(arraySum(newArray)).to.be.a("number");
    });
  });

  describe("Deck Tests", () => {
    it("should shuffle deck", () => {
      expect(new CreateDeck()).to.not.equal(new CreateDeck());
    });
    it("should return an array", () => {
      expect(new CreateDeck()).to.be.an("array");
    });
    it("should return an array of 52 cards", () => {
      expect(new CreateDeck()).to.have.lengthOf(52);
    });

  it("should have the property suit", () => {
    expect(new CreateDeck()[0]).to.contain.property("suit");
  });
});
});
