var insts = document.querySelectorAll(".instrument");

for(var i = 0; i < insts.length; i++)
insts[i].addEventListener("click", playAudio);



function playAudio(){
  var audioId = "aud-" + this.id;
  var imgId = "img-" + this.id;
  document.getElementById(imgId).classList.add("pressed");
  setTimeout(function () {
    document.getElementById(imgId).classList.remove("pressed");
  }, 200);
  document.getElementById(audioId).play();
}


document.querySelector("body").addEventListener("keydown", keyPress);

function keyPress(key){

  //alert(key.which);

  switch(key.which){

    case 81:
    document.getElementById("crash").click();
    break;

    case 87:
    document.getElementById("kick").click();
    break;

    case 69:
    document.getElementById("snare").click();
    break;

    case 82:
    document.getElementById("tom1").click();
    break;

    case 65:
    document.getElementById("tom2").click();
    break;

    case 83:
    document.getElementById("floor-tom1").click();
    break;

    case 68:
    document.getElementById("floor-tom2").click();
    break;
  }


}
