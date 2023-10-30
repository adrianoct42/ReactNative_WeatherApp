import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const OurButton = () => {
 const onPress = () => {
  console.log('I was pressed! :)')
 }

 return (
  <TouchableOpacity onPress={onPress} style={styles.container}>
   <Text style={styles.buttonText}>Button Demo</Text>
  </TouchableOpacity>
 )
}

const styles = StyleSheet.create({
 container: {
  elevation: 8,
  backgroundColor: 'blue',
  borderRadius: 10,
  padding: 4
 },
 buttonText: {
  fontSize: 16,
  color: 'white',
  alignSelf: 'center'
 }
})

export default OurButton
