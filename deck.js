const BASE_API_URL = "http://deckofcardsapi.com/api/deck";

//1
$.getJSON(`${BASE_API_URL}/new/shuffle`).then(data => {
    const deckID = data.deck_id;
    return $.getJSON(`${BASE_API_URL}/${deckID}/draw/`);
}).then(card => {
    let value = card.cards[0].value;
    let suit = card.cards[0].suit;
    console.log(`${value} OF ${suit}`);
});

//2
let firstCard = null;
$.getJSON(`${BASE_API_URL}/new/draw`).then(data => {
    firstCard = data.cards[0];
    let deckID = data.deck_id;
    return $.getJSON(`${BASE_API_URL}/${deckID}/draw`);
}).then(data => {
    let secondCard = data.cards[0];
    console.log(`First Card: ${firstCard.value} OF ${firstCard.suit}. Second Card: ${secondCard.value} OF ${secondCard.suit}.`);
});

//3
$('button').on('click', function () {
    $.getJSON(`${BASE_API_URL}/new/draw`).then(data => {
        let cardImg = data.cards[0].image;
        let cardValue = data.cards[0].value;
        let cardSuit = data.cards[0].suit;
        $('#card-area').append($('<img>', {
            src: cardImg,
            alt: `${cardValue}-OF-${cardSuit}`
        }));
    });
});