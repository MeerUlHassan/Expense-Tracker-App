import React from 'react'

const ChartBar = (props) => {
  let barFilHeight = '0%';
  if (props.maxValue > 0 ){
    barFilHeight =Math.round((props.value / props.maxValue) * 100) + '%';
  }
  return (
    <div>
      <div>
        <div className='chart-bar_fill' style={{height: barFilHeight}}>

        </div>
      </div>
      <div className='chart-bar_label'>{props.label}</div>
    </div>
  )
}

export default ChartBar
