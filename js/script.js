function playGame(playerInput){

    clearMessages();


    function getMoveName(argMoveId){
        if(argMoveId == 1){
            return 'kamień';
    }
        if(argMoveId == 2){
            return 'papier';
    }
        if(argMoveId == 3){
            return 'nożyce';
    }
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
  }

    let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

    let argComputerMove = getMoveName (randomNumber);

 /*if (randomNumber == 1){
  computerMove = 'kamień';}
} else if (randomNumber == 2){
    computerMove = 'papier';
  } else if (randomNumber == 3){
    computerMove = 'nożyce';
  }
    let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.'); */

console.log('Gracz wpisał: ' + playerInput);

    let argPlayerMove = getMoveName (playerInput);

/* if (playerInput == '1'){
  playerMove = 'kamień';
} else if (playerInput == '2'){
    playerMove = 'papier';
  } else if (playerInput == '3'){
    playerMove = 'nożyce';
}

if (computerMove == 'kamień' && playerMove == 'papier'){
    printMessage ('Ty wygrywasz!');
} else if (computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage ('Ty wygrywasz!');
} else if (computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage ('Ty wygrywasz!');
} else if (playerMove == 'nieznany ruch'){
    printMessage ('Przegrałeś ;_;');
} else if (computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage ('remis x)');
} else if (computerMove == 'nożyce' && playerMove == 'nożyce'){
    printMessage ('remis x)');
} else if (computerMove == 'papier' && playerMove == 'papier'){
    printMessage ('remis x)');
} else if (computerMove == 'papier' && playerMove == 'kamień'){
    printMessage ('Przegrałeś ;_;');
} else if (computerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage ('Przegrałeś ;_;');
} else if (computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage ('Przegrałeś ;_;');
} */

    function displayResult(argComputerMove, argPlayerMove){

        printMessage('Zagrałem ' + argComputerMove + ' a Ty ' + argPlayerMove);

        if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
            return 'Wygrywasz!';
        }
        if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
            return 'Wygrywasz!';
        }
        if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
            return 'Wygrywasz!';
        }
        if( argComputerMove == argPlayerMove){
        return 'Remis x)';
        }else {
            return 'Tym razem przegrałeś ;_;';
        }
    }
    printMessage('Wynik to ' + displayResult(argComputerMove, argPlayerMove));
}
document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
  });
document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
  });
document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
  });