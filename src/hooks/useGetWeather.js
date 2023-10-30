import { useState, useEffect } from 'react'
import * as Location from 'expo-location'
import { WEATHER_API_KEY } from '@env'

// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

export const useGetWeather = () => {
 const [loading, setLoading] = useState(true)
 const [error, setError] = useState(null)
 const [weather, setWeather] = useState([])
 const [lat, setLat] = useState([])
 const [lon, setLon] = useState([])

 const fetchWeatherData = async () => {
  try {
   const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
   )
   const data = await res.json()
   setWeather(data)
  } catch (error) {
   setError('Could not fetch weather.')
  } finally {
   setLoading(false)
  }
 }

 useEffect(() => {
  // eslint-disable-next-line prettier/prettier
     (async () => {
   let { status } = await Location.requestForegroundPermissionsAsync()
   if (status !== 'granted') {
    setError('permission to acess location was denied.')
    return
   }
   let location = await Location.getCurrentPositionAsync({})
   setLat(location.coords.latitude)
   setLon(location.coords.longitude)
   await fetchWeatherData()
  })() // Esse () no final é para IMEDIATAMENTE INVOCARMOS essa função bitela.
  // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [lat, lon]) // Se esse [] estiver vazio nos argumentos, significa que o useEffect só será executado UMA ÚNICA VEZ.
 return [loading, error, weather]
}
