import React, { Component } from "react";

import DataEntry from "./DataEntry";
import ChartView from "./ChartView";

const tempData = [
    {date: "1", mass: "10"},
    {date: "2", mass: "12"},
    {date: "3", mass: "11"},
    {date: "4", mass: "14"},
    {date: "5", mass: "13"},
    {date: "6", mass: "11"},
    {date: "7", mass: "15"},
    {date: "8", mass: "18"}
];

class Mass extends Component {

    render() {

        const dataEntryStyle = {
            float: "left",
            width: "20%"
        };

        const chartViewStyle = {
            marginLeft: "20%"
        }

        return (
            <div>
                <div style={dataEntryStyle}>
                    <DataEntry massHistory={tempData}/>
                </div>
                <div style={chartViewStyle}>
                    <ChartView massHistory={tempData} data={[5,10,1,3]} size={[500,500]}/>
                </div>
            </div>
        )
    }
}

export default Mass;