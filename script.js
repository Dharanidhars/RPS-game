var con=confirm("READY ! To play Rock, Paper, Scissor....! ")
if(con){
    alert("Welcome to Rock Paper Scissor")
    var player = prompt("rock, paper or Scissor")
    if(player){
        var playerone=player.trim().toLowerCase();
        if(playerone==="rock" || playerone==="paper" || playerone==="scissor")
        {
            
            var computer =Math.floor(Math.random()*3+1);
            var comp= computer===1 ? "rock" : computer===2? "paper" : "scissor";

            var result = playerone === comp ? `player: ${playerone}\nComputer: ${comp}\n Game is draw` : 
            playerone ==="rock" && comp==="scissor" ? `player : ${playerone}\nComputer: ${comp}\n Player Win` : 
            playerone === "paper" && comp==="rock" ? `player : ${playerone}\nComputer: ${comp}\n Player Win` : 
            playerone=== "scissor" && comp==="paper" ? `player : ${playerone}\nComputer: ${comp}\n Player Win` : 
            `player : ${playerone}\nComputer: ${comp}\n Computer Win`;
            alert(result);
            let playAgain= confirm("Play Again?");
            playAgain? location.reload() : alert("Thanks for playing...")
        }
else{
    alert("You didn't enter Rock, Paper, Scissor")
    let playAgain= confirm("Play Again?");
    playAgain? location.reload() : alert("Thanks for coming...")
}

        
    
    }
    // else if(player !="rock" || player!="paper" || player!="scissor"){
    //     alert("Enter among from Rock, Paper, Scissor")
    // }
    else if(player==""){
        alert("Enter any object")  
        let playAgain= confirm("Play Again?");
        playAgain? location.reload() : alert("Thanks for coming...")
    }
 
    else{
        alert("You changed you mind! See you next time...!")
    }
   
}
else{
    alert("See you again")
}


console.log(result)