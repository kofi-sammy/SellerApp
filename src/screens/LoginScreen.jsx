import { StyleSheet, Image } from 'react-native'
import React from 'react';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import { AppForm, AppFormField, SubmitButton } from '../components/form'

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(9).label("Password")
});

const LoginScreen = ({name, handleSubmit, ...otherProps}) => {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/logo-red.png')}/>
        <AppForm
          initialValues={{email: '', password:''}}
          onSubmit={values => console.log(values)}
          validationSchema={validationSchema}
        >
            <AppFormField 
              autoCapitalize='none'
              autoCorrect={false}
              name='email'
              icon='email'
              keyboardType='email-address'
              placeholder='Email'
              textContentType = 'emailAddress'
            />
              <AppFormField
              autoCapitalize='none'
              autoCorrect={false}
              icon='lock'
              name= 'password'
              placeholder='Password'
              textContentType ='password'
              secureTextEntry
            />
            <SubmitButton handleSubmit={handleSubmit}/>
        </AppForm>
    </Screen>
  )
}

const styles = StyleSheet.create({
   container:{
    padding:10
   },
    logo:{
        width:80,
        height:80,
        alignSelf:'center',
        marginTop: 50,
        marginBottom:30,
    },
})

export default LoginScreen;