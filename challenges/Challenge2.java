import java.util.*;

public class Challenge2 {

    // Method to find the longest palindromic substring using dynamic programming
    public static String longestPalindrome(String s) {
        int n = s.length();
        String res = "";
        boolean dp[][] = new boolean[n][n];
        int max = 0;

        // Iterate through different substring lengths
        for (int diff = 0; diff < n; diff++) {
            for (int i = 0, j = diff; j < n; i++, j++) {
                // Check for palindromes based on the substring length
                if (diff == 0) {
                    dp[i][j] = true;  // Single characters are palindromes
                } else if (diff == 1) {
                    if (s.charAt(i) == s.charAt(j)) {
                        dp[i][j] = true;  // Two-character substrings
                    }
                } else {
                    if (s.charAt(i) == s.charAt(j) && dp[i + 1][j - 1]) {
                        dp[i][j] = true;  // Longer substrings based on inner palindrome status
                    }
                }

                // Update the result if a longer palindrome is found
                if (dp[i][j]) {
                    if (j - i + 1 > max) {
                        max = j - i + 1;
                        res = s.substring(i, j + 1);
                    }
                }
            }
        }

        return res;
    }

    public static void main(String[] args) {
        // User input section
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a string: ");
        String inputString = scanner.nextLine();

        // Call longestPalindrome method with user-input string and print the result
        String result = longestPalindrome(inputString);
        System.out.println("Longest Palindromic Substring: " + result);

        // Close the scanner
        scanner.close();
    }
}


// Input: babad
// Output: Longest Palindromic Substring: bab

// Input: cbbd
// Output: Longest Palindromic Substring: bb

// Input: racecar
// Output: Longest Palindromic Substring: racecar

// Input: abcdefg
// Output: Longest Palindromic Substring: a

// Input: abba
// Output: Longest Palindromic Substring: abba
