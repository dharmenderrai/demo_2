var word = "HEllo World"

function countVowel(str) {
    var mystr = str.toLowerCase()
    let vowels = "aeiou";
    var count = 0;
    for (let i = 0; i < mystr.length; ++i) {
        if (mystr[i] === vowels[0] || mystr[i] === vowels[1]
            || mystr[i] === vowels[2] || mystr[i] === vowels[3]
            || mystr[i] === vowels[4]) {
            count = count + 1;
        }        
    }
    return count;
}

console.log(countVowel(word));
