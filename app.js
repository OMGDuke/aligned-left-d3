var dataset = [ 5, 10, 15, 20, 25 ];
var width = 500;
var height = 50;

d3.select("body")
  .selectAll("div")
  .data(dataset)
  .enter()
  .append("div")
  .attr("class", "bar")
  .style("height", setBarHeights);

function setBarHeights(d) {
    var barHeight = d * 5;
    return barHeight + "px";
}

var svg = d3.select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

var circles = svg.selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle");

circles.attr("cx", setXPosition)
  .attr("cy", height/2)
  .attr("r", returnData)
  .attr("fill", "yellow")
  .attr("stroke", "orange")
  .attr("stroke-width", findStrokeWidth);

function setXPosition(d,i) {
  return (i * 50) + 25;
}

function returnData(d) {
  return d;
}

function findStrokeWidth(d) {
  return d / 2;
}

d3.select("body")
  .selectAll("p")
  .data(dataset)
  .enter()
  .append("p")
  .text(dataStrings)
  .style("color", setTextColor);

function dataStrings(d,i) {
  return "Array Element "+ (i + 1) + ": " + d;
}

function setTextColor(d) {
  if(d > 15) {
    return "red";
  } else {
    return "black";
  }
}
