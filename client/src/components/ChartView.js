import React, { Component } from "react";
import { scaleLinear } from "d3-scale";
import { max } from "d3-array";
import { select } from "d3-selection";

import * as d3 from "d3";

class ChartView extends Component {
    componentDidMount() {
        this.createLineChart();
    }

    createLineChart() {
        
        let margin = {top: 30, right: 20, bottom: 30, left: 50},
            width = 960 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;

        let parseTime = d3.timeParse("%Y-%m-%dT%H:%M:%S.%LZ");

        let x = d3.scaleTime().range([0, width]);
        let y = d3.scaleLinear().range([height, 0]);

        let valueLine = d3.line()
            .x(d => x(d.date))
            .y(d => y(d.mass));

        let node = this.node;
        let svg = d3.select(node)
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
                .attr("transform", `translate(${margin.left},${margin.top})`)


        this.props.massHistory.forEach(d => {
            d.date = parseTime(d.date);
            d.mass = +d.mass;
        });

        x.domain(d3.extent(this.props.massHistory, d => d.date));
        y.domain([0, d3.max(this.props.massHistory, d => d.mass)]);

        svg.append("path")
            .data([this.props.massHistory])
            .attr("class", "line")
            .attr("d", valueLine)
            .style("fill", "none")
            .style("stroke", "#000");

        svg.append("g")
            .attr("transform", `translate(0, ${height})`)
            .call(d3.axisBottom(x));

        svg.append("g")
            .call(d3.axisLeft(y));
        
    }

    createBarChart() {
        const node = this.node;
        const dataMax = max(this.props.data)
        const yScale = scaleLinear()
            .domain([0, dataMax])
            .range([0, this.props.size[1]])

        select(node)
            .selectAll('rect')
            .data(this.props.data)
            .enter()
            .append('rect')

        select(node)
            .selectAll('rect')
            .data(this.props.data)
            .exit()
            .remove()

        select(node)
            .selectAll('rect')
            .data(this.props.data)
            .style('fill', '#fe9922')
            .attr('x', (d,i) => i * 25)
            .attr('y', d => this.props.size[1] - yScale(d))
            .attr('height', d => yScale(d))
            .attr('width', 25)

    }  

    render() {
        return (
            <div>
                <svg ref={node => this.node = node} width="960" height="500"></svg>
            </div>
        )
    }
}

export default ChartView;