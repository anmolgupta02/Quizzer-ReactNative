/* eslint-disable prettier/prettier */
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import Title from '../components/title';

const Home = () => {
  return (
    <View>
      <Title />
      <View style={styles.bannerContainer}>
            <Image source={{uri:'https://img.freepik.com/free-vector/curiosity-brain-concept-illustration_114360-11037.jpg?w=740&t=st=1675808990~exp=1675809590~hmac=ad68f377fb4c810a7100245db1e0c778272bfee0ac731744131345e007399876'}}
            style={styles.banner}
            resizeMode="contain"
            />
      </View>

      <TouchableOpacity>
        <Text>Let's Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
    banner:{
        height:300,
        width:300,
    },
    bannerContainer:{
        justifyContent:'center',
        alignItems:'center',
    },
});
