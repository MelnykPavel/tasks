const tasks = {
  findTheDifference: function () {
    // TASK LINK
    // https://leetcode.com/problems/find-the-difference/description/

    const findTheDifference = function (s, t) {
      let sArr = s.split("").sort();
      let tArr = t.split("").sort();
      for (let i = 0; i < tArr.length; i++) {
        if (sArr[i] !== tArr[i]) {
          return tArr[i];
        }
      }
    };

    return findTheDifference("adadadda", "adadaddaa");
  },
  twoSum: function () {
    // TASK LINK
    // https://leetcode.com/problems/two-sum/description/
    const twoSum = function (nums, target) {
      for (let i = 0; i < nums.length; i++) {
        for (let y = i + 1; y < nums.length; y++) {
          if (nums[i] + nums[y] === target) {
            return [i, y];
          }
        }
      }
    };
    return twoSum([2, 5, 5, 11], 10);
  },
  removeDuplicates: function () {
    // TASK LINK
    // https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
    const removeDuplicates = function (nums) {
      const arr = Array.from(new Set(nums));
      nums.unshift(...arr);
      return arr.length;
    };
    return removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
  },
};

tasks.removeDuplicates();
