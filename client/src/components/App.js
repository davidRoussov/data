import React, { Component } from 'react';

import MenuBar from "./MenuBar";
import MapTime from "../containers/MapTime";

class App extends Component {

  render() {
    return (
      <div>
        <MenuBar/>
        <MapTime/>
      </div>
    );
  }
}

export default App;
