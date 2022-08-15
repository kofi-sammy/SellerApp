import React from 'react';
import Icon from './src/components/Icon';
import Screen from './src/components/Screen';
//import  WelcomeScreen  from './src/screens/WelcomeScreen';
//import ViewImageScreen from './src/screens/ViewImageScreen';
//import ListingDetailScreen from './src/screens/ListingDetailScreen';




export default function App() {
  return (
   <Screen>
     <Icon name='email' size={70} backgroundColor='red' iconColor='white'/>
   </Screen>
  );
}

