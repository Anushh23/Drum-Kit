var buttons= document.querySelectorAll(".drum");
// console.log(buttons);
var numberOfDrums= buttons.length;
// console.log(numberOfDrums);
for(let i=0;i<numberOfDrums;i++){
    document.querySelectorAll('.drum')[i].addEventListener('click',function(){
        var drumType= this.innerHTML;
        console.log(drumType);
        addAnimation(drumType);
        addSound(drumType);
    })
}
document.addEventListener('keydown',function(event){
    addAnimation(event.key);
    addSound(event.key);
})
function addAnimation(value){
     value= value.toLowerCase();
     var drumClass= document.querySelector("."+value);
     drumClass.classList.add('pressed');
     setTimeout(function(){
         drumClass.classList.remove('pressed');
     },100);
}
function addSound(value){
    value=value.toLowerCase();
    switch(value){
        case "j":
                var audio1=new Audio("sounds/crash.mp3");
                audio1.play();
                break;
        case "k":
                var audio2=new Audio("sounds/kick-bass.mp3");
                audio2.play();
                break;
         case "l":
                var audio3=new Audio("sounds/snare.mp3");
                audio3.play();
                break;
        case "w":
                var audio4=new Audio("sounds/tom-1.mp3");
                audio4.play();
                break;
        case "a":
                var audio5=new Audio("sounds/tom-2.mp3");
                audio5.play();
                break;
        case "s":
                var audio6=new Audio("sounds/tom-3.mp3");
                audio6.play();
                break;
        case "d":
                var audio7=new Audio("sounds/tom-4.mp3");
                audio7.play();
                break;
        default:
                console.log(value);
    }
}