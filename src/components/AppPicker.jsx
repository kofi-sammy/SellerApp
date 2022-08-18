import React, { useState } from 'react';
import {  View, StyleSheet, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../../config/colors';
import AppText from './AppText';
import Screen from './Screen';
import PickerItem from './PickerItem';


const AppPicker = ({icon,selectedItem, onSelectItem, placeholder, item}) => {
  const[modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() =>setModalVisible(true)}>
          <View style={styles.container}>
              {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.medium} style={styles.icons}/>}
              <AppText style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</AppText>
              <MaterialCommunityIcons name='chevron-down' size={20} color={colors.medium}  />
          </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType='slide'>
        <Screen>
          <Button title='close' onPress={() =>setModalVisible(false)}/>
          <FlatList 
            data={item} 
            keyExtractor={item => item.value.toString()}
            renderItem={({item})=><PickerItem label={item.label} onPress={() =>{setModalVisible(false); onSelectItem(item);}}/>}/>
        </Screen>
      </Modal>
    </>
   
  )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.light,
        borderRadius:20,
        flexDirection:'row',
        width:'100%',
        padding:15,
        marginTop:20
        
    
    },

    textInput:{
        fontSize:18,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
        color: colors.dark
    },

    icons:{
      marginRight:10,
      marginTop:4
    },

    text:{
      flex:1
    }

})

export default AppPicker;