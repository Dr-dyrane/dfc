import React from 'react'
import TempChart from './charts/TempChart'
import RainChart from './charts/RainChart'

function Charts({weatherData}) {
  return (
    <div className='space-y-3 p-4'>
        <TempChart weatherData={weatherData}/>
        <RainChart weatherData={weatherData}/>
        </div>
  )
}

export default Charts