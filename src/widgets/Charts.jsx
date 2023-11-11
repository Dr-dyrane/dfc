import React from 'react'
import TempChart from './charts/TempChart'

function Charts({weatherData}) {
  return (
    <div className='space-y-3 p-4'><TempChart weatherData={weatherData}/></div>
  )
}

export default Charts