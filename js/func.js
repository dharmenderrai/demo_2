my_str = "hello World";
my_letter = "Z";

function countLettersInWord (word, letter) {
    let count = 0;
    for(const elem of word) {
        if (elem === letter) {
            count++;
        }
    }
    return count;
}

console.log(countLettersInWord(my_str, my_letter));