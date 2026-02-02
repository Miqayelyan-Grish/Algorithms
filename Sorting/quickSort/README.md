Description

Quick Sort is a classic divide and conquer sorting algorithm.
It selects a pivot element, partitions the array around the pivot, and recursively sorts the resulting subarrays.

Quick Sort is not stable but works very efficiently in practice on large datasets.

How It Works

Select a pivot element.

Partition the array into elements smaller and greater than the pivot.

Recursively sort the left partition.

Recursively sort the right partition.

Repeat until the entire array is sorted.

Time & Space Complexity
Case	Time Complexity	Space Complexity	Stable?
Best Case	O(n log n)	O(log n)	No
Average	O(n log n)	O(log n)	No
Worst Case	O(n²)	O(n)	No

Explanation:

Time Complexity:

Quick Sort uses a divide-and-conquer approach:

Partitions the array around a pivot

Balanced partitions → log n levels

Partitioning work → O(n) per level

Best and average cases: O(n log n)

Worst case: O(n²) when partitions are highly unbalanced

Space Complexity:

O(log n) space from recursive calls in the average case

O(n) space in the worst case due to deep recursion

Quick Sort is usually in-place

Stable: No, equal elements may change their relative order

Adaptive: No, performance does not improve for nearly sorted arrays
