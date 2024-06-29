var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) 
{
   document.querySelectorAll(".drum")[i].addEventListener("click", function()
{
    var buttonInnerHTML = this.innerHTML;
    makesound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML); 
});
   
}


// Here addEventListener("click", xyz())

//         1: addEventListener is a HIGHER Order function as it has a function in its argument... 
//         2: xyz() is acallback function cause it gets only executed when the "click" event is perforrmed...
//         3: The  callback function is not called by us but it is called by the object that experience the "click"...
//          document.querySelectorAll(".drum")[i]. is the object here if we click any button of drum class then the call back function is triggered
      
// function handleClick() {
//     // console.log(this.innerHTML);
//     // "this" represent currently which object is Clicked...
//     // this.innerHTML returns which object value i.e w/a/d/s.... is returned...
//     // this.style.color = "white";
//     //this line of code changes the textcolor if we click on them...

//     var buttonInnerHTML = this.innerHTML;
//     switch (buttonInnerHTML) 
//     {
//         case "w":
//             var audio = new Audio('./sounds/tom-1.mp3');
//             audio.play();
//             break;
//          case "a":
//             var audio = new Audio('./sounds/tom-2.mp3');
//             audio.play();
//             break;
        
//          case "s":
//             var audio = new Audio('./sounds/tom-3.mp3');
//             audio.play();
//             break;

//          case "d":
//             var audio = new Audio('./sounds/tom-4.mp3');
//             audio.play();
//             break;
        
//         case "j":
//             var audio = new Audio('./sounds/snare.mp3');
//             audio.play();
//             break;
        
//          case "k":
//             var audio = new Audio('./sounds/crash.mp3');
//             audio.play();
//             break;

//          case "l":
//             var audio = new Audio('./sounds/kick-bass.mp3');
//             audio.play();
//             break;


//         default: console.log(buttonInnerHTML);

//             break;
//     }
// }

document.addEventListener("keypress", function(event){
    makesound(event.key);   
    //event.key return the key you have pressed on the keyboard...
    buttonAnimation(event.key);
})

// The keypress event is deprecated and should not be used. The key attribute or keyCode attribute should be used instead. The key attribute returns the value of the key, while the keyCode attribute returns the numeric code of the key.

// Here is an example of how to use the keyCode attribute:

// const input = document.getElementById('input');
// input.addEventListener('keydown', (e) => {
//   if (e.keyCode === 13) {
//     // Enter key was pressed
//   }
// });

function makesound(key)
{
    switch (key) 
    {
        case "w":
            var audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
            break;
         case "a":
            var audio = new Audio('./sounds/tom-2.mp3');
            audio.play();
            break;
        
         case "s":
            var audio = new Audio('./sounds/tom-3.mp3');
            audio.play();
            break;

         case "d":
            var audio = new Audio('./sounds/tom-4.mp3');
            audio.play();
            break;
        
        case "j":
            var audio = new Audio('./sounds/snare.mp3');
            audio.play();
            break;
        
         case "k":
            var audio = new Audio('./sounds/crash.mp3');
            audio.play();
            break;

         case "l":
            var audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();
            break;


        default: console.log(buttonInnerHTML);

            break;
    }
}

function buttonAnimation(currentkey)
{
    var activeButton = document.querySelector("." + currentkey);

    activeButton.classList.add("pressed");

    setTimeout(function()
    {
        activeButton.classList.remove("pressed");
    },100);

    //Settimeout function enables us to run a function after some delay...


}