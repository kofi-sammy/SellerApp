import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import colors from '../../config/colors';
import Icon from '../components/Icon';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';

const AccountScreen = () => {
    const menuItem = [
    {
      title:'My Listings',
      icon:{
        name:'format-list-bulleted',
        backgroundColor: colors.primary
      }
    },

    {
        title:'My Messages',
        icon:{
          name:'email',
          backgroundColor: colors.secondary
        }
    },
  
]
  return (
    <Screen style={styles.screen}>
        <View style={styles.container}>
            <ListItem 
            title='Samuel Boateng' 
            subtitle='sammydev56@gmail.com'
            image={require('../../assets/sammy.jpg')}
            />
        </View>
        <View>
            <FlatList
                data={menuItem}
                keyExtractor={menuItem => menuItem.title}
                renderItem={({item})=>(
                    <ListItem 
                    title={item.title}
                    IconComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} size={40}/>}
                    />
                )}
                ItemSeparatorComponent={ListItemSeparator}
            />
        </View>
        <View style={styles.logout}>
            <ListItem
            title='Log Out'
            IconComponent={<Icon name='logout' backgroundColor='#ffe66d' size={40}/>}
            />
        </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
    container:{
      marginVertical:20
    },
    
    screen:{
        backgroundColor:colors.light
    },

    logout:{
        marginTop:20
    }

})

export default AccountScreen