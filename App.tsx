/* eslint-disable prettier/prettier */
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './screens/home'
import Quiz from './screens/quiz'
import Result from './screens/result'
const App = () => {
  return (
    <SafeAreaView>
    <View style={styles.container}>
    <Result ></Result>
    {/* <Home></Home> */}
    {/* <Quiz></Quiz> */}
    </View>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    paddingTop: 40,
    paddingHorizontal: 16,
  }
})