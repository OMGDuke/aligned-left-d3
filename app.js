var dataset = [ 25, 7, 5, 26, 11, 8, 25, 14, 23, 19, 14, 11, 22, 29, 11, 13, 12,
                17, 18, 10, 24, 18, 25, 9, 3 ];


d3.select("body")
  .selectAll("div")
  .data(dataset)
  .enter()
  .append("div")
  .attr("class", "bar")
  .style("height", setBarHeights);

d3.select("body")
  .selectAll("p")
  .data(dataset)
  .enter()
  .append("p")
  .text(function(d, i) {
    return "Array Element "+ (i + 1) + ": " + d;
  })
  .style("color", setTextColor);

function setBarHeights(d) {
    var barHeight = d * 5;
    return barHeight + "px";
}

function setTextColor(d) {
  if(d > 15) {
    return "red";
  } else {
    return "black";
  }
}
