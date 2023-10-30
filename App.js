import React from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'
// import Counter from './src/demonstration/Counter'
import { useGetWeather } from './src/hooks/useGetWeather'
import ErrorItem from './src/components/ErrorItem'

/*
Mensagem para mim mesmo em consultas:
Esse projeto não utiliza de useContext, um hook muito famoso que serve para acesso de informações
que estão muito longe na árvore. Funciona mais ou menos como StateManagement em flutter, para que,
nesse caso, você evite aninhamentos enormes de props entre os componentes!
Um exemplo simples: https://dev.to/ino_gu/utilizando-usecontext-no-react-4lh9
*/

const App = () => {
 const [loading, error, weather] = useGetWeather()
 console.log(loading, error, weather)

 if (weather && weather.list) {
  return (
   <NavigationContainer>
    <Tabs weather={weather} />
   </NavigationContainer>
  )
 }

 return (
  <View style={styles.container}>
   {error ? <ErrorItem /> : <ActivityIndicator size={'large'} color={'blue'} />}
  </View>
 )
}

const styles = StyleSheet.create({
 container: {
  justifyContent: 'center',
  flex: 1
 }
})

export default App
