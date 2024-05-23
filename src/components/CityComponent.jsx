import React, { useContext } from 'react'
import { PropsContext } from '../App'

const CityComponent = () => {
    const {city} = useContext(PropsContext);
  return (
    <>
    <div className="city">{city}</div>
    </>
  )
}

export default CityComponent
