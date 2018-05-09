//十层楼梯只能跨一步或者两步 走到十层有几种方法
let num = 10
let arr = new Array(num + 1)
arr[1] = 1
arr[2] = 2
for (let i = 3; i < arr.length; i++) {
    arr[i] = arr[i - 1] + arr[i - 2]
}
console.log(arr)