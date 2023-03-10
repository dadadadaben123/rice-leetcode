/**
 * 给你一个含 n 个整数的数组 nums ，其中 nums[i] 在区间 [1, n] 内。请你找出所有在 [1, n] 范围内但没有出现在 nums 中的数字，并以数组的形式返回结果。
    示例 1：
    输入：nums = [4,3,2,7,8,2,3,1]
    输出：[5,6]
    示例 2：
    输入：nums = [1,1]
    输出：[2]
 * @param {number[]} nums
 * @return {number[]}
 */
//通过创建一个对比数组，将对比数组中的和原数组对比，没有的值推入返回数组
var findDisappearedNumbers = function(nums) {
    const numsDiff = new Array(nums.length).fill(0).map((item,index) =>{
        return 1 + index
    })

    const disappearedNums = []

    numsDiff.forEach((item,index) =>{
       const findNumsDiff = nums.find((v,i) => {
           return v===item
       })
       if(!findNumsDiff){
        disappearedNums.push(item)
       }
    })

    return disappearedNums

};

// findDisappearedNumbers([4,3,2,7,8,2,3,1])

//官方解法

var officeFindDisappearedNumbers = function (nums) {
    const n = nums.length

    for(let i = 0; i < n;i++){
        const x =( nums[i] - 1)  % n //取模,因为下一步操作可能加过n
        nums[x] += n //下标的位置都加上n,若是接下来小于n
    }

    const disappearedNums = []

    nums.forEach((item,index) =>{
        if(item < n +1){
            disappearedNums.push(index +1)
        }
    })

    return disappearedNums
    
}

officeFindDisappearedNumbers([4,3,2,7,8,2,3,1])
