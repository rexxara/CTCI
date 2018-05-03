//题目：对于两个字符串，判断它们是否是Anagrams。
function main() {
    let strA='Rimon'
    let strB='MinOR'
    String.prototype.process=function () {
        return this.toLowerCase().split('').sort().join('')
    }
    return strA.process()===strA.process()
}
let res = main();
console.log(res)
