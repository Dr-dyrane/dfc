import React from 'react'
import TempChart from './charts/TempChart'
import RainChart from './charts/RainChart'
import HumidityChart from './charts/HumidityChart'

function Charts({weatherData}) {
  return (
    <div className='space-y-3 p-4'>
        <TempChart weatherData={weatherData}/>
        <RainChart weatherData={weatherData}/>
        <HumidityChart weatherData={weatherData}/>
        </div>
  )
}

export default Charts