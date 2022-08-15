import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

import ListItem from '../components/ListItem';
import AppText from '../components/AppText';

import colors from '../../config/colors'

const ListingDetailScreen = () => {
  return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../assets/jacket-sellA.jpg')}/>
            <View style={styles.detailContainer}>
                <AppText style={styles.title}>Grey Jacket for sale</AppText>
                <AppText style={styles.subTitle}>$100</AppText>
                <View style={styles.userContainer}>
                <ListItem
                  image={require('../../assets/sammy.jpg')}
                  title='Samuel Boateng'
                  subtitle='5 Listings'
                />
                </View>
            </View>
        </View>
  )
}

const styles = StyleSheet.create({
    container:{
        paddingTop:40,
        borderRadius:15,

    },

    userContainer:{
        marginVertical:20
    },

    image:{
        width:'100%',
        height:300
    },

    detailContainer:{
      padding:10     
    },

    title:{
        fontSize:22,
        fontWeight:'500'
    },
    subTitle:{
       color:colors.secondary,
       fontWeight:'bold',
       fontSize:20,
       marginVertical:10
    }
})

export default ListingDetailScreen;