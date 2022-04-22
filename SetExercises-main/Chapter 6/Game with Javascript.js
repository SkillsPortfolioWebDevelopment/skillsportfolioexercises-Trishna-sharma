var character = document.getElementById("character");
var block = document.getElementById("block");

var counter = 0;
function jump() {
    //checking the condition if the class is not created yet, in order to avoid creating classes over and over again
    if (character.classList == "animate") { return }
    character.classList.add("animate");
    //the character will only jump once because the class is set, in order to remove that, we will set a timeout
    setTimeout(function () {
        character.classList.remove("animate");
    }, 300);
}
//creating a function to check the values for the red and blue block and comparing them in order to determine if the game is over or not
var checkDead = setInterval(function () {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    //stopping the animation once the two blocks colliding
    if (blockLeft < 20 && blockLeft > -20 && characterTop >= 130) {
        block.style.animation = "none";
        //seeting the math to calculate the scores
        alert("Game Over. score: " + Math.floor(counter / 100));
        counter = 0;
        block.style.animation = "block 2s infinite linear";
    } else {
        counter++;
        //adding the scores if the blocks are not colliding
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);
    }
}, 10);
