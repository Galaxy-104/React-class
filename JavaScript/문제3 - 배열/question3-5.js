const words = [
    'abc',
    'animal',
    'fruit',
    'abba',
    'abcba',
    'location',
    'radar',
    'madam',
    'mario',
    'level'
]

function inA(word, index){
    const a = word.includes('a')
    if(a === true) console.log(word)
}

words.forEach(inA)