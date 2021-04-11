// https://observablehq.com/@triptych/31-days-of-observable@180
export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["119765.gif",new URL("./files/c5ee478f50d4397df2dae13e49386d91f15cbf25228bb1642274ac3fbda7c69037a51384b5876dd13475c79b7cdb4086bbd3ca839668a3d8b7008fe814dacebd",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], function(md){return(
md`# 31 Days of Observable`
)});
  main.variable(observer("list")).define("list", ["html","daysArray"], function(html,daysArray){return(
html` <ol class="notebooks">
${daysArray.map((x)=>{ return html`<li><a href="${x.url}">${x.title}</a></li>`})}
</ol>`
)});
  main.variable(observer("daysArray")).define("daysArray", function(){return(
[
  {title: "Interactive Story", url:"https://observablehq.com/@triptych/interactive-story"},
  {title: "Pixel Doodle", url: "https://observablehq.com/@triptych/pixel-doodle"},
  {title: "Adopt an Emoji", url:"https://observablehq.com/@triptych/adopt-an-emoji"},
  {title: "Material Design Icons", url: "https://observablehq.com/@triptych/material-design-icons"},
  {title: "Time for Cats", url: "https://observablehq.com/@triptych/time-for-cats?collection=@triptych/31-days-of-observable"},
  {title: "31 Days of Observable", url: "https://observablehq.com/@triptych/31-days-of-observable"},
  {title: "Space Race", url: "https://observablehq.com/@triptych/space-race"},
  {title: "Etch-a-scape", url: "https://observablehq.com/@triptych/etch-a-scape"},
  {title: "My RPG Persona", url: "https://observablehq.com/@triptych/my-rpg-persona"},
  {title: "Web Component Test", url:"https://observablehq.com/@triptych/web-component-test"},
  {title: "XP Level Calc", url:"https://observablehq.com/@triptych/xp-level-calc"},
  {title: "RPG Paint", url:"https://observablehq.com/@triptych/rpg-paint"},
  {title: "RSS Reader", url: "https://observablehq.com/@triptych/rss-reader"},
  {title: "Hello, maze generator", url:"https://observablehq.com/@triptych/hello-maze-generator"},
  {title:"Hello Userbase", url:"https://observablehq.com/@triptych/hello-userbase"},
  {title: "Rendering HTML from a Github gist", url:"https://observablehq.com/@triptych/rendering-html-from-a-github-gist"},
  {title:"Embedding Observable Notebooks in Observable", url: "https://observablehq.com/@triptych/embedding-an-observable-notebook-in-observable"},
  {title:"Random Recursive HTML", url:"https://observablehq.com/@triptych/random-recursive-html"},
  {title: "Self Referential Notebook", url:"https://observablehq.com/@triptych/self-referential-notebook"},
  {title: "Run Some Code on Button Click", url:"https://observablehq.com/@triptych/run-some-code-on-button-click"},
  {title: "Business Card", url:"https://observablehq.com/@triptych/business-card"}
]
)});
  main.variable(observer("img")).define("img", ["html","FileAttachment"], async function(html,FileAttachment){return(
html`<img class="img" src="${await FileAttachment("119765.gif").url()}">`
)});
  main.variable(observer()).define(["list","img","checkOverlap"], function(list,img,checkOverlap)
{
  list.appendChild(img)
  list.addEventListener("mouseover", (e)=>{
    list.querySelector(".img").classList.add("show")
  })
  list.addEventListener("mouseout", (e)=>{
    list.querySelector(".img").classList.remove("show");
    Array.from(list.querySelectorAll(".selected")).forEach((cur,idx,arr)=>{
      cur.classList.remove("selected")
    })
  })
  list.addEventListener("mousemove", (e)=>{
    list.querySelector(".img").style.left = e.pageX - 20  +"px";
    list.querySelector(".img").style.top = e.pageY - 100+"px";
    let imgBox = list.querySelector(".img").getBoundingClientRect();
    let notebooksArr = Array.from(list.querySelectorAll(".notebooks li")).map((el)=>{
      return el.getBoundingClientRect()
    })
    for(let i =0; i < notebooksArr.length; i++){
      if(checkOverlap(imgBox, notebooksArr[i])){
        list.querySelectorAll(".notebooks li")[i].classList.add("selected");
      } else {
        list.querySelectorAll(".notebooks li")[i].classList.remove("selected");
      }
    }
    
  })
  list.addEventListener("click", (e)=>{
    console.log("click happened")
    list.querySelector(".selected a").click()
  })
}
);
  main.variable(observer("checkOverlap")).define("checkOverlap", function(){return(
(rect1,rect2) => {
  var overlap = !(rect1.right < rect2.left || 
                rect1.left > rect2.right || 
                rect1.bottom < rect2.top || 
                rect1.top > rect2.bottom)
  return overlap;
}
)});
  main.variable(observer()).define(["html"], function(html){return(
html`
<style>
  .notebooks {
    font-size: 2em;
    font-family: sans-serif;
    cursor: none;
  }
  .notebooks ol li a:hover{
  cursor: none;
}
  .img {
    display: none;
  position: absolute;
pointer-events: none.
}

img.show {
display: block;
}

.notebooks{
  margin-left: 2em;
}
.notebooks li {
transform: rotate(0.turn);
}
.notebooks li.selected {
border: 1px solid blue;
border-radius: 13px;
animation: slidein 1s linear 0s infinite alternate;
filter: invert(100) drop-shadow(4px 4px 5px blue);
}

@keyframes slidein {
  from { transform: rotate(-0.01turn); }
  to   { transform: rotate(0.01turn); }
}

</style>
`
)});
  return main;
}
