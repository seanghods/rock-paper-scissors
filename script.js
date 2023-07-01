   function getComputerChoice(){
        let options = [
            "Rock",
            "Paper",
            "Scissors",
        ];
        let randomNumber = Math.floor(Math.random() * 3);
        console.log(options[randomNumber])
    }

    getComputerChoice();