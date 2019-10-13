{
    function playGame(playerInput) {

        clearMessages();

        const getMoveName = function getMoveName(argMoveId) {
            if (argMoveId === 1) {
                return 'kamień';
        }
            if(argMoveId === 2) {
                return 'papier';
        }
            if (argMoveId === 3) {
                return 'nożyce';
        }
            printMessage('Nie znam ruchu o id ' + argMoveId + '.');
            return 'nieznany ruch';
        }
        const randomNumber = Math.floor(Math.random() * 3 + 1),
            argComputerMove = getMoveName(randomNumber),
            argPlayerMove = getMoveName (playerInput);

        console.log('Wylosowana liczba to: ' + randomNumber);

        console.log('Gracz wpisał: ' + playerInput);


        const displayResult = function displayResult(argComputerMove, argPlayerMove) {

            printMessage('Zagrałem ' + argComputerMove + ' a Ty ' + argPlayerMove);

            if (argComputerMove === 'kamień' && argPlayerMove === 'papier') {
                return 'Wygrywasz!';
            }
            if (argComputerMove === 'papier' && argPlayerMove === 'nożyce') {
                return 'Wygrywasz!';
            }
            if (argComputerMove === 'nożyce' && argPlayerMove === 'kamień') {
                return 'Wygrywasz!';
            }
            if (argComputerMove === argPlayerMove) {
                return 'Remis x)';
            } else {
                return 'Tym razem przegrałeś ;_;';
            }
        }
        printMessage('Wynik to ' + displayResult(argComputerMove, argPlayerMove));
    }
    document.getElementById('play-rock').addEventListener('click', function() {
        playGame(1);
    });
    document.getElementById('play-paper').addEventListener('click', function() {
        playGame(2);
    });
    document.getElementById('play-scissors').addEventListener('click', function() {
        playGame(3);
    });
}