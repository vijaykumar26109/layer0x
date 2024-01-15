import java.util.*;

class Challenge1 {

    // Method to find the maximum subarray sum using Kadane's algorithm
    public static int maxSubArray(int[] nums) {
        // Check for an empty array
        if (nums.length == 0) {
            // Handle the case of an empty array
            return 0;
        }

        // Initialize variables for maximum subarray sum and current subarray sum
        int maxSum = nums[0];
        int currentSum = nums[0];

        // Iterate through the array starting from the second element
        for (int i = 1; i < nums.length; i++) {
            // Calculate the maximum between the current element and the sum of current element and previous subarray sum
            currentSum = Math.max(nums[i], currentSum + nums[i]);

            // Update the maximum subarray sum
            maxSum = Math.max(maxSum, currentSum);
        }

        // Return the maximum subarray sum
        return maxSum;
    }

    // Main method for testing the maxSubArray method
    public static void main(String[] args) {
        // Create a Scanner object for user input
        Scanner scanner = new Scanner(System.in);

        // enter the size of the array
        System.out.print("Enter the size of the array: ");
        int size = scanner.nextInt();

        //array elements
        System.out.println("Enter the array elements:");
        int[] arr = new int[size];
        for (int i = 0; i < size; i++) {
            arr[i] = scanner.nextInt();
        }

        // Close the scanner
        scanner.close();

        // Call maxSubArray method with user-input array and print the result
        System.out.println("Maximum Subarray Sum: " + maxSubArray(arr));
    }
}




// Input: 5
// elements : 1 2 3 4 5
// Expected Output: Maximum Subarray Sum: 15

// Input: 4
// elements : -1 -2 -3 -4
// Expected Output: Maximum Subarray Sum: -1

// Input: 6
// elements : 2 -1 3 -4 2 0
// Expected Output: Maximum Subarray Sum: 4

// Input: 3
// elements : 0 0 0
// Expected Output: Maximum Subarray Sum: 0

// Input: 1
// elements : 7
// Expected Output: Maximum Subarray Sum: 7


