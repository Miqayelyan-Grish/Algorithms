## What Are Algorithms?

An **algorithm** is a finite and well-defined sequence of steps designed to solve a problem or perform a computation.  
It takes one or more inputs, processes them through a series of logical operations, and produces an output.

Algorithms are independent of programming languages and can be implemented in any language.

---

## Why Algorithms Are Important

Algorithms are the foundation of computer science.  
They determine:

- Program performance and efficiency
- Memory usage
- Scalability for large inputs
- Reliability and correctness of solutions

A well-chosen algorithm can outperform a poorly chosen one by orders of magnitude.

---

## Algorithm Analysis

### Time Complexity

Time complexity describes how the execution time of an algorithm grows with respect to input size `n`.

Common complexity classes:

- `O(1)` – Constant time
- `O(log n)` – Logarithmic time
- `O(n)` – Linear time
- `O(n log n)` – Linearithmic time
- `O(n²)` – Quadratic time

---

### Space Complexity

Space complexity measures the amount of extra memory used by an algorithm.

- **In-place algorithms** use constant extra space (`O(1)`)
- Recursive algorithms may use additional space due to the call stack

---

## Algorithm Design Paradigms

Algorithms are often categorized by their design approach:

- **Divide and Conquer** – Break a problem into smaller subproblems  
  *(e.g. Merge Sort, Binary Search)*

- **Greedy Algorithms** – Make the locally optimal choice at each step  
  *(e.g. Activity Selection, Huffman Coding)*

- **Dynamic Programming** – Solve overlapping subproblems and store results  
  *(e.g. Fibonacci, Knapsack)*

- **Brute Force** – Try all possible solutions  
  *(used when input size is small)*

---

## Sorting Algorithms

Sorting algorithms rearrange data into a specific order (usually ascending or descending).

Important properties:
- **Stability** – preserves the order of equal elements
- **In-place** – uses constant extra memory

---

## Searching Algorithms

Searching algorithms locate a target value within a data structure.

- **Linear Search** – checks each element sequentially (`O(n)`)
- **Binary Search** – divides the search space in half (`O(log n)`), requires sorted data

---

## Stability in Sorting

A sorting algorithm is **stable** if equal elements maintain their original relative order.

Stability is important when:
- Sorting objects by multiple keys
- Using algorithms like Radix Sort

---

## Key Takeaways

- Algorithms define how efficiently problems are solved
- Time and space complexity are critical for evaluation
- Different problems require different algorithmic strategies
- Understanding algorithms improves problem-solving and code quality
