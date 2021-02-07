var search = function(nums, target) {
    // 使用更为泛化条件的二分搜索
    let left = 0
    let right = nums.length-1
    while (left <= right) {
        let mid = Math.floor((left + right)/2)
        if(nums[mid] == target) {
            return mid
        } else if (nums[mid] <= nums[right]) { //正常
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        } else { //异常
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        }
    }
    return -1

};