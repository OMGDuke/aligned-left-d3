// var dataset = [
//   [5, 20], [480, 90], [250, 50], [100, 33], [330, 95], [410, 12], [475, 44],
//   [25, 67], [85, 21], [220, 88], [600, 150]
// ];

var dataset = [];
var numDataPoints = 50;
var xRange = Math.random() * 1000;
var yRange = Math.random() * 1000;
for (var i = 0; i < numDataPoints; i++) {
    var newNumber1 = Math.round(Math.random() * xRange);
    var newNumber2 = Math.round(Math.random() * yRange);
    dataset.push([newNumber1, newNumber2]);
}

var width = 500;
var height = 200;
var padding = 30;

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

var xAxis = d3.axisBottom()
  .scale(xScale)
  .ticks(5);

svg.append("g")
  .attr("class", "axis")
  .attr("transform", "translate(0," + (height - padding) + ")")
  .call(xAxis);

var yAxis = d3.axisLeft()
  .scale(yScale)
  .ticks(5);

svg.append("g")
  .attr("class", "axis")
  .attr("transform", "translate(" + padding + ", 0)")
  .call(yAxis);
