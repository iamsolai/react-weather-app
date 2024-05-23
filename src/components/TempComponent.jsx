import React, { useContext } from 'react'
import { PropsContext } from '../App'

const TempComponent = () => {
    const {temp} = useContext(PropsContext);
  return (
    <>
      <div className="temp">{temp}°C</div>
    </>
  )
}

export default TempComponent
