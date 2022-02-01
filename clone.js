const statusJogo = document.querySelector('.status')

let jogoAtivo = true

let jogador =  "X"

const condVitoria = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

const msgVitoria = () => `Jogador: ${jogador} venceu`

const msgEmpate = () => `O jogo empatou`

const jogadorAtivo = () => `Vez do jogador: ${jogador}`

statusJogo.innerHTML = jogadorAtivo()

