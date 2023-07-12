const hairColors = ['black', 'brown', 'yellow', 'white', 'gold']
const hairTypes = ['curly', 'straight', 'wavy', 'coily']
const glasses = [true, false]
const heights = [150, 160, 170, 180, 190, 200]
const weights = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]

function Person(hairColor, hairType, glasses, height, weight){
    this.hairColor = hairColor
    this.hairType = hairType
    this.glasses = glasses
    this.height = height
    this.weight = weight
}

const userGroup = []

function pickRandomNumber(max){
    return Math.floor( Math.random() * (max) )
}

for(let i = userGroup.length; i < 10000; i++){
    let user = new Person(hairColors[pickRandomNumber(hairColors.length)], hairTypes[pickRandomNumber(hairTypes.length)], glasses[pickRandomNumber(glasses.length)], heights[pickRandomNumber(heights.length)], weights[pickRandomNumber(weights.length)])
    userGroup.push(user)
}

const hairColorsCount = []
const hairTypesCount = []
const glassesCount = []
const heightsCount = []
const weightsCount = []


for(let i = 0; i < hairColors.length; i++){
    hairColorsCount.push(0)
}
for(let i = 0; i < hairTypes.length; i++){
    hairTypesCount.push(0)
}
for(let i = 0; i < glasses.length; i++){
    glassesCount.push(0)
}
for(let i = 0; i < weights.length; i++){
    weightsCount.push(0)
}
for(let i = 0; i < heights.length; i++){
    heightsCount.push(0)
}


function countUsers(user){
    let hairColorsIndex = hairColors.indexOf(user.hairColor)
    let hairTypesIndex = hairTypes.indexOf(user.hairType)
    let glassesIndex = glasses.indexOf(user.glasses)
    let weightsIndex = weights.indexOf(user.weight)
    let heightsIndex = heights.indexOf(user.height)
    
    hairColorsCount[hairColorsIndex]++
    hairTypesCount[hairTypesIndex]++
    glassesCount[glassesIndex]++
    weightsCount[weightsIndex]++
    heightsCount[heightsIndex]++
}

userGroup.forEach(countUsers)

function TypesCount(type, number){
    this.type = type
    this.number = number
}

const totalCounts = {}

for(let i = 0; i < hairColors.length; i++){
    totalCounts[hairColors[i]] = hairColorsCount[i]
}
for(let i = 0; i < hairTypes.length; i++){
    totalCounts[hairTypes[i]] = hairTypesCount[i]
}

totalCounts['put on glasses'] = glassesCount[0]
totalCounts['no glasses'] = glassesCount[1]

for(let i = 0; i < weights.length; i++){
    totalCounts[weights[i]+'kg'] = weightsCount[i]
}
for(let i = 0; i < heights.length; i++){
    totalCounts[heights[i]+'cm'] = heightsCount[i]
}

console.log(totalCounts)