
import clear_img from '../projectImages/clear.png'
import cloud_img from '../projectImages/cloud.png'
import rain_img from '../projectImages/rain.png'
import drizzle_img from '../projectImages/drizzle.png'
import snow_img from '../projectImages/snow.png'



import { useEffect, useState } from 'react';



const AppCard = () => {
   const API_key="09ee6e7bdc7f8661ba62f7e77588cb7e"
   const [city,setCity] =useState("")
   const [data,setData] =useState({})
   const appIcon ={
    "01d": clear_img,
    "01n": clear_img,
    "02d": cloud_img,
    "02n": cloud_img,
    "03d": cloud_img,
    "03n": cloud_img,
    "04d": drizzle_img,
    "04n": drizzle_img,
    "09d": rain_img,
    "09n": rain_img,
    "10d": rain_img,
    "10n": rain_img,
    "13d": snow_img,
    "13n": snow_img,
   }
    const fetchweather = async(city)=>{
         try{ 
          const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_key}`)
        
          const readings = await result.json()
          console.log(readings)
        
           const image=(appIcon[readings.weather[0].icon])||(clear_img);


          setData({
            temperature: Math.floor(readings.main.temp ),
            cityname:readings.name,
            wind:readings.wind.speed,
            humidity:readings.main.humidity,
            icon:image,
          });
    } 
          catch (error){
            console.error('Error fetching weather data:', error);
          }
  }
  const handlesubmit=(e)=>{
    e.preventDefault()
    fetchweather(city)
    setCity("")
  }
  useEffect(()=>{
    fetchweather(city)
  },[])
    
    return (
      <div className="mainInfo">
        <div className="card">
            <div className="searchbar">
            <form onSubmit={handlesubmit} >
            <input type="text" required placeholder="City.." value={city} onChange={(e)=> setCity(e.target.value)} />
            <button type='submit'  >
               Go
            </button>
          </form>
            </div>
            <div className="icons">
        <img src={data.icon||clear_img} alt="Weather Icon" />
          <p className='temperature'> {data.temperature}°C</p>
          <p className='location' >{data.cityname}</p>
            </div>
            <div className="addIcons">
              <div className="humidity">
            
                <div className="humidityContent">
                <p className='humidity_val'>Humidity</p>
                <p style={{display:'flex', justifyContent:'center'}}>{data.humidity}%</p>
                </div>
              </div>
              <div className="wind">
          
                <div className="windContent">
                <p className='wind_val'>Wind Speed</p>
                <p style={{display:'flex',justifyContent:'center'}}>{data.wind} km/h</p>
                </div>

              </div>
            </div>
      </div>
        </div>

        
    );
  }
  
  export default AppCard;
