import React, { useState, useEffect } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const Counter = () => {
 // let count = 0

 // O counter está sendo atualizado ao tocar no botão, mas a tela não atualiza o resultado!
 // O motivo é porque o React Native nao renderiza o componente novamente só porque o valor duma variável mudou!
 // É por isso que devemos usar STATE aqui. Pois quando o state muda, aquele componente se renderizará novamente.

 // Usando state, os valores serão atualizados quando forem necessários!

 const [count, setCount] = useState(0)
 const [newCount, setNewCount] = useState(0)
 // count --> Variável // setCount --> Função que vai mudar a variável // useState(0) --> valor inicial desse State, 0 no caso.

 // useEffect()
 // O código dentro desse efeito será executado toda vez que houver atualização nele.
 // Você pode passar, opcionalmente, um array após a {} do useEffect, para que SOMENTE OS COMPONENTES DENTRO
 // DAQUELE ARRAY SERÃO TRIGGERS para a execução do useEffect nesse componente que o chama.
 // Não passando o parâmetro opcional, qualquer renderização extra executará o useEffect.

 // Repare.. Apertar qualquer um desses botões NÃO ATIVA O USEEFFECT, pelo
 // parâmetro opcional que passamos...

 useEffect(() => {
  console.log(`Our count value is: ${count}`)
  return () => {
   // Evita Memory Leaks! Leia na documentação para mais detalhes!
   // Alguns detalhes: https://blog.logrocket.com/understanding-react-useeffect-cleanup-function/
   console.log('useEffect cleanup!')
  }
 }, [count])

 return (
  <View style={styles.container}>
   <Text style={styles.title}>{`Count: ${count}`}</Text>
   <Button
    color={'green'}
    title={'Increase the Count!'}
    onPress={() => {
     // count++
     setCount(count + 1)
     // console.log(count)
    }}
   />
   <Button
    color={'red'}
    title={'Decrease the Count!'}
    onPress={() => {
     // count--
     setCount(count - 1)
     // console.log(count)
    }}
   />
   <View style={{ marginTop: 64 }}>
    <Button
     color={'blue'}
     title={'Increase the NewCount!'}
     onPress={() => {
      // count++
      setNewCount(newCount + 1)
      // console.log(count)
     }}
    />
    <Button
     color={'purple'}
     title={'Decrease the NewCount!'}
     onPress={() => {
      // count--
      setNewCount(newCount - 1)
      // console.log(count)
     }}
    />
   </View>
  </View>
 )
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: 'orange',
  padding: 16
 },
 title: {
  alignSelf: 'center',
  fontSize: 24,
  marginTop: 24
 }
})

export default Counter
