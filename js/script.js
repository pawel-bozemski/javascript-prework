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

let computerMove = getMoveName (randomNumber);

 /*if (randomNumber == 1){
  computerMove = 'kamień';}
} else if (randomNumber == 2){
    computerMove = 'papier';
  } else if (randomNumber == 3){
    computerMove = 'nożyce';
  } */

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName (playerInput);

/* if (playerInput == '1'){
  playerMove = 'kamień';
} else if (playerInput == '2'){
    playerMove = 'papier';
  } else if (playerInput == '3'){
    playerMove = 'nożyce';
}  */

printMessage('Twój ruch to: ' + playerMove);

/*
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
    console.log('moves:', argComputerMove, argPlayerMove);
    printMessage('Zagrałem' + argComputerMove + 'a Ty' + argPlayerMove);

    if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        printMessage('Wygrywasz!');
    } else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        printMessage('Wygrywasz!');
    } else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Wygrywasz!');
    } else if( argComputerMove == argPlayerMove){
        printMessage('Remis x)');
    }else {
        printMessage('Tym razem przegrałeś ;_;')
    }
}
