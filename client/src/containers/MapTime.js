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

        const data = (this.props && this.props.mapTime.timeValueData) ? this.props.mapTime.timeValueData : [];

        return (
            <div>
                 <div style={dataEntryStyle}>
                    <DataEntry timeValueData={data}/>
                </div>
                <div style={chartViewStyle}>
                    <ChartView timeValueData={data}/>
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

