let gameBoard = document.getElementById('gameBoard');
let whosTurn = document.getElementById('turn');

let turn = false;

function setupBoard() {
    for (let dx = 0; dx < 3; dx++) {
        for (let dy = 0; dy < 3; dy++) {
            let gb = document.createElement('div');
            gb.classList.add('game');
            for (let x = 0; x < 3; x++) {
                for (let y = 0; y < 3; y++) {
                    let d = document.createElement('div');
                    d.classList.add('gameTile');
                    d.addEventListener('click', function (e) {
                        if (this.classList.contains('clicked-1') || this.classList.contains('clicked-2')) { return false; }
                        turn = !turn;
                        player = turn ? 1 : 2;
                        this.classList.add(`clicked-${player}`);
                        whosTurn.innerHTML = `Player ${player}'s turn`;
                        this.dataset.clicker = player;
                        checkWin();
                    })
                    gb.appendChild(d);
                }
            }
            gameBoard.appendChild(gb);
        }
    }
}

function checkWin() {
    let games = document.getElementsByClassName('game');
    for (let x = 0; x < games.length; x++) {
        let kids = games[x].childNodes;
        for (let i = 0; i < 3; i++) {
            if (kids[i].dataset.clicker == 1 && kids[i + 3].dataset.clicker == 1 && kids[i + 6].dataset.clicker == 1) {
                games[x].classList.add('win-1');
                games[x].dataset.winner = 1;
                checkGameWin();
            } else if (kids[i].dataset.clicker == 2 && kids[i + 3].dataset.clicker == 2 && kids[i + 6].dataset.clicker == 2) {
                games[x].classList.add('win-2');
                games[x].dataset.winner = 2;
                checkGameWin();
            }

            if (kids[i * 3].dataset.clicker == 1 && kids[i * 3 + 1].dataset.clicker == 1 && kids[i * 3 + 2].dataset.clicker == 1) {
                games[x].classList.add('win-1');
                games[x].dataset.winner = 1;
                checkGameWin();
            } else if (kids[i * 3].dataset.clicker == 2 && kids[i * 3 + 1].dataset.clicker == 2 && kids[i * 3 + 2].dataset.clicker == 2) {
                games[x].classList.add('win-2');
                games[x].dataset.winner = 2;
                checkGameWin();
            }

            if (kids[0].dataset.clicker == 1 && kids[4].dataset.clicker == 1 && kids[8].dataset.clicker == 1) {
                games[x].classList.add('win-1');
                games[x].dataset.winner = 1;
                checkGameWin();
            } else if (kids[0].dataset.clicker == 2 && kids[4].dataset.clicker == 2 && kids[8].dataset.clicker == 2) {
                games[x].classList.add('win-2');
                games[x].dataset.winner = 2;
                checkGameWin();
            }

            if (kids[2].dataset.clicker == 1 && kids[4].dataset.clicker == 1 && kids[6].dataset.clicker == 1) {
                games[x].classList.add('win-1');
                games[x].dataset.winner = 1;
                checkGameWin();
            } else if (kids[2].dataset.clicker == 2 && kids[4].dataset.clicker == 2 && kids[6].dataset.clicker == 2) {
                games[x].classList.add('win-2');
                games[x].dataset.winner = 2;
                checkGameWin();
            }
        }
    }
}

function checkGameWin() {
    let kids = document.getElementsByClassName('game');
    for (let i = 0; i < 3; i++) {
        if (kids[i].dataset.winner == 1 && kids[i + 3].dataset.winner == 1 && kids[i + 6].dataset.winner == 1) {
            gameBoard.classList.add('win-1');
        } else if (kids[i].dataset.winner == 2 && kids[i + 3].dataset.winner == 2 && kids[i + 6].dataset.winner == 2) {
            gameBoard.classList.add('win-2');
        }

        if (kids[i * 3].dataset.winner == 1 && kids[i * 3 + 1].dataset.winner == 1 && kids[i * 3 + 2].dataset.winner == 1) {
            gameBoard.classList.add('win-1');
        } else if (kids[i * 3].dataset.winner == 2 && kids[i * 3 + 1].dataset.winner == 2 && kids[i * 3 + 2].dataset.winner == 2) {
            gameBoard.classList.add('win-2');
        }

        if (kids[0].dataset.winner == 1 && kids[4].dataset.winner == 1 && kids[8].dataset.winner == 1) {
        } else if (kids[0].dataset.winner == 2 && kids[4].dataset.winner == 2 && kids[8].dataset.winner == 2) {
            gameBoard.classList.add('win-2');
        }

        if (kids[2].dataset.winner == 1 && kids[4].dataset.winner == 1 && kids[6].dataset.winner == 1) {
            gameBoard.classList.add('win-1');
        } else if (kids[2].dataset.winner == 2 && kids[4].dataset.winner == 2 && kids[6].dataset.winner == 2) {
            gameBoard.classList.add('win-2');
        }
    }

}

setupBoard();