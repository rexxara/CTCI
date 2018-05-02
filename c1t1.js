//题目：给定一个字符串，判断其中是否有重复字母。
process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if (chunk !== null) {
        if (chunk.length === 2) {
            process.stdout.write('end');
            process.stdin.end()
        } else {
            main(chunk.slice(0, chunk.length - 2))
        }
    }
});

function main(data) {
    var arrayData = data.split("")
    for (let i = 0; i < arrayData.length; i++) {
        if (data.indexOf(arrayData[i]) !== i) {
            console.log('is not unique')
            return false
        }
    }
}