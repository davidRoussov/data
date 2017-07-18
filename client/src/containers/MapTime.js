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

      const style = {
        dataEntry: {
          float: "left",
          width: "20%",
          height: '100%'
        },
        chartView: {
          marginLeft: "20%",
          height: '100%'
        },
        container: {
          height: '100%',
          width: '100%'
        }
      }

      const data = (this.props && this.props.mapTime.timeValueData) ? this.props.mapTime.timeValueData : [];

      return (
        <div style={style.container}>
          <div style={style.dataEntry}>
              <DataEntry timeValueData={data}/>
          </div>
          <div style={style.chartView}>
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

