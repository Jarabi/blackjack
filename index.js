let firstCard = 10
let secondCard = 7
let hasBlackJack = false
let isAlive = true
let sum = firstCard + secondCard
let message = ''

let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

function startGame() {
  cardsEl.textContent = `Cards: ${firstCard} ${secondCard}`
  sumEl.textContent = `Sum: ${sum}`
  if (sum < 21) {
    message = "Do you want to draw a new card?"
  } else if (sum === 21) {
    message = "You've got Blackjack!"
    hasBlackJack = true
  } else {
    message = "You are out of the game!"
    isAlive = false
  }
  messageEl.textContent = message
}

function newCard() {
  let newCard = 5
  sum += newCard

  startGame()
}