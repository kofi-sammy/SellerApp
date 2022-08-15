import React from 'react';
import { StyleSheet, ImageBackground, View, Image, Text, Pressable, TouchableOpacity } from 'react-native';

import colors from '../../config/colors';
import AppText from '../components/AppText';

const WelcomeScreen = () => {
    return (
        <ImageBackground source={require('../../assets/background.jpg')} style={styles.background}>
           <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../../assets/logo-red.png')} />
            <AppText style={styles.logoText}>Selling best product</AppText>
           </View>
           
           <TouchableOpacity style={styles.loginButton}  activeOpacity={0.9} onPress={()=>console.log('Logining....')}>
            <AppText style={styles.buttonText}>Login</AppText>
           </TouchableOpacity>
           <TouchableOpacity style={styles.registerButton}  activeOpacity={0.9} onPress={()=>console.log('register....')}>
            <AppText style={styles.buttonText}>Register</AppText>
           </TouchableOpacity>

        </ImageBackground>
  )
}

const styles = StyleSheet.create({
    background:{
       flex:1,
       justifyContent:'flex-end',
       alignItems:'center'
    },

    logoContainer:{
      position:'absolute',
      top:70
    },

    logo:{
      width:100,
      height:100,
    },

    logoText:{
      fontWeight: 'bold',
      fontSize:14,
      textAlign:'center'

    },

    loginButton:{
      width:'90%',
      height:50,
      backgroundColor:'#fc5c65',
      borderRadius:15

    },

    registerButton:{
      width:'90%',
      height:50,
      backgroundColor:'#4ecdc4',
      marginTop:10,
      marginBottom:7,
      borderRadius:15
    },

    buttonText:{
      fontSize:20,
      fontWeight: 'bold',
      textAlign:'center',
      textTransform:'uppercase',
      paddingTop:10,
      color: colors.white
    }
});

export default WelcomeScreen ;