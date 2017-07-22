import React, { Component } from "react";
import { connect } from "react-redux";

import { getTimeValueData } from '../actions/mapTime';

import DataEntry from "../components/DataEntry";
import ChartView from "../components/ChartView";

class MapTime extends Component {

  constructor() {
    super();
    this.state = { currentMapping: null };
  }

  componentDidUpdate() {
    const propsMapping = this.props.mapTime.currentMapping;
    if (propsMapping && propsMapping !== this.state.currentMapping) {
      this.setState({ currentMapping: propsMapping });
      this.props.getTimeValueData(propsMapping);
    }
  }

  render() {

      const style = {
        dataEntry: {
          height: '100%'
        },
        chartView: {
          height: '100%'
        },
        container: {
          height: '100%',
          width: '100%',
          display: ((this.props.app.mapTimeVisible) ? 'inline' : 'none')
        }
      }

      const data = (this.props && this.props.mapTime.timeValueData) ? this.props.mapTime.timeValueData : [];
      
      return (
        <div style={style.container} className="container">
          <div className="row">
            <div style={style.dataEntry} className="col-md-3">
              <DataEntry timeValueData={data} currentMapping={this.state.currentMapping}/>
            </div>
            <div style={style.chartView} className="col-md-9">
              <ChartView timeValueData={data} currentMapping={this.state.currentMapping}/>
            </div> 
          </div>
        </div>
      )
  }
}

const mapStateToProps = state => {
  return state
};

const mapDispatchToProps = {
  getTimeValueData
};

export default connect(mapStateToProps, mapDispatchToProps)(MapTime);

