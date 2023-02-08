/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Title = () => {
  return (
    <View>
        <Text style={styles.titleStyle}>Quizzer</Text>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({
  titleStyle:{
    fontWeight: 'bold',
    fontSize : 60,
  }
})