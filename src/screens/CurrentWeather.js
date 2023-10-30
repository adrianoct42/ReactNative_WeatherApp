import React from 'react'
import { StyleSheet, View, Text, SafeAreaView } from 'react-native'
import { Feather } from '@expo/vector-icons'
import RowText from '../components/RowText'
import { weatherType } from '../utilities/WeatherType'

const CurrentWeather = ({ weatherData }) => {
 const {
  wrapper,
  container,
  tempStyles,
  feels,
  highLowWrapper,
  highLow,
  bodyWrapper,
  description,
  message
 } = styles

 const {
  main: { temp, feels_like, temp_max, temp_min },
  weather
 } = weatherData

 console.log(weatherData)

 const weatherCondition = weather[0]?.main

 return (
  <SafeAreaView
   style={[
    wrapper,
    { backgroundColor: weatherType[weatherCondition]?.backgroundColor }
   ]}
  >
   <View style={container}>
    <Feather
     name={weatherType[weatherCondition]?.icon}
     size={100}
     color="black"
    />
    <Text style={tempStyles}>{`Temperature: ${temp}°`}</Text>
    <Text style={feels}>{`Feels like: ${feels_like}°`}</Text>
    <RowText
     messageOne={`High: ${temp_max}° / `}
     messageTwo={`Low: ${temp_min}°`}
     containerStyles={highLowWrapper}
     messageOneStyles={highLow}
     messageTwoStyles={highLow}
    />
    <RowText
     messageOne={weather[0]?.description.toUpperCase()}
     messageTwo={weatherType[weatherCondition]?.message}
     containerStyles={bodyWrapper}
     messageOneStyles={description}
     messageTwoStyles={message}
    />
   </View>
  </SafeAreaView>
 )
}

const styles = StyleSheet.create({
 wrapper: {
  flex: 1
 },
 container: {
  flex: 1,
  alignItems: 'center', // Centraliza horizontalmente (como mainAxisAlingment numa ROW)
  justifyContent: 'center' // Centraliza verticalmente (como mainAxisAlingment numa COLUMN)
 },
 tempStyles: {
  color: 'black',
  fontSize: 30,
  marginTop: 15
 },
 feels: {
  fontSize: 30,
  color: 'black'
 },
 highLowWrapper: {
  flexDirection: 'row'
 },
 highLow: {
  color: 'black',
  fontSize: 20
 },
 bodyWrapper: {
  justifyContent: 'flex-end',
  alignItems: 'flex-star',
  paddingLeft: 25,
  marginBottom: 40,
  marginTop: 60
 },
 description: {
  fontSize: 28
 },
 message: {
  fontSize: 18
 }
})

export default CurrentWeather
