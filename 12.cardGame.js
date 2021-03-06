function cards(input) {
    let cardsPowers = {
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
        'J': 11,
        'D': 12,
        'K': 13,
        'A': 14
    };
    let cardsTypes = {
        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1
    };
    let players = {};

    for (let line of input) {
        let [name, cards] = line.split(': ');
        cards = cards.split(', ')
        let unigueCards = new Set(cards)
        console.log(unigueCards);
    }
}
cards([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
])