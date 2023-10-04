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
  removeElement: function () {
    // TASK LINK
    // https://leetcode.com/problems/remove-element/description/

    const removeElement = function (nums, val) {
      const arr = nums.filter((i) => i !== val);
      nums.unshift(...arr);
      return arr.length;
    };
    return removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
  },
  searchInsert: function () {
    // TASK LINK
    // https://leetcode.com/problems/search-insert-position/description/

    const searchInsert = function (nums, target) {
      const indexOfTarget = nums.indexOf(target);

      if (indexOfTarget !== -1) return indexOfTarget;

      let num = 0;

      for (let i = 0; i < nums.length; ++i) {
        if (nums[0] > target) {
          num = 0;
          break;
        }
        if ((nums[i] < target && nums[i + 1] > target) || !nums[i + 1]) {
          num = ++i;
          break;
        }
      }

      return num;

      // if(nums.includes(target)) return nums.indexOf(target);
      //   else {
      //       nums.push(target);
      //       nums.sort((a,b) => a-b);
      //       return nums.indexOf(target);
      //   }
    };
    return searchInsert([1, 3, 6], 7);
  },
  plusOne: function () {
    // TASK LINK
    // https://leetcode.com/problems/plus-one/description/

    const plusOne = function (digits) {
      let str = BigInt(digits.toString().replace(/,/g, ""));
      return [...(++str).toString()];
    };
    return plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]);
  },
  merge: function () {
    // TASK LINK
    // https://leetcode.com/problems/merge-sorted-array/description/

    const merge = function (nums1, m, nums2, n) {
      const nums = [...nums1.slice(0, m), ...nums2].sort((a, b) => a - b);
      for (let i = 0; i < nums.length; i++) {
        nums1[i] = nums[i];
      }
    };
    return merge([-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [2, 5, 6], 3);
  },
  sortedArrayToBST: function () {
    // I didn't understand, I need to figure it out.(algorithm,recursion)
    // TASK LINK
    // https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/description/

    class TreeNode {
      constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
      }
    }

    const sortedArrayToBST = function (nums) {
      return traverse(nums, 0, nums.length - 1);
    };

    function traverse(nums, start, end) {
      if (start > end) {
        return null;
      }
      let mid = Math.floor((start + end) / 2);
      let root = new TreeNode(nums[mid]);
      root.left = traverse(nums, start, mid - 1);
      root.right = traverse(nums, mid + 1, end);
      return root;
    }
    return sortedArrayToBST([-10, -3, 0, 5, 9]);
  },
  maxProfit: function () {
    // TASK LINK
    // https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

    const maxProfit = function (prices) {
      let minPrice = prices[0];
      let profits = [0];

      for (let i = 1; i < prices.length; i++) {
        minPrice = Math.min(minPrice, prices[i]);
        profits.push(prices[i] - minPrice);
      }
      return Math.max(...profits);
    };
    return maxProfit([7, 6, 5, 4, 1, 5, 3, 6, 4]);
  },
  singleNumber: function () {
    // TASK LINK
    // https://leetcode.com/problems/single-number/description/

    const singleNumber = function (nums) {
      return nums.reduce((a, b) => a ^ b);
    };
    return singleNumber([4, 1, 2, 1, 2]);
  },
  majorityElement: function () {
    // TASK LINK
    // https://leetcode.com/problems/single-number/description/

    const majorityElement = function (nums) {
      const numsMap = new Map();
      for (let i = 0; i < nums.length; i++) {
        if (numsMap.get(nums[i])) {
          numsMap.set(nums[i], numsMap.get(nums[i]) + 1);
          continue;
        }
        numsMap.set(nums[i], 1);
      }

      const searchValue = Math.max(...[...numsMap.values()]);

      for (const [key, value] of numsMap.entries()) {
        if (value === searchValue) {
          return key;
        }
      }
    };
    return majorityElement([2, 2, 1, 1, 1, 2, 2]);
  },

  containsDuplicate: function () {
    // TASK LINK
    // https://leetcode.com/problems/contains-duplicate/description/

    const containsDuplicate = function (nums) {
      return new Set(nums).size !== nums.length;
    };
    return containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]);
  },
  summaryRanges: function () {
    // TASK LINK
    // https://leetcode.com/problems/summary-ranges/description/

    const summaryRanges = function (nums) {
      if (!nums.length) {
        return [];
      }

      let startRange = nums[0];
      let endRange = nums[0];
      let resultArr = [];

      for (let i = 0; i <= nums.length; i++) {
        if (nums[i] === endRange || nums[i] === nums[i - 1] + 1) {
          endRange = nums[i];
        } else {
          let str =
            startRange === endRange
              ? `${endRange}`
              : `${startRange}->${endRange}`;

          resultArr.push(str);

          startRange = nums[i];
          endRange = nums[i];
        }
      }

      return resultArr;
    };

    return summaryRanges([1, 2]);
  },
  missingNumber: function () {
    // TASK LINK
    // https://leetcode.com/problems/missing-number/description/

    const missingNumber = function (nums) {
      return nums.reduce((acc, val, index) => acc ^ val ^ (index + 1), 0);
    };
    return missingNumber([9, 6, 4, 8, 3, 5, 7, 0, 1]);
  },
  moveZeroes: function () {
    // TASK LINK
    // https://leetcode.com/problems/move-zeroes/description/

    const moveZeroes = function (nums) {
      return nums.sort(function (a, b) {
        if (a === 0 && b !== 0) return 1;
        if (a !== 0 && b === 0) return -1;
      });
    };
    return moveZeroes([0, 1, 0, 3, 12]);
  },
  NumArray: function () {
    // TASK LINK
    // https://leetcode.com/problems/range-sum-query-immutable/description/

    var NumArray = function (nums) {
      this.nums = nums;
    };
    NumArray.prototype.sumRange = function (left, right) {
      return this.nums.reduce((acc, item, index) => {
        if (index >= left && index <= right) return (acc += item);
        return acc;
      }, 0);
    };
  },
};

tasks.searchInsert();
