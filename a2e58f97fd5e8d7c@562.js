// https://observablehq.com/@observablehq/inputs@562
export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["us-state-capitals.tsv",new URL("./files/eee4d2a928a36026dab4281b76deb7fe0cd885f1c6df6e546efb79db7e5fa5ccc98a395f865d31c1db3344ff1734683764bb1a63871fb1b39f77bb810f49699c",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], function(md){return(
md`# Observable Inputs

These lightweight interface components — buttons, sliders, dropdowns, tables, and the like — help you explore data and build interactive displays. For a walkthrough of how you might use these to support data analysis, see [Hello, Inputs!](/@observablehq/hello-inputs)`
)});
  main.variable(observer("usage")).define("usage", ["md"], function(md){return(
md`---
## Usage

First [import](/@observablehq/introduction-to-imports) whichever components you’d like into your notebook:

~~~js
import {Button, Checkbox, Toggle, Radio, Range, Select, Text, Textarea, Search, Table} from "@observablehq/inputs"
~~~

Then declare your inputs with [viewof](/@observablehq/introduction-to-views), like so:`
)});
  main.variable(observer("viewof gain")).define("viewof gain", ["Range"], function(Range){return(
Range([0, 11], {value: 5, label: "Gain"})
)});
  main.variable(observer("gain")).define("gain", ["Generators", "viewof gain"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], function(md){return(
md`Now you can reference the input’s value (here *gain*) in any cell, and the cell will run whenever the input changes. No event listeners required!`
)});
  main.variable(observer()).define(["gain"], function(gain){return(
gain
)});
  main.variable(observer()).define(["html","gain"], function(html,gain){return(
html`The current gain is ${gain.toLocaleString("en")}!`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Observable Inputs are released under the [ISC license](https://github.com/observablehq/inputs/blob/main/LICENSE) and depend only on [Hypertext Literal](/@observablehq/htl), our tagged template literal for safely generating dynamic HTML. If you are interested in contributing or wish to report an issue, please see [our repository](https://github.com/observablehq/inputs). For recent changes, please see [our release notes](https://github.com/observablehq/inputs/releases).`
)});
  main.variable(observer("basics")).define("basics", ["md"], function(md){return(
md`---
## Basics

These basic inputs will get you started.

* [Button](/@observablehq/input-button) - do something when a button is clicked
* [Toggle](/@observablehq/input-toggle) - toggle between two values (on or off)
* [Checkbox](/@observablehq/input-checkbox) - choose any from a set
* [Radio](/@observablehq/input-radio) - choose one from a set
* [Range](/@observablehq/input-range) - choose a number in a range (slider)
* [Select](/@observablehq/input-select) - choose one or any from a set (drop-down menu)
* [Text](/@observablehq/input-text) - enter freeform single-line text
* [Textarea](/@observablehq/input-textarea) - enter freeform multi-line text`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
### [Button](/@observablehq/input-button) 

Do something when a button is clicked. [Examples ›](/@observablehq/input-button) [API Reference ›](https://github.com/observablehq/inputs/blob/main/README.md#button)`
)});
  main.variable(observer("viewof clicks")).define("viewof clicks", ["Button"], function(Button){return(
Button("Click me")
)});
  main.variable(observer("clicks")).define("clicks", ["Generators", "viewof clicks"], (G, _) => G.input(_));
  main.variable(observer()).define(["clicks"], function(clicks){return(
clicks
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
### [Toggle](/@observablehq/input-toggle) 

Toggle between two values (on or off). [Examples ›](/@observablehq/input-toggle) [API Reference ›](https://github.com/observablehq/inputs/blob/main/README.md#toggle)`
)});
  main.variable(observer("viewof mute")).define("viewof mute", ["Toggle"], function(Toggle){return(
Toggle({label: "Mute"})
)});
  main.variable(observer("mute")).define("mute", ["Generators", "viewof mute"], (G, _) => G.input(_));
  main.variable(observer()).define(["mute"], function(mute){return(
mute
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
### [Checkbox](/@observablehq/input-checkbox) 

Choose any from a set. [Examples ›](/@observablehq/input-checkbox) [API Reference ›](https://github.com/observablehq/inputs/blob/main/README.md#checkbox)`
)});
  main.variable(observer("viewof colors")).define("viewof colors", ["Checkbox"], function(Checkbox){return(
Checkbox(["red", "green", "blue"], {label: "Colors"})
)});
  main.variable(observer("colors")).define("colors", ["Generators", "viewof colors"], (G, _) => G.input(_));
  main.variable(observer()).define(["colors"], function(colors){return(
colors
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
### [Radio](/@observablehq/input-radio)

Choose one from a set. [Examples ›](/@observablehq/input-radio) [API Reference ›](https://github.com/observablehq/inputs/blob/main/README.md#radio)`
)});
  main.variable(observer("viewof color")).define("viewof color", ["Radio"], function(Radio){return(
Radio(["red", "green", "blue"], {label: "Color"})
)});
  main.variable(observer("color")).define("color", ["Generators", "viewof color"], (G, _) => G.input(_));
  main.variable(observer()).define(["color"], function(color){return(
color
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
### [Range](/@observablehq/input-range)

Pick a number. [Examples ›](/@observablehq/input-range) [API Reference ›](https://github.com/observablehq/inputs/blob/main/README.md#range)`
)});
  main.variable(observer("viewof n")).define("viewof n", ["Range"], function(Range){return(
Range([0, 255], {step: 1, label: "Favorite number"})
)});
  main.variable(observer("n")).define("n", ["Generators", "viewof n"], (G, _) => G.input(_));
  main.variable(observer()).define(["n"], function(n){return(
n
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
### [Select](/@observablehq/input-select)

Choose one, or any, from a menu. [Examples ›](/@observablehq/input-select) [API Reference ›](https://github.com/observablehq/inputs/blob/main/README.md#select)`
)});
  main.variable(observer("viewof homeState")).define("viewof homeState", ["Select","stateNames"], function(Select,stateNames){return(
Select([null].concat(stateNames), {label: "Home state"})
)});
  main.variable(observer("homeState")).define("homeState", ["Generators", "viewof homeState"], (G, _) => G.input(_));
  main.variable(observer()).define(["homeState"], function(homeState){return(
homeState
)});
  main.variable(observer("viewof visitedStates")).define("viewof visitedStates", ["Select","stateNames"], function(Select,stateNames){return(
Select(stateNames, {label: "Visited states", multiple: true})
)});
  main.variable(observer("visitedStates")).define("visitedStates", ["Generators", "viewof visitedStates"], (G, _) => G.input(_));
  main.variable(observer()).define(["visitedStates"], function(visitedStates){return(
visitedStates
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
### [Text](/@observablehq/input-text)

Enter freeform single-line text. [Examples ›](/@observablehq/input-text) [API Reference ›](https://github.com/observablehq/inputs/blob/main/README.md#text)`
)});
  main.variable(observer("viewof name")).define("viewof name", ["Text"], function(Text){return(
Text({label: "Name", placeholder: "What’s your name?"})
)});
  main.variable(observer("name")).define("name", ["Generators", "viewof name"], (G, _) => G.input(_));
  main.variable(observer()).define(["name"], function(name){return(
name
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
### [Textarea](/@observablehq/input-textarea)

Enter freeform multi-line text. [Examples ›](/@observablehq/input-textarea) [API Reference ›](https://github.com/observablehq/inputs/blob/main/README.md#textarea)`
)});
  main.variable(observer("viewof bio")).define("viewof bio", ["Textarea"], function(Textarea){return(
Textarea({label: "Biography", placeholder: "What’s your story?"})
)});
  main.variable(observer("bio")).define("bio", ["Generators", "viewof bio"], (G, _) => G.input(_));
  main.variable(observer()).define(["bio"], function(bio){return(
bio
)});
  main.variable(observer("tables")).define("tables", ["md"], function(md){return(
md`---
## Tabular data

These fancy inputs are designed to work with tabular data such as CSV or TSV [file attachments](/@observablehq/file-attachments) and [database clients](/@observablehq/databases).

* [Search](/@observablehq/input-search) - query a tabular dataset
* [Table](/@observablehq/input-table) - browse a tabular dataset`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
### [Search](/@observablehq/input-search)

Query a tabular dataset. [Examples ›](/@observablehq/input-search) [API Reference ›](https://github.com/observablehq/inputs/blob/main/README.md#search)`
)});
  main.variable(observer("viewof search")).define("viewof search", ["Search","capitals"], function(Search,capitals){return(
Search(capitals, {placeholder: "Search U.S. capitals"})
)});
  main.variable(observer("search")).define("search", ["Generators", "viewof search"], (G, _) => G.input(_));
  main.variable(observer()).define(["search"], function(search){return(
search
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
### [Table](/@observablehq/input-table)

Browse a tabular dataset. [Examples ›](/@observablehq/input-table) [API Reference ›](https://github.com/observablehq/inputs/blob/main/README.md#table)`
)});
  main.variable(observer("viewof rows")).define("viewof rows", ["Table","search"], function(Table,search){return(
Table(search)
)});
  main.variable(observer("rows")).define("rows", ["Generators", "viewof rows"], (G, _) => G.input(_));
  main.variable(observer()).define(["rows"], function(rows){return(
rows
)});
  main.variable(observer("techniques")).define("techniques", ["md"], function(md){return(
md`---
## And more!

Got the basics? Here are a few more advanced techniques:

* [Synchronized inputs](/@observablehq/synchronized-inputs) - bind two or more inputs
* [Introduction to Views](/@observablehq/introduction-to-views) - more on Observable’s viewof
* More guides coming soon!
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`We are grateful to Jeremy Ashkenas for blazing the trail with [“The Grand Native Inputs Bazaar”](/@jashkenas/inputs). To migrate from Jeremy’s inputs to our new official inputs, consider our [legacy inputs](/@observablehq/legacy-inputs).`
)});
  main.variable(observer()).define(["md","Table","html"], function(md,Table,html){return(
md`For even more, consider these “friends & family” inputs and techniques shared by the Observable community:

${Table([
  [["2D Slider", "/d/98bbb19bf9e859ee"], "Fabian Iwand", "a two-dimensional range"],
  [["Binary Input", "/@rreusser/binary-input"], "Ricky Reusser", "bitwise IEEE floating point"],
  [["DIY inputs", "/@bartok32/diy-inputs"], "Bartosz Prusinowski", "inputs with fun, custom styles"],
  [["FineRange", "/@rreusser/fine-range"], "Ricky Reusser", "high-precision numeric control"],
  [["Form Input", "/@mbostock/form-input"], "Mike Bostock", "multiple inputs in single cell"],
  [["Inputs", "/@jashkenas/inputs"], "Jeremy Ashkenas", "the original"],
  [["Player", "/@oscar6echo/player"], "oscar6echo", "detailed timing control for animation"],
  [["Scrubber", "/@mbostock/scrubber"], "Mike Bostock", "play/pause/scrub control for animation"],
  [["Range Slider", "/@mootari/range-slider"], "Fabian Iwand", "a two-ended range"],
  [["Ternary Slider", "/@yurivish/ternary-slider"], "Yuri Vishnevsky", "a proportion of three values"],
  [["Data driven range sliders", "/@bumbeishvili/data-driven-range-sliders"], "David B.", "a range input with a histogram"],
  [["Snapping Histogram Slider", "/@trebor/snapping-histogram-slider"], "Robert Harris", "a range input with a histogram"],
  [["Inputs in grid", "/@bumbeishvili/input-groups"], "David B.", "combine multiple inputs into a compact grid"],
  [["List Input", "/@harrislapiroff/list-input"], "Harris L.", "enter more than one of something"],
  [["Tangle", "/@mbostock/tangle"], "Mike Bostock", "Bret Victor-inspired inline scrubbable numbers"]
].map(([Name, Author, Description]) => ({Name, Author, Description})), {
  sort: "Name",
  rows: Infinity,
  layout: "auto",
  width: {
    "Description": "60%"
  },
  format: {
    Name: ([title, link]) => html`<a href=${link} target=_blank>${title}`
  }
})}

To share your reusable input or technique, please leave a comment.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## Appendix`
)});
  main.variable(observer("Inputs")).define("Inputs", ["require"], function(require){return(
require("@observablehq/inputs@0.7.17/dist/inputs.umd.min.js")
)});
  main.variable(observer("svg")).define("svg", ["htl"], function(htl){return(
htl.svg
)});
  main.variable(observer("html")).define("html", ["htl"], function(htl){return(
htl.html
)});
  main.variable(observer("htl")).define("htl", ["require"], function(require){return(
require("htl@0.2.5/dist/htl.min.js")
)});
  main.variable(observer("capitals")).define("capitals", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("us-state-capitals.tsv").tsv({typed: true})
)});
  main.variable(observer("stateNames")).define("stateNames", ["capitals"], function(capitals){return(
capitals.map(d => d.State)
)});
  main.variable(observer("Button")).define("Button", ["Inputs"], function(Inputs){return(
Inputs.Button
)});
  main.variable(observer("Toggle")).define("Toggle", ["Inputs"], function(Inputs){return(
Inputs.Toggle
)});
  main.variable(observer("Radio")).define("Radio", ["Inputs"], function(Inputs){return(
Inputs.Radio
)});
  main.variable(observer("Checkbox")).define("Checkbox", ["Inputs"], function(Inputs){return(
Inputs.Checkbox
)});
  main.variable(observer("Range")).define("Range", ["Inputs"], function(Inputs){return(
Inputs.Range
)});
  main.variable(observer("Select")).define("Select", ["Inputs"], function(Inputs){return(
Inputs.Select
)});
  main.variable(observer("Text")).define("Text", ["Inputs"], function(Inputs){return(
Inputs.Text
)});
  main.variable(observer("Textarea")).define("Textarea", ["Inputs"], function(Inputs){return(
Inputs.Textarea
)});
  main.variable(observer("Search")).define("Search", ["Inputs"], function(Inputs){return(
Inputs.Search
)});
  main.variable(observer("Table")).define("Table", ["Inputs"], function(Inputs){return(
Inputs.Table
)});
  main.variable(observer("Input")).define("Input", ["Inputs"], function(Inputs){return(
Inputs.Input
)});
  main.variable(observer("bind")).define("bind", ["Inputs"], function(Inputs){return(
Inputs.bind
)});
  main.variable(observer("disposal")).define("disposal", ["Inputs"], function(Inputs){return(
Inputs.disposal
)});
  return main;
}
