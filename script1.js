function rotateImage() {
    var image = document.getElementById("image");
    if (image.style.webkitAnimationPlayState == "running") {
      image.style.webkitAnimationPlayState = "paused";
    } else {
      image.style.webkitAnimationPlayState = "running";
    }
  }

 var myAudio = document.getElementById("myAudio");

function togglePlay() {
  return myAudio.paused ? myAudio.play() : myAudio.pause();
};


