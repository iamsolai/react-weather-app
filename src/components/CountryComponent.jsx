import React, { useContext } from 'react'
import { PropsContext } from '../App'

const CountryComponent = () => {
    const {country} = useContext(PropsContext)
    return (
        <>
        <div className="country">{country}</div>
        </>
    )
}

export default CountryComponent
