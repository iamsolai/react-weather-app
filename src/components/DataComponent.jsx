import React, { useContext } from 'react'
import HumidityIcon from '../assets/humidity.png'
import WindIcon from '../assets/wind.png'
import { PropsContext } from '../App'

const DataComponent = () => {

    const {humidity, wind} = useContext(PropsContext);
    return (
        <>
            <div className="data-container">
                <div className="element">
                    <img src={HumidityIcon} alt="humidity" className='icon' />
                    <div className="data">
                        <div className="humidity-percent">{humidity}%</div>
                        <div className="data-text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src={WindIcon} alt="wind" className='icon' />
                    <div className="data">
                        <div className="wind-percent">{wind} km/h</div>
                        <div className="data-text">Wind speed</div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default DataComponent
