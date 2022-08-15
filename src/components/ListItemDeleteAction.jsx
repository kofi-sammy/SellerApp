import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback  } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

import colors from '../../config/colors';

const ListItemDeleteAction = ({onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.swipeContainer}>
            <View style={styles.swipe}>
                <MaterialCommunityIcons name='trash-can' size={30} color={colors.white}/>
            </View>
        </View>
    </TouchableWithoutFeedback>
  )
};

const styles = 
StyleSheet.create({
    swipeContainer:{
        justifyContent:'center',
        alignItems:'center'
    },
    swipe:{
        backgroundColor: colors.danger,
        width:50,
        height:50,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default ListItemDeleteAction;