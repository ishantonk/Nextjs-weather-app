import Image from 'next/image';
import React from 'react';
import moment from 'moment';

const Weather = ({ data }) => {
    console.log(data);
    const { base, clouds, cod, coord, dt, id, main, name, sys, timezone, visibility, weather, wind } = data;
    const { feels_like, humidity, pressure, temp, temp_max, temp_min } = main;
    const { description, icon, id: weatherId, main: weatherMain } = weather[0];
    const { country, sunrise, sunset } = sys;
    const { speed, gust, deg } = wind;
    const { lon: latitude, lat: longitude } = coord;
    const time = moment.unix(dt).format('h:mm a');
    const date = moment.unix(dt).format('dddd, MMMM Do YYYY');
    const timeZone = moment.unix(timezone).format('Z');
    const sunriseTime = moment.unix(sunrise).format('h:mm a');
    const sunsetTime = moment.unix(sunset).format('h:mm a');



    return (
        <div className="weather flex flex-col justify-center items-center w-11/12 lg:w-9/12 h-full bg-white/60 p-4 mx-auto shadow-lg border-2 border-transparent focus-within:border-gray-300 rounded-lg my-5 relative z-10 overflow-hidden backdrop-blur-xl">
            <div className="weather__header flex flex-col gap-y-4 gap-x-40 md:flex-row-reverse lg:flex-row-reverse items-center justify-center p-10 rounded-lg bg-white/40">
                <div className="weather__header__title-container flex flex-col items-center justify-center">
                    <h1 className="weather__header__title text-3xl font-bold text-gray-800">{name}</h1>
                    <div className="weather__header__subtitle flex flex-row items-center justify-center text-gray-600 text-sm">
                        {country}
                        <div className='flex flex-col items-center ml-2'>
                            <Image
                                src={`https://countryflagsapi.com/png/${country}`}
                                alt={country}
                                width={30}
                                height={20}
                            />
                        </div>
                    </div>
                </div>
                <div className="weather__header__time-container flex flex-col items-center justify-center">
                    <h2 className="weather__header__time text-xl font-medium text-gray-600">{time}</h2>
                    <h2 className="weather__header__date text-xl font-medium text-gray-600">{date}</h2>
                </div>
            </div>
            <div className="weather__body flex flex-col items-center justify-center gap-y-4 gap-x-40 md:flex-row lg:flex-row">
                <div className="weather__main-info flex flex-col items-center justify-center gap-y-4 gap-x-40">
                    <div className="weather__main-temp flex justify-center items-center">
                        <div className="weather__main-temp-icon flex items-center">
                            <Image
                                src={`http://openweathermap.org/img/wn/${icon}@4x.png`}
                                alt={weatherMain}
                                width={100}
                                height={100}
                            />
                        </div>
                        <p className='font-semibold text-6xl'>{Math.round(temp)}°C</p>
                    </div>
                    <div className="weather__main-description flex flex-col items-center justify-center gap-y-4">
                        <p className='font-medium text-gray-600'>{description}</p>
                    </div>
                </div>
                <div className="weather__details flex flex-col gap-4 border border-gray-400 border-opacity-50 border-transparent p-4 rounded-lg mt-20">
                    <div className="weather__details-row flex flex-row justify-around align-middle text-gray-700 text-lg font-medium gap-4">
                        <div className="weather__details-item p-2 flex flex-col items-center">
                            <p className='font-semibold'>{Math.round(feels_like)}°C</p>
                            <p className='font-medium'>Feels like</p>
                        </div>
                        <div className="weather__details-item p-2 flex flex-col items-center">
                            <p className='font-semibold'>{humidity}%</p>
                            <p className='font-medium'>Humidity</p>
                        </div>
                        <div className="weather__details-item p-2 flex flex-col items-center">
                            <p className='font-semibold'>{pressure}hPa</p>
                            <p className='font-medium'>Pressure</p>
                        </div>
                    </div>
                    <div className="weather__details-row flex flex-row justify-around align-middle text-gray-700 text-lg font-medium gap-4">
                        <div className="weather__details-item p-2 flex flex-col items-center">
                            <p className='font-semibold'>{speed}m/s</p>
                            <p className='font-medium'>Wind speed</p>
                        </div>
                        <div className="weather__details-item p-2 flex flex-col items-center">
                            <p className='font-semibold'>{deg}°</p>
                            <p className='font-medium'>Wind direction</p>
                        </div>
                        <div className="weather__details-item p-2 flex flex-col items-center">
                            <p className='font-semibold'>{gust}m/s</p>
                            <p className='font-medium'>Gust</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="weather__footer flex flex-row items-center justify-center gap-x-48 p-10 rounded-lg shadow-l g-10 border-2 border-transparent focus-within:border-gray-300 focus-within:shadow-none focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-offset-opacity-50 focus-within:ring-opacity-50 focus-within:ring-transparent text-gray-600">
                <div className="weather__footer-row flex flex-row justify-between items-center gap-4 p-4">
                    <div className="weather__footer-item flex flex-col items-center">
                        <p className='font-medium'>{Math.round(temp_min)}°C</p>
                        <p className='font-medium'>Min</p>
                    </div>
                    <div className="weather__footer-item flex flex-col items-center">
                        <p className='font-medium'>{Math.round(temp_max)}°C</p>
                        <p className='font-medium'>Max</p>
                    </div>
                </div>
                <div className="weather__footer-row flex flex-row justify-between items-center gap-4 p-4">
                    <div className="weather__footer-item flex flex-col items-center">
                        <p className='font-medium'>{sunriseTime}</p>
                        <p className='font-medium'>Sunrise</p>
                    </div>
                    <div className="weather__footer-item flex flex-col items-center">
                        <p className='font-medium'>{sunsetTime}</p>
                        <p className='font-medium'>Sunset</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Weather;