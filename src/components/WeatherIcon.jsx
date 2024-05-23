import React, { useContext } from 'react'
import { PropsContext } from '../App';
import TempComponent from './TempComponent';
import CityComponent from './CityComponent';
import CountryComponent from './CountryComponent';
import CoordinatesComponent from './CoordinatesComponent';
import DataComponent from './DataComponent';

const WeatherIcon = () => {
    const { icon } = useContext(PropsContext);
    return (
        <>
            <div className='icon-wrapper'>
                <img src={icon} alt='Image' />
            </div>
            <TempComponent />
            <CityComponent />
            <CountryComponent />
            <CoordinatesComponent />
            <DataComponent />
        </>
    )
}

export default WeatherIcon
