class PalindromeChecker {
  isAPalindrome(word: string): boolean {
    const reversedWord = word.split('').reverse().join('');
    return (
      reversedWord.toLowerCase().replace(/[^0-9a-z]/gi, '') ===
      word.toLowerCase().replace(/[^0-9a-z]/gi, '')
    ); // true or false
  }
}

describe('Palindrome checker', () => {
  // Arrange
  const palindromeChecker = new PalindromeChecker();

  it('should be able to tell that "mom" is a palindrome', () => {
    // Act
    const result = palindromeChecker.isAPalindrome('mom');

    // Assert
    expect(result).toBeTruthy();
  });

  it('should be able to tell that "bill" is not a palindrome', () => {
    // Act
    const result = palindromeChecker.isAPalindrome('bill');

    // Assert
    expect(result).toBeFalsy();
  });

  it('should be able to tell that "zoo" is not a palindrome', () => {
    // Act
    const result = palindromeChecker.isAPalindrome('zoo');

    // Assert
    expect(result).toBeFalsy();
  });

  it('should still detech a palindrome even if the casing is off', () => {
    // Act
    const result = palindromeChecker.isAPalindrome('Mom');

    // Assert
    expect(result).toBeTruthy();
  });

  it('should be able to tell that "Was It A Rat I Saw" is a palindrome', () => {
    // Act
    const result = palindromeChecker.isAPalindrome('Was It A Rat I Saw');

    // Assert
    expect(result).toBeTruthy();
  });

  it('should be able to tell that "Never Odd or Even" is a palindrome', () => {
    // Act
    const result = palindromeChecker.isAPalindrome('Never Odd or Even');

    // Assert
    expect(result).toBeTruthy();
  });
});
