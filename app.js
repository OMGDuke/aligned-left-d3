var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
                11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];
var width = 500;
var height = Math.max.apply(null, dataset) * 5;
var barPadding = 1;

var barSvg = d3.select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

barSvg.selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x", setBarX)
  .attr("y", setBarY)
  .attr("width", width / dataset.length - barPadding)
  .attr("height", setBarHeight)

function setBarX(d, i) {
  return i * (width / dataset.length);
}

function setBarY(d) {
  return height - d * 4 ;
}

function setBarHeight(d) {
  return d * 4;
}

var circleSvg = d3.select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

circleSvg.selectAll("circle")
  .data(dataset)
  .enter()
  .append("circle")
  .attr("cx", setCirclePosition)
  .attr("cy", height/2)
  .attr("r", returnData)
  .attr("fill", "yellow")
  .attr("stroke", "orange")
  .attr("stroke-width", findStrokeWidth);

function setCirclePosition(d,i) {
  return (i + 1) * (50 + d);
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
