'use strict';

const cards = document.querySelectorAll('.card')
const cardsFront = document.querySelectorAll('.flip-box-front');
const cardsBack = document.querySelectorAll('.flip-box-back');
const deckOfCards = ['sponge', 'patrick', 'squid', 'crab', 'sandy'];
const doubleDeck = deckOfCards.concat(deckOfCards);