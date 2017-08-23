import React, { Component } from "react";
import * as d3 from "d3";

class ChartView extends Component {
    componentDidUpdate() {
        // clear any existing charts first
        const svg = document.getElementById('chartSVG');
        while (svg.firstChild) {
            svg.removeChild(svg.firstChild);
        }

        this.data = JSON.parse(JSON.stringify((this.props && this.props.timeValueData) ? this.props.timeValueData : []));
        this.createLineChart();
    }

    createLineChart() {
        const node = this.node;

        const margin = {top: 30, right: 20, bottom: 60, left: 50},
            width = Number(d3.select(node).style("width").slice(0, -2)) - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;

        const parseTime = d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ");

        const x = d3.scaleTime().range([0, width]);
        const y = d3.scaleLinear().range([height, 0]);

        const valueLine = d3.line()
            .x(d => x(d.time))
            .y(d => y(d.value));

        const svg = d3.select(node)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
                .attr("transform", `translate(${margin.left},${margin.top})`)


        this.data.forEach(d => {
            d.time = parseTime(d.time);
            d.value = +d.value;
        });

        x.domain(d3.extent(this.data, d => d.time));
        y.domain([0, d3.max(this.data, d => d.value)]);

        svg.append("path")
            .data([this.data])
            .attr("class", "line")
            .attr("d", valueLine)
            .style("fill", "none")
            .style("stroke", "#DC143C");

        svg.append("g")
            .attr("transform", `translate(0, ${height})`)
            .call(d3.axisBottom(x));

        // svg.append("text")
        //     .attr("transform", `translate(${width/2},${height + margin.top + 20})`)
        //     .style("text-anchor", "middle")
        //     .text("Time");

        svg.append("g")
            .call(d3.axisLeft(y));

        svg.append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 0 - margin.left)
            .attr("x", 0 - (height / 2))
            .attr("dy", "1em")
            .style("text-anchor", "middle")
            .text("Rating")

        svg.selectAll("axisElement")
          .classed("large-font", true);
    }

    render() {

        const style = {
            svg: {
                padding: "8px"                
            },
            container: {
                width: '100%',
                height: '100%'
            }
        };

        return (
            <div style={style.container}>
                <svg id='chartSVG' style={style.svg} ref={node => this.node = node} width="100%"></svg>
            </div>
        )
    }
}

export default ChartView;