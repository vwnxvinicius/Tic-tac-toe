const statusJogo = document.querySelector('.status')

let jogoAtivo = true

let jogador = "X"

tabuleiro = ["", "", "", "", "", "", "", "", "",]


const msgVitoria = () => `Jogador: ${jogador} venceu`

const msgEmpate = () => `O jogo empatou`

const jogadorAtivo = () => `Vez do jogador: ${jogador}`

statusJogo.innerHTML = jogadorAtivo()

function preencherTabuleiro(celulaClicada, valorCelula) {
    tabuleiro[valorCelula] = jogador
    celulaClicada.innerHTML = jogador
}

function trocarJogador() {
    jogador = jogador === "X" ? "O" : "X"
    statusJogo.innerHTML = jogadorAtivo()
}
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



function verificarResultado() {
    let partidaGanha = false
    for(let i = 0; i<=7; i++) {
        const posssibilidadeVitoria = condVitoria[i]
        let a = tabuleiro[posssibilidadeVitoria[0]]
        let b = tabuleiro[posssibilidadeVitoria[1]]
        let c = tabuleiro[posssibilidadeVitoria[2]]
        if (a === "" || b === "" || c === "") {
            continue
        }
        if (a === b && b === c) {
            partidaGanha = true
            break
        }
    }
if (partidaGanha) {
    statusJogo.innerHTML = msgVitoria()
    jogoAtivo = false
    return
}
    let empate = !tabuleiro.includes("")
    if (empate) {
        statusJogo.innerHTML = msgEmpate()
        jogoAtivo = false
        return
    }
    trocarJogador()
}

function cliquecell(celulaclicadaEvent) {
    const celulaClicada = celulaclicadaEvent.target
    const valorCelula = Number(celulaClicada.getAttribute('data-cell-index'))
    if (tabuleiro[valorCelula] !== "" || !jogoAtivo) {
        return
    }
    preencherTabuleiro(celulaClicada, valorCelula)
    verificarResultado()
}

function resetar() {
    jogoAtivo = true
    jogador = "X"
    tabuleiro = ["", "", "", "", "", "", "", "", "",]
    statusJogo.innerHTML = jogadorAtivo()
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "")
}

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', cliquecell))
document.querySelector('.resetar').addEventListener('click', resetar)
