import React, { Component } from 'react';
import { connect } from 'react-redux';


import MenuBar from "./MenuBar";
import MapTime from "./MapTime";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const showSpinner = this.props && this.props.app && this.props.app.pageSpinner;
    return (
      <div style={{textAlign: "center"}}>
        { showSpinner ? <i className="fa fa-circle-o-notch fa-spin" style={{marginTop: "25%", fontSize: "30px"}}></i>
                      : <div>
                          <MenuBar />
                          <MapTime /> 
                        </div>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state
};


export default connect(mapStateToProps, null)(App);
