function words(input) {
    let words = input.shift().split(' ')
    let wordsCount = {};

    for (let word of words) {
        wordsCount[word] = 0;
    }

    for (let currentWord of input) {
        if (wordsCount.hasOwnProperty(currentWord)) {
            wordsCount[currentWord]++;
        }
    }

    let sortedWords = Object.entries(wordsCount).sort((a, b) => {
        let [firstWord, firstOccurance] = a;
        let [secondWord, secondOccurance] = b;

        return secondOccurance - firstOccurance;
    });

    for (let [word, occurance] of sortedWords) {
        console.log(`${word} - ${occurance}`)
    }
}
words([
    'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
])