import React, { Component } from 'react';

class MenuBar extends Component {

  render() {

    const navbarStyle = {
        borderRadius: "0px",
        margin: "0px"
    }
    
    return (
      <div>
        <nav className="navbar navbar-inverse" style={navbarStyle}>
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">Data</a>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="#">Mass<span className="sr-only">(current)</span></a></li>
                    </ul>
                </div>
            </div>
        </nav>
      </div>
    );
  }
}

export default MenuBar;
