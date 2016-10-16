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
  .attr("fill", "teal");

function setBarX(d, i) {
  return i * (width / dataset.length);
}

function setBarY(d) {
  return height - d * 4 ;
}

function setBarHeight(d) {
  return d * 4;
}
