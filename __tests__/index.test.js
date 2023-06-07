const calculator = require("../");
const resetArgV = () => {
  process.argv = ["/path/to/node", "/path/to/file"];
};

describe("calculator()", () => {
  describe("error handling", () => {
    beforeEach(resetArgV);
    test("should return an error message if no operation is provided", () => {
      const actual = calculator();
      const expected = "No operation provided...";
      expect(actual).toEqual(expected);
    });

    test("should return an error message if no numbers are provided", () => {
      const command = "plus";
      process.argv.push(command);

      const actual = calculator();
      const expected = "No numbers provided...";
      expect(actual).toEqual(expected);
    });

    test("should return an error message if the operation does not match 'plus' or 'minus'", () => {
      const command = "modulo";
      const numbers = ["5", "10"];
      process.argv.push(command, ...numbers);

      const actual = calculator();
      const expected = "Invalid operation: modulo";
      expect(actual).toEqual(expected);
    });
  });

  describe("plus", () => {
    beforeEach(resetArgV);
    test("should add up two numbers", () => {
      const command = "plus";
      const numbers = ["5", "10"];
      process.argv.push(command, ...numbers);

      const actual = calculator();
      const expected = 15;
      expect(actual).toEqual(expected);
    });

    test("should add up multiple numbers", () => {
      const command = "plus";
      const numbers = ["5", "10", "15", "30", "60"];
      process.argv.push(command, ...numbers);

      const actual = calculator();
      const expected = 120;
      expect(actual).toEqual(expected);
    });

    test("should add negative numbers", () => {
      const command = "plus";
      const numbers = ["5", "-10", "15", "30", "-60"];
      process.argv.push(command, ...numbers);

      const actual = calculator();
      const expected = -20;
      expect(actual).toEqual(expected);
    });
  });

  describe("minus", () => {
    beforeEach(resetArgV);
    test("should subtract two numbers", () => {
      const command = "minus";
      const numbers = ["15", "10"];
      process.argv.push(command, ...numbers);

      const actual = calculator();
      const expected = 5;
      expect(actual).toEqual(expected);
    });

    test("should subtract multiple numbers", () => {
      const command = "minus";
      const numbers = ["60", "10", "15", "30", "5"];
      process.argv.push(command, ...numbers);

      const actual = calculator();
      const expected = 0;
      expect(actual).toEqual(expected);
    });

    test("should subtract negative numbers", () => {
      const command = "minus";
      const numbers = ["5", "-10", "15", "30", "-60"];
      process.argv.push(command, ...numbers);

      const actual = calculator();
      const expected = 30;
      expect(actual).toEqual(expected);
    });
  });
});
