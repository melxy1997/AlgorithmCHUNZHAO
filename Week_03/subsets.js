// 回溯
var subsets = function (nums) {
    const result = [[]];
    nums.sort((a, b) => a - b);
    const recursion = (index, path) => {

        if (path.length === nums.length) {
            return;
        }

        for (let i = index; i < nums.length; i++) {
            path.push(nums[i]);

            result.push(path.concat());
            recursion(i + 1, path);
            path.pop();
        }
    };
    recursion(0, []);

    return result;
};
