# Table of Contents

1. [Linear Search](#linear-search)
2. [Jump Search](#jump-search)
3. [Binary Search](#binary-search)

# Searching Slgorithms

## Linear Search

Linear search is a searching algorithm that sequentially checks each element in a list until the desired element is found or the sequence ends.

### Time Complexity

-   **Best Case:** **O(1)** (Element found at the beginning)
-   **Worst Case:** **O(n)** (Element at the end or not present)

## Jump Search

Jump Search is a searching searching algorithm that works on **sorted** arrays. It reduces the number of comparisons by jumping ahead in fixed steps instead of checking elements one by one.

### Time Complexity

-   **Best Case:** O(1) (First element is the target)
-   **Worst Case:** O(sqrt{n})

## Binary Search

Binary search is a searching algorithm that find the desiired element in a **sorted** sequence by repeatedly dividing the search interval in half until the target is found or the interval is empty.

### Time Complexity

-   **Best Case:** **O(1)** (Element is in the middle)
-   **Worst Case:** **O(log n)** (Element at the end or not present)
