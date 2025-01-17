const cardArray = [
    {
        name: 'ramen',
        img: 'images/ramen.jpg'
    },
    {
        name: 'sushi',
        img: 'images/sushi.jpg'
    },
    {
        name: 'momo',
        img: 'images/momo.jpg'
    },
    {
        name: 'onionrings',
        img: 'images/onionrings.jpg'
    },
    {
        name: 'wongton',
        img: 'images/wongton.jpg'
    },
    {
        name: 'riceballs',
        img: 'images/rice-balls.jpg'
    },
    {
        name: 'ramen',
        img: 'images/ramen.jpg'
    },
    {
        name: 'sushi',
        img: 'images/sushi.jpg'
    },
    {
        name: 'momo',
        img: 'images/momo.jpg'
    },{
        name: 'onionrings',
        img: 'images/onionrings.jpg'
    },{
        name: 'wongton',
        img: 'images/wongton.jpg'
    },{
        name: 'riceballs',
        img: 'images/rice-balls.jpg'
    }

]
const resultDisplay = document.querySelector('#result')
let cardsChosen = [];
let cardsChosenId = [];
const cardsWon = [];

cardArray.sort(() => 0.5 - Math.random());
const grid = document.querySelector('#grid');
function createBoard(){
    for(let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.jpg')
        card.setAttribute('style', 'width: 200px; height: 200px; margin: 10px; border-radius: 10px; border: 1px solid rgb(230, 230, 230); box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}
createBoard();

function flipCard() {
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    console.log(cardsChosen)
    console.log(cardsChosenId)
    this.setAttribute('src', cardArray[cardId].img);
    if(cardsChosen.length === 2){
        setTimeout(checkForMatch, 500)
    }

}

function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if(optionOneId === optionTwoId){
        cards[optionOneId].setAttribute('src', 'images/blank.jpg')
        cardsChosen = []
        cardsChosenId = []
        return
    }
    if (cardsChosen[0] === cardsChosen[1]) {
        cards[optionOneId].setAttribute('src', 'images/white.jpg')
        cards[optionTwoId].setAttribute('src', 'images/white.jpg') 
        cards[optionOneId].removeEventListener('click', flipCard) 
        cards[optionTwoId].removeEventListener('click', flipCard) 
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.jpg')
        cards[optionTwoId].setAttribute('src', 'images/blank.jpg')
    }
    resultDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenId = []
    if (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all!'
    }
}