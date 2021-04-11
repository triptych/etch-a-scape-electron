// https://observablehq.com/@triptych/etch-a-scape@136
import define1 from "./d0a81c07d9b316ff@180.js";
import define2 from "./a2e58f97fd5e8d7c@562.js";
//define1 = require("./d0a81c07d9b316ff@180.js");
//define2 = require("./a2e58f97fd5e8d7c@562.js");
export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], function(md){return(
md`# Etch-a-scape`
)});
  main.variable(observer()).define(["html"], function(html){return(
html`<p>Help the Robot escape the Aliens and get home. You can only use the slider bars to move. (No cheating typing in the coords!) Reload the page to play again! </p>`
)});
  main.variable(observer("screen")).define("screen", ["html"], function*(html)
{
  let grid = html`<div class="screen">
    <div class="goal">🏠</div>
    <div class="player">🤖</div>
    
    <div class="success">You Win!</div>
    <div class="failure">You Lose!</div>
</div>`;
  yield grid;
}
);
  main.variable(observer()).define(["visibility","setEnemies","numEnemies"], async function(visibility,setEnemies,numEnemies)
{await visibility();
  setEnemies(numEnemies);
}
);
  main.variable(observer("viewof horizontal")).define("viewof horizontal", ["Range","html"], function(Range,html){return(
Range([0, 250], {value: 250,label: html`<b>↔</b>`, step: 0.1, placeholder: "0–11"})
)});
  main.variable(observer("horizontal")).define("horizontal", ["Generators", "viewof horizontal"], (G, _) => G.input(_));
  main.variable(observer("viewof vertical")).define("viewof vertical", ["Range","html"], function(Range,html){return(
Range([0, 250], {value: 250, label: html`<b>↕</b>`, step: 0.1, placeholder: "0–11"})
)});
  main.variable(observer("vertical")).define("vertical", ["Generators", "viewof vertical"], (G, _) => G.input(_));
  main.variable(observer("viewof numEnemies")).define("viewof numEnemies", ["Range","html"], function(Range,html){return(
Range([1, 5], {value: 3, label: html`<b>👾</b>`, step: 1, placeholder: "1–5"})
)});
  main.variable(observer("numEnemies")).define("numEnemies", ["Generators", "viewof numEnemies"], (G, _) => G.input(_));
  main.variable(observer("style")).define("style", ["html"], function(html){return(
html`<style>
  .screen {
    height: 300px;
    width: 300px;
    border: 1px solid black;
    border-radius: 8px;
    position: relative;
  }
  .player, .goal, .enemy{
      font-size: 2em;
      position: absolute;
   }

    .success, .failure{
      position: absolute;
      top: 50%;
      left: 25%;
      font-size: 2em;
      color: red;
      display: none;
      z-index: 100;
    }

</style>`
)});
  main.variable(observer("robotpos")).define("robotpos", ["html","vertical","horizontal"], function(html,vertical,horizontal){return(
html`<style>
  .player{
      top: ${vertical}px;
      left: ${horizontal}px;
  }


</style>`
)});
  main.variable(observer("calcEnemiesPos")).define("calcEnemiesPos", ["screen","randomIntFromInterval"], function(screen,randomIntFromInterval){return(
(num)=>{
  Array.from(screen.querySelectorAll(".enemy")).map((el,idx,obj)=>{
   let newTop = parseInt(el.style.top) + randomIntFromInterval(-5,5);
   let newLeft = parseInt(el.style.left) + randomIntFromInterval(-5,5);
   if(newTop > 0 && newTop < 250){
     el.style.top = `${newTop}px`;
   } 
    if(newLeft > 0 && newLeft < 250){
      el.style.left = `${newLeft}px`;
    }
   
   
  })
}
)});
  main.variable(observer("randomIntFromInterval")).define("randomIntFromInterval", function(){return(
function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}
)});
  main.variable(observer()).define(["robotpos","checkCollision","calcEnemiesPos","numEnemies"], function(robotpos,checkCollision,calcEnemiesPos,numEnemies)
{
  robotpos, checkCollision(), calcEnemiesPos(numEnemies)  
}
);
  main.variable(observer("setEnemies")).define("setEnemies", ["screen","numEnemies","enemy"], function(screen,numEnemies,enemy){return(
()=>{
   // kill old enemies
  Array.from(screen.querySelectorAll(".enemy")).map((x)=>x.remove())
  // add new ones
  for(let i=0;i<numEnemies;i++){
    screen.appendChild(enemy.cloneNode(true))
  }
  // place them on the board
    Array.from(screen.querySelectorAll(".enemy")).map((el,idx,obj)=>{
    el.style.top = `${Math.floor(Math.random() * 200)}px`;
    el.style.left = `${Math.floor(Math.random() * 200)}px`;
  })
}
)});
  main.variable(observer("checkCollision")).define("checkCollision", ["checkOverlap","screen","horizontal","vertical"], function(checkOverlap,screen,horizontal,vertical){return(
()=>{
  console.log("checkCollision called.")
  if(checkOverlap(screen.querySelector(".player").getBoundingClientRect(), screen.querySelector(".goal").getBoundingClientRect())){
    console.log("You win!");
    screen.querySelector(".success").style.display = "block";
    screen.querySelector(".player").style.display = "none";
  }
  Array.from(screen.querySelectorAll(".enemy")).map((itm,idx,obj)=>{

     if(checkOverlap(screen.querySelector(".player").getBoundingClientRect(), itm.getBoundingClientRect())){
    console.log("You lose!");
    screen.querySelector(".failure").style.display = "block";
       screen.querySelector(".player").style.display = "none";
      horizontal.value = 250;
      vertical.value = 250; 
  }
    
    
  })
}
)});
  main.variable(observer("enemy")).define("enemy", ["html"], function(html){return(
html`<div class="enemy">👾</div>`
)});
  const child1 = runtime.module(define1);
  main.import("checkOverlap", child1);
  const child2 = runtime.module(define2);
  main.import("Range", child2);
  return main;
}
