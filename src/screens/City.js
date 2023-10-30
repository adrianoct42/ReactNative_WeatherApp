import React from 'react'
import {
 SafeAreaView,
 Text,
 StyleSheet,
 ImageBackground,
 StatusBar,
 View
} from 'react-native'
import IconText from '../components/IconText'

const City = () => {
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

 return (
  <SafeAreaView style={container}>
   <ImageBackground
    source={require('../../assets/city-background.jpg')}
    style={imageLayout}
   >
    <Text style={[cityName, cityText]}>London</Text>
    <Text style={[countryName, cityText]}>UK</Text>
    <View style={[populationWrapper, rowLayout]}>
     <IconText
      iconName={'user'}
      iconColor={'red'}
      bodyText={8000}
      bodyTextStyles={populationText}
     />
    </View>
    <View style={[riseSetWrapper, rowLayout]}>
     <IconText
      iconName={'sunrise'}
      iconColor={'black'}
      bodyText={'10:46:58am'}
      bodyTextStyles={riseSetText}
     />
     <IconText
      iconName={'sunset'}
      iconColor={'black'}
      bodyText={'17:28:15pm'}
      bodyTextStyles={riseSetText}
     />
    </View>
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
  fontSize: 24
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
