let sound1 = new Howl({
    src: ["music/one.mp3"],
    preload:true
    // volume: .2
  });
let sound2 = new Howl({
    src: ["music/toosieSlide.mp3"],
    preload:true,
    volume: 0.2
  });
let sound3 = new Howl({
    src: ["music/farEast.mp3"],
    preload:true,
    volume:0.1
  });

let sound4 = new Howl({
    src:["music/passionfruit.mp3"],
    preload:true,
    volume:0.1
});

  
 

  document.getElementById("button1").addEventListener("click", () => {
    sound1.play()
  }); 
  document.getElementById("button2").addEventListener("click", () => {
    sound1.pause();
  });
  document.getElementById("button3").addEventListener("click", () => {
    sound1.stop();
  });


  document.getElementById("button4").addEventListener("click", () => {
    sound2.play()
  }); 
  document.getElementById("button5").addEventListener("click", () => {
    sound2.pause();
  });
  document.getElementById("button6").addEventListener("click", () => {
    sound2.stop();
  });
  
  document.getElementById("button7").addEventListener("click", () => {
    sound3.play()
  }); 
  document.getElementById("button8").addEventListener("click", () => {
    sound3.pause();
  });
  document.getElementById("button9").addEventListener("click", () => {
    sound3.stop();
  });

  document.getElementById("button10").addEventListener("click", () => {
    sound4.play()
  }); 
  document.getElementById("button11").addEventListener("click", () => {
    sound4.pause();
  });
  document.getElementById("button12").addEventListener("click", () => {
    sound4.stop();
  });
  function thisVolume(volume_value) {
  document.querySelector("vol") = volume_value;
  volume.addEventListener("change", (e) => {
      sound1.volume = volume_value / 100;
  });
};