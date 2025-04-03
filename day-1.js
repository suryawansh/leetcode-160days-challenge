var maximumTripletValue = function () {
  let nums = [8, 4, 6, 7, 8];

  let maxVal = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const value = (nums[i] - nums[j]) * nums[k];
        maxVal = Math.max(value, maxVal);
        console.log(maxVal);
      }
    }
  }
  return maxVal;
};

maximumTripletValue();
