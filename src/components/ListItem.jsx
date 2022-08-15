import React from 'react';
import {View, StyleSheet, Image, Text, TouchableHighlight } from 'react-native';

import { GestureHandlerRootView, Swipeable } from "react-native-gesture-handler";

import AppText from './AppText';

import colors from '../../config/colors';

const ListItem = ({image, title, subtitle,IconComponent, onPress,renderRightActions}) => {
  return (
    <GestureHandlerRootView>
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
      <View style={styles.container}>
        {IconComponent}
          {image && <Image style ={styles.image} source={image} />}
          <View style={styles.detailContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subtitle && <AppText style={styles.subtitle}>{subtitle}</AppText>}
          </View> 
      </View>
      </TouchableHighlight>
    </Swipeable>
    </GestureHandlerRootView>
    
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        padding:15,
        backgroundColor:colors.white
    },
    image:{
        width:70,
        height:70,
        borderRadius:35
    },

    detailContainer:{
      marginLeft: 10,
      justifyContent: 'center'
    },

    title:{
      fontWeight:'500',
    },

    subtitle:{
       color:colors.medium,
       padding:2
    }
})

export default ListItem;