var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
                11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];

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
