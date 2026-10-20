const user_score = document.querySelector("#your_score");
const compt_score = document.querySelector("#compt_score");
let userWinCount = 0;
let comptWinCount = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");

const allChoices = ["stone" , "paper" , "scissors"];
const computrChoice = () =>{
    const idx= Math.floor(Math.random() * 3);
    return allChoices[idx];
}


const startGame = (userchoice) =>{
    const compt_choice = computrChoice();
    if(userchoice === compt_choice)
    {
        // draw
        msg.innerText = `Game Was Draw, Play Again, Computer Chooses ${compt_choice}`;
        msg.style.backgroundColor = "dimgray";
    }
    else{
        let win = true;
        if(userchoice === "stone")
        {
            // comp = paper , scissors 
            win = compt_choice === "paper" ? false : true;
        }
        else if(userchoice === "scissors")
        {
            // comp = paper , stone
            win = compt_choice === "stone" ? false : true;
        }
        else{
            // comp = stone , scissors
            win = compt_choice === "scissors" ? false : true;
        }
        if(win === true)
        {
            ++userWinCount;
            user_score.innerText = userWinCount;
            msg.innerText = `User Won, Computer chooses ${compt_choice}`;
            msg.style.backgroundColor ="green";
        }
        else{
            ++comptWinCount;
            compt_score.innerText = comptWinCount;
            msg.innerText = `User Lost, Computer chooses ${compt_choice}`;
            msg.style.backgroundColor ="red";
        }
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        startGame(userchoice);
    })
})
