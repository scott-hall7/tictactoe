// 1. Take Gameboard squares and create array out of them.
const Gameboard = (() => {
    let gameBoard = ["","","","","","","","",""];
    const startGameBoard = ["","","","","","","","",""];

    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    const square = document.querySelectorAll(".square")
    //Displays square elements to page.
    function displayArray(){
        for (let i = 0; i < square.length; i++) {
            square[i].innerHTML = gameBoard[i];
        }  
    }

    //Change player.
    let currentPlayer = 'X';
    let playerStatus = document.getElementById("playerstatus")
    function changePlayer() {
        if (currentPlayer == 'X')   {
            currentPlayer = 'O';
            playerStatus.innerHTML = "Player O's Turn";
        } else if (currentPlayer == 'O'){
            currentPlayer = 'X';
            playerStatus.innerHTML = "Player X's Turn";
        } else currentPlayer = 'X'
    };


    //Click square to place a move.
    square.forEach(square =>    {
        square.addEventListener('click', () =>  {
            //Checks to make sure square is blank so player can not play in square with move in it.
                if (gameBoard[square.id] == "") {
                    gameBoard.splice(square.id, 1, currentPlayer);
                    displayArray();
                    checkWinner();
                    changePlayer();
                } else return;
        })
    })

    function checkWinner() {
        winningCombinations.forEach((item) => { 
            if (gameBoard[item[0]] === currentPlayer && gameBoard[item[1]] === currentPlayer && gameBoard[item[2]] === currentPlayer) {
                endGame();
            } else return;
        }) 
    }

    function endGame()  {
        playerStatus.innerHTML = "Player " + currentPlayer + " Wins!";
        playerStatus.style.fontSize = 'x-large';
        currentPlayer = "winner";
        document.getElementById('gameboard').classList.add("disablegameboard");
    }


    //When clicked, set currentPlayer to X, set 
    const resetButton = document.getElementById("resetbutton")
    resetButton.addEventListener('click', () => { 
        window.location.reload();
    })
})();


