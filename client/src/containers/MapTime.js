import React, { Component } from "react";
import { connect } from "react-redux";

import { getTimeValueData } from '../actions/mapTime';

import DataEntry from "../components/DataEntry";
import ChartView from "../components/ChartView";

class MapTime extends Component {

    componentDidMount() {
        this.props.loadData("mass");
    }

    render() {

        const dataEntryStyle = {
            float: "left",
            width: "20%",
            padding: "8px"
        };

        const chartViewStyle = {
            marginLeft: "20%"
        }

        const data = (this.props && this.props.timeValueData) ? this.props.timeValueData : [];
        const pruned = data.map(row => {
            const newKeys = Object.keys(row).map(key => {
                if (key.includes("_time")) return {"time": row[key]}
                else if (key.includes("_value")) return {"value": row[key]}
            })
            return Object.assign({}, newKeys[0], newKeys[1]);
        });

        return (
            <div>
                <div style={dataEntryStyle}>
                    <DataEntry timeValueData={pruned}/>
                </div>
                <div style={chartViewStyle}>
                    <ChartView timeValueData={pruned}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
  return state
};

const mapDispatchToProps = {
  loadData: getTimeValueData
};

export default connect(mapStateToProps, mapDispatchToProps)(MapTime);

