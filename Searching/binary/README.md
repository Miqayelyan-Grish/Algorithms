# Binary Search

Binary Search is an efficient searching algorithm used to find the index of a target value in a **sorted array**.  
It works by repeatedly dividing the search interval in half, significantly reducing the number of comparisons.

---

## Key Concept

Binary Search follows the **divide and conquer** strategy:

- Compare the target with the middle element
- Eliminate half of the search space each step
- Continue until the element is found or the range is empty

**Requirement:** The data structure **must be sorted**.

---

## How It Works (Conceptually)

1. Select the middle element of the array
2. Compare it with the target value
3. Narrow the search to the left or right half
4. Repeat the process until a result is obtained

---

## Time & Space Complexity

### Time Complexity

| Case        | Complexity |
|------------|------------|
| Best Case  | **O(1)**   |
| Average    | **O(log n)** |
| Worst Case | **O(log n)** |

### Space Complexity

- **Iterative approach:** `O(1)`
- **Recursive approach:** `O(log n)` due to call stack usage

---

## Advantages

- Very fast compared to linear search
- Efficient for large datasets
- Predictable performance

---

## Limitations

- Works only on **sorted** data
- Not suitable for frequently changing data (due to sorting overhead)

---

## Folder Structure

