import React,{useState} from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';


const MessagesScreen = () => {
    const initialMessages = [{
        id:1,
        title: 'T1',
        description:'D1',
        image: require('../../assets/sammy.jpg')
    },
    {
        id:2,
        title: 'T2',
        description:'D2',
        image: require('../../assets/sammy.jpg')

    },
]
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] =useState(false);

  const handleDelete = message => {
    const newMessage = messages.filter(m => m.id !== message.id)
    setMessages(newMessage)
  }

  return (
    <Screen>
         <FlatList
       data={messages}
       keyExtractor={messages =>messages.id.toString()}
       renderItem={({item}) =>(
       <ListItem 
          title={item.title} 
          subtitle={item.description} 
          image={item.image} 
          onPress={()=>console.log('Message selected', item)}
          renderRightActions={() =>
          <ListItemDeleteAction onPress={() => handleDelete(item)}/>}
          />
      )}
       ItemSeparatorComponent={ListItemSeparator}
       refreshing={refreshing}
       onRefresh= {()=>{
        setMessages([{
          id:2,
          title: 'T2',
          description:'D2',
          image: require('../../assets/sammy.jpg')
         },
         {
          id:3,
          title: 'T3',
          description:'D3',
          image: require('../../assets/sammy.jpg')
        },
        {
          id:4,
          title: 'T4',
          description:'D4',
          image: require('../../assets/sammy.jpg')
        }
        ])
       }}
    />
    </Screen>
   
  )
}

const styles = StyleSheet.create({
})

export default MessagesScreen