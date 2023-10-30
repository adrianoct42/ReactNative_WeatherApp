import React from 'react'
import {
 SafeAreaView,
 View,
 Text,
 StyleSheet,
 FlatList,
 StatusBar,
 ImageBackground
} from 'react-native'
import ListItem from '../components/ListItem'

const DATA = [
 {
  dt_txt: '2021-02-18',
  main: {
   temp_max: 18,
   temp_min: 17
  },
  weather: [{ main: 'Clear' }]
 },
 {
  dt_txt: '2022-02-18',
  main: {
   temp_max: 28,
   temp_min: 27
  },
  weather: [{ main: 'Clouds' }]
 },
 {
  dt_txt: '2023-02-18',
  main: {
   temp_max: 38,
   temp_min: 37
  },
  weather: [{ main: 'Rain' }]
 }
]

const Empty = () => (
 <View>
  <Text>Empty!</Text>
 </View>
)

const UpcomingWeather = () => {
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
     data={DATA}
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
     ListEmptyComponent={<Empty />}
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
