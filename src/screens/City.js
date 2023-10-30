import React from 'react'
import {
 SafeAreaView,
 Text,
 StyleSheet,
 ImageBackground,
 View
} from 'react-native'
import IconText from '../components/IconText'
import moment from 'moment'
// import OurButton from '../demonstration/OurButton'

const City = ({ weatherData }) => {
 const {
  container,
  cityName,
  cityText,
  countryName,
  populationWrapper,
  populationText,
  riseSetWrapper,
  riseSetText,
  rowLayout,
  imageLayout
 } = styles

 const { name, country, population, sunrise, sunset } = weatherData

 return (
  <SafeAreaView style={container}>
   <ImageBackground
    source={require('../../assets/city-background.jpg')}
    style={imageLayout}
   >
    <Text style={[cityName, cityText]}>{name}</Text>
    <Text style={[countryName, cityText]}>{country}</Text>
    <View style={[populationWrapper, rowLayout]}>
     <IconText
      iconName={'user'}
      iconColor={'red'}
      bodyText={`Population: ${population}`}
      bodyTextStyles={populationText}
     />
    </View>
    <View style={[riseSetWrapper, rowLayout]}>
     <IconText
      iconName={'sunrise'}
      iconColor={'black'}
      bodyText={moment(sunrise).format('h:mm:ss a')}
      bodyTextStyles={riseSetText}
     />
     <IconText
      iconName={'sunset'}
      iconColor={'black'}
      bodyText={moment(sunset).format('h:mm:ss a')}
      bodyTextStyles={riseSetText}
     />
    </View>
    {/*<OurButton />*/}
   </ImageBackground>
  </SafeAreaView>
 )
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  marginTop: 0 // StatusBar.currentHeight || 0
 },
 imageLayout: {
  flex: 1
 },
 cityName: {
  marginTop: 8,
  fontSize: 22
 },
 countryName: {
  fontSize: 16
 },
 cityText: {
  justifyContent: 'center',
  alignSelf: 'center',
  fontWeight: 'bold',
  color: 'white'
 },
 populationWrapper: {
  justifyContent: 'center',
  marginTop: 30
 },
 populationText: {
  fontSize: 16,
  marginLeft: 8,
  color: 'red'
 },
 riseSetWrapper: {
  justifyContent: 'space-around',
  marginTop: 30
 },
 riseSetText: {
  fontSize: 16,
  color: 'black'
 },
 rowLayout: {
  flexDirection: 'row',
  alignItems: 'center'
 }
})

export default City
