const rootDiv = document.getElementById('root')

const lyrics = `
Don't, don't worry 'bout \n
Don't worry \n
Don't worry \n
Don't, don't worry 'bout me \n
오지랖 떨지 말고 신경 꺼 \n
온 세상이 날 등져도 I don't give a fuck \n
God is watchin' over me 나 죽을 일 없어 \n
내 걱정은 세상에서 제일 쓸데없는 짓 \n
부정적인 shit, man I ain't got time \n
썸머소닉 to 코첼라, 글라스톤베리가 다음 \n
일상이 축제니까 감사하기도 바빠 \n
Middle finger to the Devil, stop fuckin' up my vibe! \n
영화처럼 살았네 \n
역경이 상대역인데 웃으며 환영해 \n
그 정도는 돼야 내가 인생 연기를 해주잖냐 \n
보여줘야지, 사방이 아역들인데 \n
애들이 배우잖아 \n
내 혼을 베어다가 아낌없이 준 내 아티스트리 \n
다 남을 깎아내릴 때 난 나를 깎아 나눴지 \n
'Cause I am Groot motherfucker \n
Ay mind yo fuckin' business 너는 내 걱정 안 해도 돼 \n
부러우면 그냥 부럽다고 말해도 돼 \n
네가 신경 안 써줘도 나는 잘 지내거든 \n
Don't you worry 'bout me \n
You know I'm fly muthafucka \n
Baby never give a fuck about a thang \n
그게 나에 관한 거라면 더욱더 no thanks \n 
Baby never give a fuck about a thang \n
내 걱정은 no thanks \n
신경써줘서 고마워 \n
아가미 달린 시키 알아서 헤엄 치니 \n
Take care of yourself \n
치킨 다리 먼저 겟할 걱정이나 해 \n
모지리 이미지야 이리 잘하니 zip your lips huh? \n
대장인 척 해도 소화 못해 거기서 쳇기 쳇기 \n
쉬운 게 아니야, 무대는 'bout your 객기 \n
체크해 motherfuckers, my lyrics \n
Motherfucker 만 써도 이젠 혐이라 하는 시대, shit \n
Rhyme에 R도 모르는 대중은 프로듀서가 됐고 \n
농사짓는 울 삼촌은 거의 엔터 제작 대표 \n
조카는 음평가 태도 \n
내가 니 안줏거리지만 내가 느그 상사 느그 선생 아니듯이 \n
느그들이 누굴 평가하고 하면 띠꺼워 \n
내 사생활이 궁금하면 니가 내 엄마해 새꺄 알겠어? \n
Ay mind yo fuckin' business 너는 내 걱정 안 해도 돼 \n
부러우면 그냥 부럽다고 말해도 돼 \n
네가 신경 안 써줘도 나는 잘 지내거든 \n
Don't you worry 'bout me \n
You know I'm fly muthafucka \n
Baby never give a fuck about a thang \n
그게 나에 관한 거라면 더욱더 no thanks \n
Baby never give a fuck about a thang \n
내 걱정은 no thanks, ya \n
경쟁은 관심 밖, 돌린 눈과 귀 \n
틈만 나면 찾고 있네, 다음 휴가지 \n
나이 들어 보니까 인생은 주관식 \n
남 보기보다 중요해, 내 삶이 둔 가치 \n
고이 무렵부터 내 갈 길을 걸어 \n
나도 안 한 내 걱정을 해준 분들 여럿 \n
덕분에 내 할 일에만 매진한 결과 \n
난 이제 돈과 시간 모두 몇 배를 더 벌어 \n
너 할 일 해, 시간이 돈인데 \n
다 먹고 살만한가 봐? 두 손 놀리네 \n
날 한 방 먹일 생각이면 좀 더 고민해 \n
대식가인 내겐 먹어봐야 겨우 요기인데 \n
난 물먹어도 절망 안에 배영 \n
잠수타도 14년째 곡이 배를 채워 \n
불통보다 소통이 더 유행이니까 \n
다 들어 줄게, 불만 있는 놈들 먼저 줄부터 세워 (걱정하지 말아요) \n
야야 난 first class 양아치에 third class 연예인 \n
내 Hollywood style 연애는 엄마의 스트레스 원인 \n
삶은 계속되는 이별여행, 쉴틈없이 나는 꺼내 \n
이번 애인은 의사였으면 해, 정신병원에 \n
틈만 나면 한 눈 팔아, 나는 오급 장애죠 \n
나의 불행은 너의 행복, 그래 맘껏 즐겨줘 \n
망막 기증까진 오바야, 날 그만 걱정해줘 \n
나는 저 멀리 보고 살아, 한쪽으로도 \n
힙합씬은 여전히 내겐 오백의 삼십 사이즈 \n
내 영혼이 살기엔 너무 좆만해서 탄식 하 \n
나는 오로지 나의 존망만이 관심사 \n
욕을 존나 쳐먹어도 찌지 않아, 망신살 \n
"출근 안하는 CEO", "허슬 안하는 랩퍼" \n
"내 거품 속에서 목욕하는 그녀들은 왜 예뻐?" \n
성실한 이름들 사이에 이제 나는 못 껴 \n
난 시간에 쫒겨 살해당한 내 시체를 자주 목격 \n
앨범은 내 때가 되면 내, 비난은 발매가 되면 해 \n
기다려주는 팬들에게 미안해 기분 개같았는데 \n
돈도 좆도 안되는 대체 왜 너네가 negative? \n
니 오빠 똥꼬나 더 긁어줘라 fuck your magnetic \n
백날 씨부려대봤자 내 입만 아픔 \n
에픽 앨범에 난 똥을 싸질러놨구 \n
이건 내가 예전에 깠던 Born Hater Part 2 \n
일동 기립 박수 안 칠거면 내 얼굴에 칵 투 \n
Ay mind yo fuckin' business 너는 내 걱정 안 해도 돼 \n
부러우면 그냥 부럽다고 말해도 돼 \n
네가 신경 안 써줘도 나는 잘 지내거든 \n
Don't you worry 'bout me \n
You know I'm fly muthafucka \n
Baby never give a fuck about a thang \n
그게 나에 관한 거라면 더욱더 no thanks \n
Baby never give a fuck about a thang \n
내 걱정은 no thanks \n
You get one life \n
나한테 낭비하지 마라 \n
Can I live my life? \n
Let me live it how I wanna \n
내 걱정은 no thanks (내 걱정은 no thanks) \n
내 걱정은 no thanks (내 걱정은 no thanks) \n
내 걱정은 no thanks (thank you) \n
I am
`

// 구현하기
const word1 = 'shit'
const word2 = 'fuck'

function changeLyrics(word){
    return    word.includes(word1) ? `💩`
            : word.includes(word2) ? `❤️` 
            : word
 
}

const modifiedSentence = lyrics.split(' ')
                         .map(changeLyrics)
                         .join(' ')

rootDiv.innerHTML = modifiedSentence