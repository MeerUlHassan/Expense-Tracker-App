import React from 'react'

export default function ChartBar() {
  let barFillHeight = '0%';
  if(props.maxValue>0)
  {
      barFillHeight = MATH.round((props.value/props.maxValue)*100) + '%';
  }
    return (
      <div className='chart-bar'>
          <div className='chart-bar_inner'>
              <div className='chart-bar_fill' style={{'height': barFillHeight}}></div>
          </div>
          <div className='chart-bar_label'> 
              {props.label}
          </div>
      </div>
    );
}

export default ChartBar
