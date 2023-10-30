import React from 'react'
import {
 SafeAreaView,
 View,
 StyleSheet,
 FlatList,
 ImageBackground
} from 'react-native'
import ListItem from '../components/ListItem'

const UpcomingWeather = ({ weatherData }) => {
 const renderItem = ({ item }) => (
  <ListItem
   condition={item.weather[0].main}
   dt_txt={item.dt_txt}
   min={item.main.temp_min}
   max={item.main.temp_max}
  />
 )

 const { container, image } = styles
 // Com o feito acima, podemos simplesmente colocar o style como container,
 // e não como styles.container, simplificando o código.

 return (
  <SafeAreaView style={container}>
   <ImageBackground
    source={require('../../assets/upcoming-background.jpg')}
    style={image}
   >
    <FlatList
     data={weatherData}
     renderItem={renderItem}
     keyExtractor={(item) => item.dt_txt}
     ItemSeparatorComponent={() => (
      <View
       style={{
        backgroundColor: 'black',
        height: 5,
        marginTop: 20,
        marginBottom: 20
       }}
      />
     )}
    />
   </ImageBackground>
  </SafeAreaView>
 )
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  marginTop: 0, // StatusBar.currentHeight || 0,
  backgroundColor: 'royalblue'
 },
 image: {
  flex: 1
 }
})

export default UpcomingWeather
