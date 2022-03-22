function add(a: number, b: number) {
  return a + b;
}

describe('My add function', () => {
  // Arrange
  const testCases = [
    { a: 1, b: 2, expected: 3 },
    { a: 1, b: 0, expected: 1 },
    { a: 0, b: 0, expected: 0 },
  ];
  test.each(testCases)(
    'Add $a + $b, should be $expected',
    ({ a, b, expected }) => {
      // Act
      const result = add(a, b);

      // Assert
      expect(result).toBe(expected);
    },
  );
});
