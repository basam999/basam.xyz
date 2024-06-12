function playSong() {
    var audio = document.getElementById("myAudio");
       audio.play();
       audio.volume = 0.3;
       audio.addEventListener("ended", function() {
       audio.play(); // restart the audio when it reaches the end
   });
        var container = document.querySelector(".container");
          container.style.display = "none"; /* hide the container when the song is playing */
      }