var dataset = [
  [5, 20], [480, 90], [250, 50], [100, 33], [330, 95], [410, 12], [475, 44],
  [25, 67], [85, 21], [220, 88]
];
var width = 500;
var height = 100;
var padding = 20;

var xScale = d3.scaleLinear()
  .domain([0, d3.max(dataset, function(d) { return d[0]; })])
  .range([padding, width - padding * 2]);

var yScale = d3.scaleLinear()
  .domain([0, d3.max(dataset, function(d) { return d[1]; })])
  .range([height - padding, padding]);

var svg = d3.select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

svg.selectAll("circle")
  .data(dataset)
  .enter()
  .append("circle")
  .attr("cx", scaleXValue)
  .attr("cy", scaleYValue)
  .attr("r", 5);

function scaleXValue(d) {
   return xScale(d[0]);
 }

function scaleYValue(d) {
  return yScale(d[1]);
}

svg.selectAll("text")
   .data(dataset)
   .enter()
   .append("text")
   .text(function(d) {
      return d[0] + "," + d[1];
   })
   .attr("x", function(d) {
      return xScale(d[0]);
   })
   .attr("y", function(d) {
      return yScale(d[1]);
   })
   .attr("font-family", "sans-serif")
   .attr("font-size", "11px")
   .attr("fill", "red");
