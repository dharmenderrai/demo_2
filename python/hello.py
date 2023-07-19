from typing import List


def countWords(word, letter):
    count = 0
    for elem in word:
        if elem == letter:
            count += 1
    return count


def find_the_duplicate(nums: List[int]):
    for num in nums:
        if nums.count(num) > 1:
            return num
    return None


def sum_up_diagonals(matrix):
    diagonal_sum = 0
    n = len(matrix)
    for i in range(n):
        diagonal_sum += matrix[i][i]
        diagonal_sum += matrix[i][n-i-1]
    return diagonal_sum


def main():
    # word = "Hello"
    # letter = 'l'
    # print(countWords(word, letter))
    print(sum_up_diagonals([
        [1, 2],
        [30, 40],
        ])
    )


if __name__ == "__main__":
    main()
