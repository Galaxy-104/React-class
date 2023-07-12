function TestSleepLevel(sleepTime, wakeupTime, wakeupNumber, turnNumber, deltaWave){
    this.sleepTime = sleepTime
    this.wakeupTime = wakeupTime
    this.wakeupNumber = wakeupNumber
    this.turnNumber = turnNumber
    this.deltaWave = deltaWave
}

TestSleepLevel.prototype = {
    get calculate(){
       const sleepLevel =  this.deltaWave / (this.sleepTime * this.wakeupTime * this.wakeupNumber * this.turnNumber)
       return sleepLevel
    }
}

const groupA = []
const groupB = []
const groupC = []

function pickRandomNumber(min, max){
    return Math.floor( Math.random() * (max-min+1) ) + min 
}
function makevalue(group){
    for(let i = group.length; i < 100; i++){
        let tester = new TestSleepLevel(pickRandomNumber(1, 10), pickRandomNumber(1,10), pickRandomNumber(1, 5), pickRandomNumber(1, 10), pickRandomNumber(0, 50))
        group.push(tester)
    }
}

makevalue(groupA)
makevalue(groupB)
makevalue(groupC)

let countA = 0
let countB = 0
let countC = 0



function calculateSleepLevelA(subject){
    if(subject.calculate > 0.37 && subject.calculate < 50)
    countA++
}
groupA.forEach(calculateSleepLevelA)

function calculateSleepLevelB(subject){
    if(subject.calculate > 0.37 && subject.calculate < 50)
    countB++
}
groupB.forEach(calculateSleepLevelB)

function calculateSleepLevelC(subject){
    if(subject.calculate > 0.37 && subject.calculate < 50)
    countC++
}
groupC.forEach(calculateSleepLevelC)


console.log(countA, countB, countC)

/*
group = [
    {sleepTime: ,
     wakeupTime: ,
     wakeupNumber: ,
     turnNumber: ,
     deltaWave: ,},
     ...
] 
이런 식으로 100명의 데이터를 생성해야 하는데..?*/

// 그룹별 100명의 데이터를 생성해야하고
// 그 데이터를 통해 각각의 수면만족도를 구해야함
// 그룹별로 수면만족도가 높은 사람을 찾아서 카운팅