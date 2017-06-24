import React, { Component } from 'react';

import MenuBar from "./MenuBar";
import Mass from "../containers/Mass";

class App extends Component {

  render() {
    return (
      <div>
        <MenuBar/>
        <Mass/>
      </div>
    );
  }
}

export default App;
