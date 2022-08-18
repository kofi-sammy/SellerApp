import React from 'react'
import { FlatList, StyleSheet} from 'react-native';
import colors from '../../config/colors';

import Card from '../components/Card';
import Screen from '../components/Screen';

const ListingScreen = () => {
    const Listings = [
        {
            id:1,
            title:'Black jacket for sale',
            price: 100,
            image:require('../../assets/jacket-sellB.jpg')
        },

        {
          id:2,
          title:'Grey jacket for sale',
          price: 500,
          image:require('../../assets/jacket-sellA.jpg')
      },

      {
        id:3,
        title:'Grey jacket for sale',
        price: 500,
        image:require('../../assets/jacket-sellA.jpg')
    }
    ]
  return (
    <Screen style={styles.screen}>
        <FlatList
          data={Listings}
          keyExtractor={Listings => Listings.id.toString()}
          renderItem={({item}) =>
            <Card 
             title={item.title} 
             subtitle={"$" + item.price} 
             image={item.image}
            />}
           />
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen:{
    paddingTop:60,
    padding: 20,
    backgroundColor:colors.light
  }
})
export default ListingScreen