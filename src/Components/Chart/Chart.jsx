import React from "react";
import './Chart.css'
import ChartBar from './ChartBar'

const Chart = (props) => {
    const dataBarValue = props.dataBars.map(dataBar => dataBar.value)
    const totalMax = Math.max(...dataBarValue)
    return(
        <div className="chart">
        {props.dataBars.map((dataBar) => <ChartBar value={dataBar.value} maxValue={totalMax} label={dataBar.label} key={dataBar.label}/>)}
        </div>
    )
}

export default Chart