import { sum } from "./calculator";
import { exportAllDeclaration } from "@babel/types";

it("sums two numbers", () => {
  // Arrange
  const a = 2;
  const b = 3;
  // Act
  const total = sum(a, b);

  // Assert
  expect(total).toBe(5);
});
