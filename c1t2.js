//题目：反转一个字符串。
process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if (chunk !== null) {
        if (chunk.length === 2) {
            process.stdout.write('end');
            process.stdin.end()
        } else {
            let res = main(chunk.slice(0, chunk.length - 2))
            console.log(res)
        }
    }
});

function main(data) {
    let arrayData = data.split("")
    let iteratorTime = Math.floor(arrayData.length / 2)
    let arrayDataLength = arrayData.length
    for (let i = 0; i < iteratorTime; i++) {
        let temp = arrayData[i]
        arrayData[i] = arrayData[arrayDataLength - i]
        arrayData[arrayDataLength - i] = temp
    }
    return arrayData.join('')
}