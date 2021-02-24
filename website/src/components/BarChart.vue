<template>
<div class="mx-auto">   
  <svg id="chart"></svg>            
</div>
</template>
<script>
import * as d3 from "d3";
import colors from 'vuetify/lib/util/colors';
export default {
  name: 'BarChart',
  mounted() {
    window.addEventListener("resize", this.draw);
    this.draw();
  },
  computed: {
    datas() {
      return this.$store.state.guesses;
    }
  },
  methods: {
    draw() {
      const margin = { top: 40, right: 20, bottom: 10, left: 45 };
      const barHeight = 5;
      const boyColor = colors.blue.base;
      const girlColor = colors.pink.base;

      let xAxis = g => g
        .attr("transform", `translate(0,${margin.top})`);

      let yAxis = g => g
        .attr("transform", `translate(${margin.left},0)`);

      let svg = d3.select('body')
        .select('#chart')
        .attr("width", "100%");

      svg.append("g")
        .attr("class", "data-area")

      svg.append("g")
        .attr("class", "axis axis-x");

      svg.append("g")
        .attr("class", "axis axis-y");

      const x = d3.scaleLinear();
        
      const y = d3.scaleBand()
        .padding(0.3);

      var bounds = svg.node() ? svg.node().getBoundingClientRect(): { height: 50, width: 500 },
        width = bounds.width,
        height = bounds.height + (barHeight * this.datas.length) - margin.top - margin.bottom;

      x.domain([0, d3.max(this.datas, d => +d.value)])
        .range([margin.left, width - margin.right]);

      y.domain(d3.range(this.datas.length))
        .rangeRound([margin.top - (barHeight * 2), height - margin.bottom]);

      svg.select(".axis.label.x")
        .attr("transform", "translate(" + ((width / 2)) + ", 10)")

      const maxTicks = 10;
      const numOfTicks = Math.min(Math.round(Math.max(...this.datas.map(d => +d.value))), maxTicks);
      const tickFormat = x.tickFormat(20, "d");
      
      svg.select(".axis-x")
        .call(d3.axisTop(x).ticks(numOfTicks, tickFormat))
        .call(g => g.select(".domain").remove())
        .call(xAxis);

      svg.select(".axis-y")
        .call(d3.axisLeft(y).tickFormat(i => this.datas[i].name).tickSizeOuter(0))
        .call(yAxis);

      svg.select(".data-area")
        .selectAll("rect")
        .data(this.datas)
        .join("rect")
        .attr("fill", d => (d.name == 'Boy' ? boyColor : girlColor))
        .attr("opacity", d=> d.opacity)
        .attr("y", (d, i) => y(i))
        .attr("width", d => x(+d.value) - x(0))
        .attr("height", y.bandwidth())
        .attr("x", x(0));

    }
  }
}
</script>
<style scoped>

</style>