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
    let res=data.replace(function(v,k) {
        console.log(v,k)
        return v
    },'%20')
    return res
}