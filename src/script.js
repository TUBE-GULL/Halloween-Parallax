console.log('start')

// const link = document.querySelector('.link');
const ghost = document.querySelector('.ghost');
const treeLeft = document.querySelector('.tree_left');
const treeRight = document.querySelector('.tree_right');
const backPumpkin = document.querySelector('.back_pumpkin');
const buttonGhost = document.querySelector('.button-ghost');
const gradientText = document.querySelector('.gradient-text');
const topPumpkinLeft = document.querySelector('.top_pumpkin_left');
const topPumpkinRight = document.querySelector('.top_pumpkin_right');
const frontPumpkinLeft = document.querySelector('.front_pumpkin_left');
const frontPumpkinRight = document.querySelector('.front_pumpkin_right');
const smallPumpkinLeftTop = document.querySelector('.small-pumpkin_right-top');
const smallPumpkinLeftBack = document.querySelector('.small-pumpkin_left-back');
const smallPumpkinRightTop = document.querySelector('.small-pumpkin_right-top');
const topPumpkinLeftLight = document.querySelector('.front_pumpkin_left-light');
const smallPumpkinRightBack = document.querySelector('.small-pumpkin_right-back');
const topPumpkinRightLight = document.querySelector('.front_pumpkin_right-light');
const layerTransparentBackground = document.querySelector('.layer-transparent-background');


const Parallax = (layer, X, Y) => {
   const xAxis = (window.innerWidth / 2 - event.pageX) / X;
   const yAxis = (window.innerHeight / 2 - event.pageY) / Y;
   layer.style.transform = `translateX(${xAxis}px) translateY(${yAxis}px)`;
}

document.addEventListener('mousemove', (event) => {
   Parallax(backPumpkin, 500, 500);
   Parallax(treeLeft, 130, 200);
   Parallax(treeRight, 105, 200);
   Parallax(topPumpkinLeft, 65, 200);
   Parallax(topPumpkinRight, 65, 200);
   Parallax(topPumpkinRightLight, 65, 200);
   Parallax(topPumpkinLeftLight, 65, 200);
   Parallax(frontPumpkinLeft, 75, 105);
   Parallax(frontPumpkinRight, 75, 105);
   Parallax(buttonGhost, 75, 105);
   // Parallax(link, 75, 105);
});

const particlesConfig = {
   "particles": {
      "number": {
         "value": 100,
         "density": {
            "enable": true,
            "value_area": 500
         },
      },
      "blur": {
         "value": 2,
         "random": false,
         "anim": {
            "enable": true,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
         }
      },
      "color": {
         "value": "#fc7619"
      },
      "shape": {
         "type": "circle",
         "stroke": {
            "width": 0,
            "color": "#fc7619"
         },
         "polygon": {
            "nb_sides": 5
         },
         "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
         }
      },
      "opacity": {
         "value": 0.5,
         "random": false,
         "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
         }
      },
      "size": {
         "value": 3,
         "random": true,
         "anim": {
            "enable": false,
            "speed": 80,
            "size_min": 0.1,
            "sync": false
         }
      },
      "line_linked": {
         "enable": false,
         "distance": 300,
         "color": "#ee661c",
         "opacity": 0.4,
         "width": 0
      },
      "move": {
         "enable": true,
         "speed": 1,
         "direction": "none",
         "random": false,
         "straight": false,
         "out_mode": "out",
         "bounce": false,
         "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
         }
      }
   },
   "interactivity": {
      "detect_on": "canvas",
      "events": {
         "onhover": {
            "enable": false,
            "mode": "repulse"
         },
         "onclick": {
            "enable": false,
            "mode": "push"
         },
         "resize": true
      },
      "modes": {
         "grab": {
            "distance": 800,
            "line_linked": {
               "opacity": 1
            }
         },
         "bubble": {
            "distance": 800,
            "size": 80,
            "duration": 2,
            "opacity": 0.8,
            "speed": 3
         },
         "repulse": {
            "distance": 400,
            "duration": 0.4
         },
         "push": {
            "particles_nb": 4
         },
         "remove": {
            "particles_nb": 2
         },
      }
   },
   "retina_detect": true
}


particlesJS("particles-js", particlesConfig);




const audio = document.getElementById("myAudio");
let offOn = true;


function playAudio() {
   audio.play();
}

function pauseAudio() {
   audio.pause();
}

let isLeft = true;

function checkPosition() {
   let leftLimit = -200;
   let screenWidth = window.innerWidth;
   let currentLeft = ghost.offsetLeft;
   // console.log(screenWidth);// width window 
   // console.log(currentLeft); // position block 
   let number = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
   screenWidth += 200

   if (currentLeft >= screenWidth) {
      if (isLeft) {
         isLeft = false;
         ghost.style.backgroundImage = `url(src/img/ghosts/ghostL_${number}.png)`;
         ghost.style.backgroundRepeat = "no-repeat";
         ghost.style.backgroundSize = "100% 100%";
      }
   } else if (currentLeft <= leftLimit) {
      if (!isLeft) {
         isLeft = true;
         ghost.style.backgroundImage = `url(src/img/ghosts/ghostR_${number}.png)`;
         ghost.style.backgroundRepeat = "no-repeat";
         ghost.style.backgroundSize = "100% 100%";
      }
   }
}
let positionInterval = true;

buttonGhost.addEventListener('click', function () {
   if (offOn) {
      playAudio()
      offOn = false;
      positionInterval = setInterval(checkPosition, 100);
   } else {
      pauseAudio()
      ghost.style.backgroundImage = ``;
      ghost.style.backgroundRepeat = "no-repeat";
      ghost.style.backgroundSize
      offOn = true;
      clearInterval(positionInterval);
   }
});

// const arrayText = [];

// const hOneText = gradientText.textContent
// console.log(hOneText)

// for (let i = 0; i < hOneText.length; i++) {
//    let text = gradientText[i].textContent;
//    arrayText.push(text);
// }
// console.log(arrayText)