const novel = `
Sherlock Holmes she is always the
woman. I have seldom heard him mention her under any other name. In his
eyes she eclipses and predominates the
whole of her sex. It was not that he felt any emotion akin to love for Irene Adler. All emotions, and
that one particularly, were abhorrent to his cold,
precise but admirably balanced mind. He was, I
take it, the most perfect reasoning and observing
machine that the world has seen, but as a lover he
would have placed himself in a false position. He
never spoke of the softer passions, save with a gibe
and a sneer. They were admirable things for the observer—excellent for drawing the veil from men’s
motives and actions. But for the trained reasoner
to admit such intrusions into his own delicate and
finely adjusted temperament was to introduce a distracting factor which might throw a doubt upon all
his mental results. Grit in a sensitive instrument, or
a crack in one of his own high-power lenses, would
not be more disturbing than a strong emotion in
a nature such as his. And yet there was but one
woman to him, and that woman was the late Irene
Adler, of dubious and questionable memory.
I had seen little of Holmes lately. My marriage
had drifted us away from each other. My own
complete happiness, and the home-centred interests which rise up around the man who first finds
himself master of his own establishment, were sufficient to absorb all my attention, while Holmes,
who loathed every form of society with his whole
Bohemian soul, remained in our lodgings in Baker
Street, buried among his old books, and alternating
from week to week between cocaine and ambition,
the drowsiness of the drug, and the fierce energy of
his own keen nature. He was still, as ever, deeply
attracted by the study of crime, and occupied his
immense faculties and extraordinary powers of observation in following out those clues, and clearing
up those mysteries which had been abandoned as
hopeless by the official police. From time to time
I heard some vague account of his doings: of his
summons to Odessa in the case of the Trepoff murder, of his clearing up of the singular tragedy of
the Atkinson brothers at Trincomalee, and finally
of the mission which he had accomplished so delicately and successfully for the reigning family of
Holland. Beyond these signs of his activity, however, which I merely shared with all the readers of
the daily press, I knew little of my former friend
and companion.
`

const classified = {}
const specialCharacters = '`~!@#$%^&*()-_=+|\<>,.?/:;\'"—’'
const alphabetFrequency = []
const alphabet = []

for(let i = 97; i <= 122; i++){
    alphabet.push(String.fromCharCode(i))
}
for(let i = 0; i < alphabet.length; i++){
    alphabetFrequency.push(0)
}

const splitNovel = novel.split('')


function countAlphabet(letter){
    let index = alphabet.indexOf(letter.toLowerCase())
    return alphabet.includes(letter.toLowerCase()) === true ? alphabetFrequency[index]++
            : false
}
splitNovel.forEach(countAlphabet)

for(let i = 0; i < alphabet.length; i++){
    classified[alphabet[i]] = alphabetFrequency[i]
}



const newArray = {}

const sortable = Object.entries(classified)
    .sort(([, a], [, b]) => b - a)

function reArray(array){
    newArray[array[0]] = array[1]
}    

sortable.forEach(reArray)

console.log(newArray)
// 객체는 순서가 없기 때문에 원하는 대로 정렬하기 어려울 수 있음.

// 구현하기
for(let alphabet in newArray){
    console.log(`${alphabet} : ${newArray[alphabet]}`)
}

