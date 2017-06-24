import React, { Component } from "react";
import { connect } from "react-redux";

import { getData } from '../actions/mass';

import DataEntry from "../components/DataEntry";
import ChartView from "../components/ChartView";

class Mass extends Component {

    render() {

        const dataEntryStyle = {
            float: "left",
            width: "20%",
            padding: "8px"
        };

        const chartViewStyle = {
            marginLeft: "20%"
        }

        return (
            <div>
                <div style={dataEntryStyle}>
                    <DataEntry massHistory={this.props.mass.massHistory}/>
                </div>
                <div style={chartViewStyle}>
                    <ChartView massHistory={this.props.mass.massHistory}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
  return state
};

const mapDispatchToProps = {
  onLoadMass: getData
};

export default connect(mapStateToProps, mapDispatchToProps)(Mass);

