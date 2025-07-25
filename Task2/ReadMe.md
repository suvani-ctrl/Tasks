The time complexity of this code is O(n²) due to the nested for loops. For each element in the array, we iterate through the remaining elements to find a pair that adds up to the target. While this approach works, it's not the most efficient, especially for larger datasets.

To optimize the solution, we can use more efficient data structures such as a Set or a HashMap. These allow us to check for the complement of each element (i.e., target - currentElement) in constant time, reducing the overall time complexity to O(n).



has method


 findingPair tries to find two numbers in the array nums that add up to a target value of 10. It does this via:

    Creating a Set mySet that contains all the numbers in nums.
    This Set allows for quick lookups (O(1) average time complexity) to check if a number exists in the array.

    Looping through each number in nums with an index i.

    For each number nums[i], it calculates the remaining number (remainingNum) needed to reach the target, which is target - nums[i].

    It then checks if the remainingNum exists in the Set mySet by calling mySet.has(remainingNum).

    If it does, it immediately returns the pair [nums[i], remainingNum].