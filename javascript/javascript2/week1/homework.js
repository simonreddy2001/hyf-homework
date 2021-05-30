const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];

function shortestWord(words){
    let res 
for(let i=0;i<words.length;i++){
    for(let j=0;j<words.length;j++){
        if(i!=j){
        if( words[i].length<words[j].length){
            res = words[i]
        }
        else{
            res =words[j]
        }}
    }
    
}
return res;


}
shortestWord(danishWords);
danishWords.reduce((curWord,nextWord) => curWord.length<nextWord.length? curWord : nextWord)

const danishString = "Jeg har en blå bil";
findDanishLetters(danishString); // returns {total: 1, å: 1}

const danishString2 = "Blå grød med røde bær";
findDanishLetters(danishString2); // returns {total: 4, æ: 1, ø: 2, å: 1}

function findDanishLetters(text){
    textArray=text.split('')
    let countæ = 0
    let countå = 0 
    let countø = 0
    textArray.forEach(element => {
        
        switch (element){
            case 'å': countå++;
            break;
            case 'æ': countæ++;
            break;
            case 'ø': countø++;
            break;
        }
    });
    return `{total: ${countå+countæ+countø}, æ: ${countæ}, ø: ${countø}, å: ${countå}}`
}