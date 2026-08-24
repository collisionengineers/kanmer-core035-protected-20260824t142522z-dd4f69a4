export function protectedFixtureValue(input) {
  if (typeof input !== "string") throw new TypeError("input must be a string");
  return `protected:${input}`;
}
