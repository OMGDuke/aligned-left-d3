var dataset = [ 5, 10, 15, 20, 25 ];

d3.select("body")
  .selectAll("p")
  .data(dataset)
  .enter()
  .append("p")
  .text(function(d, i) {
    return "Array Element "+ (i + 1) + ": " + d;
  })
  .style("color", function(d) {
    if(d > 15) {
      return "red";
    } else {
      return "black";
    }
  });

d3.select("body")
  .selectAll("div")
  .data(dataset)
  .enter()
  .append("div")
  .attr("class", "bar")
  .style("height", function(d) {
    var barHeight = d * 5;
    return barHeight + "px";
  });
