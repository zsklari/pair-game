'use strict';

const cards = document.querySelectorAll('.card')
const cardsFront = document.querySelectorAll('.flip-box-front');
const cardsBack = document.querySelectorAll('.flip-box-back');
const deckOfCards = ['sponge', 'patrick', 'squid', 'crab', 'sandy'];
const doubleDeck = deckOfCards.concat(deckOfCards);

let blockClicks = false;


const cardClick = (ev) => {
    ev.currentTarget.classList.toggle('flipped');
    const flippedCards = document.querySelectorAll('.card.flipped');
    if (flippedCards.length > 1) {
        blockClicks = true;
        const to = setTimeout ()
    }
}

const checkPair = () => {
    const firstCardIcon = document.querySelector('.card.flipped i');
    if (firstCardIcon) {
        const firstIconClass = firstCardIcon.className.split(' ');
        if (document.querySelectorAll())
    }
}