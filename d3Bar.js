var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13, 11, 12, 15, 20, 18, 17,
                16, 18, 23, 25 ];
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
  .attr("fill", setBarColor);

function setBarX(d, i) {
  return i * (width / dataset.length);
}

function setBarY(d) {
  return height - d * 4 ;
}

function setBarHeight(d) {
  return d * 4;
}

function setBarColor(d) {
  return "rgb(0, 0, " + (d * 10) + ")";
}

barSvg.selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .text(returnData)
  .attr("x", setLabelX)
  .attr("y", setLabelY)
  .attr("font-family", "sans-serif")
  .attr("font-size", "11px")
  .attr("fill", "white")
  .attr("text-anchor", "middle");

function returnData(d) {
  return d;
}

function setLabelX(d, i) {
  return i * (width / dataset.length) + (width / dataset.length - barPadding) / 2;
}

function setLabelY(d) {
  return height - (d * 4) + 14;
}
