function findTheDuplicate(nums) {
    for (let i = 0; i < nums.length; i++) {
      if (nums.indexOf(nums[i]) !== i) {
        console.log(nums[i]);
        console.log(i);
        console.log(nums.indexOf(nums[i]));
        return nums[i];
      }
    }
    return null;
  }

// console.log(findTheDuplicate([1,2,3,3,1]));

function sumUpDiagonals(matrix) {
    let diagonalSum = 0;
    const n = matrix.length;
    for (let i = 0; i < n; i++) {
      diagonalSum += matrix[i][i];    
      diagonalSum += matrix[i][n - i - 1]; 
    }
    return diagonalSum;
};

console.log(sumUpDiagonals([
    [1, 2],
    [30, 40],
    ])
)
  