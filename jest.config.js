module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>/src"],
  testMatch: ["**/tests/**/*.ts"],
  moduleFileExtensions: ["ts", "js", "json", "node"],
};
