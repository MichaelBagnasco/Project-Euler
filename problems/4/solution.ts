import { isPalindromicNumber } from "../../lib/palindrome";

function getLargestPalindromeProduct(digits: number): number {
  const palindromeProducts: number[] = [];

  for (let i = Math.pow(10, digits) - 1; i >  Math.pow(10, digits - 1) - 1; i--) {
    for (let j = Math.pow(10, digits) - 1; j >  Math.pow(10, digits - 1) - 1; j--) {
      const product = i * j;
      if (isPalindromicNumber(product)) {
        palindromeProducts.push(product);
      }
    }
  }
  return Math.max(...palindromeProducts);
}

console.log(getLargestPalindromeProduct(3));
