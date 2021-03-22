var insts = document.querySelectorAll(".instrument");

for(var i = 0; i < insts.length; i++)
insts[i].addEventListener("click", playAudio);



function playAudio(){
  var audioId = "aud-" + this.id;
  document.getElementById(audioId).play();
}


document.querySelector("body").addEventListener("keypress", keyPress);

function keyPress(key){

  // alert(key.keyCode);

  switch(key.keyCode){

    case 113 || 81:
    document.getElementById("crash").click();
    break;

    case 119 || 87:
    document.getElementById("kick").click();
    break;

    case 101 || 69:
    document.getElementById("snare").click();
    break;

    case 114 || 82:
    document.getElementById("tom1").click();
    break;

    case 97 || 65:
    document.getElementById("tom2").click();
    break;

    case 115 || 83:
    document.getElementById("floor-tom1").click();
    break;

    case 100 || 68:
    document.getElementById("floor-tom2").click();
    break;
  }


}
