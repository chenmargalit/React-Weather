import React from 'react';

const Weather = props => (
            <div className="weather__info">
                 {
                     props.city && <p className="weather__key"> City:
                     <span className="weather__value"> {props.city}</span> </p> }
                 {
                     props.country && <p className="weather__key"> Country: 

                      <span className="weather__value"> {props.country}</span> </p> }
                 {
                     props.temperature && <p className="weather__key"> Temperature:

                    <span className="weather__value">  
                    
                    <span className="weather__value"></span> {props.temperature}</span> </p> }
                    {
                     props.description && <p className="weather__key"> Forecast:

                    <span className="weather__value">  
                    
                    <span className="weather__value"></span> {props.description}</span> </p> }
                 {
                     props.humidity  && <p className="weather__key">
                    
                    Humidity: <span className="weather__value"> {props.humidity}% </span> </p> 
                }
        
                 {props.error && <p className="weather__key">
                 <span className="weather__value"> {props.error}</span></p>}
    
            </div>
        );


export default Weather;