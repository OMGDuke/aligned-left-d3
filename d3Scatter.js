var dataset = [
  [5, 20], [480, 90], [250, 50], [100, 33], [330, 95], [410, 12], [475, 44],
  [25, 67], [85, 21], [220, 88]
];
var width = 500;
var height = 100

var svg = d3.select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

svg.selectAll("circle")
  .data(dataset)
  .enter()
  .append("circle")
  .attr("cx", setXValue)
  .attr("cy", setYValue)
  .attr("r", 5);

function setXValue(d) {
  return d[0];
}

function setYValue(d) {
  return height - d[1];
}

svg.selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .text(setLabel)
  .attr("x", setXValue)
  .attr("y", setYValue)
  .attr("font-family", "sans-serif")
  .attr("font-size", "11px")
  .attr("fill", "red");

function setLabel(d) {
  return d[0] + "," + d[1];
}
