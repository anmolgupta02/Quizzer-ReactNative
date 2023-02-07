/* eslint-disable prettier/prettier */
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <SafeAreaView>
    <View style={styles.container}>
      <Text>App</Text>
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