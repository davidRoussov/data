import React, { Component } from "react";
import { connect } from "react-redux";

import { getTimeValueData } from '../actions/mapTime';

import DataEntry from "../components/DataEntry";
import ChartView from "../components/ChartView";

class MapTime extends Component {

  constructor() {
    super();
    this.state = { currentMapping: { id: null } };
  } 

  componentDidUpdate() {
    // if(
    //   this.props &&
    //   this.props.mapTime &&
    //   this.props.mapTime.currentMapping &&
    //   this.props.mapTime.currentMapping.id &&
    //   this.state.currentMapping &&
    //   this.state.currentMapping.id &&
    //   this.props.mapTime.currentMapping.id !== this.state.currentMapping.id ||
    //   !this.state.currentMapping
    // ) {
    //   this.setState({ currentMapping: this.props.mapTime.currentMapping }, () =>
    //   this.props.getTimeValueData(this.state.currentMapping.id));
    // }


    // try {
    //   if((!this.state.currentMapping && this.props.mapTime.currentMapping.id) || this.props.mapTime.currentMapping.id !== this.state.currentMapping.id) {
    //     this.setState({ currentMapping: this.props.mapTime.currentMapping }, () =>
    //       this.props.getTimeValueData(this.state.currentMapping.id));
    //   }
    // } catch(error) {

    // }

    // if(this.props.mapTime && this.props.mapTime.currentMapping && !this.banana) {
    //   console.log(this.state.currentMapping);
    //   this.banana = true;
    //   this.setState({ currentMapping: this.props.currentMapping }, () => {
    //     debugger;
    //     var test = 2;
    //   });
    // }

    try {
      const propsMapping = this.props.mapTime.currentMapping.id;
      if (propsMapping && propsMapping !== this.state.currentMapping.id) {
        this.setState({ currentMapping: this.props.mapTime.currentMapping });
        this.props.getTimeValueData(propsMapping);
      }
    } catch(err) {}
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

