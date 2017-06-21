import React, { Component } from 'react';

import MenuBar from "./MenuBar";
import Mass from "./Mass";

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
