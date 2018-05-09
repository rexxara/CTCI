let minerals = [{ peoplePayment: 0, reward: 0 },
    { peoplePayment: 5, reward: 500 },
    { peoplePayment: 3, reward: 200 },
    { peoplePayment: 4, reward: 300 },
    { peoplePayment: 3, reward: 350 },
    { peoplePayment: 5, reward: 400 }
]
let people = 10
var map = new Array(11)
for (let i = 0; i < 11; i++) {
    map[i] = new Array(6)
}
for (let peopleNum = 0; peopleNum < 11; peopleNum++) {
    for (let mineralNum = 0; mineralNum < 6; mineralNum++) {
        map[peopleNum][mineralNum]=0
    }
}
for (let peopleNum = 1; peopleNum < 11; peopleNum++) {
    for (let mineralNum = 1; mineralNum < 6; mineralNum++) {
        if (mineralNum == 1) {
            if (peopleNum >= minerals[1].peoplePayment) {
                map[peopleNum][mineralNum] = minerals[1].reward
            } else {
                map[peopleNum][mineralNum] = 0
            }
        } else {
            if (peopleNum < minerals[mineralNum].peoplePayment) {
                map[peopleNum][mineralNum] = map[peopleNum][mineralNum - 1]
            } else {
                map[peopleNum][mineralNum] = Math.max(map[peopleNum][mineralNum - 1], (map[peopleNum - minerals[mineralNum].peoplePayment][mineralNum - 1] + minerals[mineralNum].reward))
            }
        }
    }
}
for (let peopleNum = 0; peopleNum < 11; peopleNum++) {
    console.log(map[peopleNum])
}