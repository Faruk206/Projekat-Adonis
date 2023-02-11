import React from 'react';
import { View, Text, StyleSheet, Pressable, TextInput, Image  } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const LoginScreen = () => {
  
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style = {styles.Naslov}>Adonis</Text>
      <Text style = {styles.Podnaslov1}>Prijavite se</Text>
      <Text style = {styles.Podnaslov2}>Email</Text>
     <TextInput value='  Email...' style = {styles.input1}></TextInput>
     <Text style = {{    
    fontSize: 18,
    right: 120,
    bottom: 5,
    marginTop: 10,
    right: 120,
    color: 'black',
    fontWeight: 'normal'
    }}>Password</Text>
     <TextInput value='  Password...' style = {styles.input2}></TextInput>
     <Text style = {{    
    fontSize: 18,
    left: 0,
    top: 255,
    marginTop: 10,
    right: 120,
    color: 'black',
    fontWeight: 'normal'
    }}
    >Nemate račun?
    <Text
    style = {{    
      fontSize: 18,
      left: 0,
      top: 205,
      marginTop: 10,
      right: 120,
      color: '#2F80ED',
      fontWeight: 'bold'
      }}
      >Registrujte se</Text>
      </Text>
      <Pressable style = {styles.signUp} onPress={() => {navigation.navigate('Prijavi')}}><Text style = {{fontSize: 20, fontWeight: 'bold', left: 100}}>Prijava</Text></Pressable>
      <View style = {{display: 'flex', flexDirection: 'row'}}>
        <Pressable style = {styles.icons}><Image 
        style = {styles.ikonica}
        source = {require('./Google.png')}>
          </Image></Pressable>
        <Pressable style = {styles.icons}><Image style = {styles.ikonica} source = {require('./facebook.png')}>
          </Image></Pressable>
        <Pressable style = {styles.icons}><Image style = {styles.ikonica} source = {require('./apple.png')}></Image></Pressable>
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },

  input1:{
    borderWidth: 1,
    borderRadius: 20,
    width: 350,
    height: 50,
    backgroundColor: '#F5F5F5'
  },
  
  input2:{
    borderWidth: 1,
    borderRadius: 20,
    width: 350,
    height: 50,
    backgroundColor: '#F5F5F5'
  },

  Naslov: {
    fontSize: 50,
    fontFamily: 'notoserif',
    bottom: 100,
    color: '#2F80ED',
    fontWeight: 'bold'
  },

  Podnaslov1: {
    fontSize: 38,
    right: 70,
    bottom: 30,
    color: 'black',
    fontWeight: 'bold'
  },

  Podnaslov2: {
    fontSize: 18,
    right: 120,
    bottom: 5,
    right: 140,
    color: 'black',
    fontWeight: 'normal'
  },

  Parent:{
    width: 300,
    height: 120,
    backgroundColor: '#2F80ED',
    borderRadius: 24,
    marginTop: 10,
    display: 'flex',
    justifyContent: 'center'
  },

  Child:{
    width: 300,
    height: 120,
    backgroundColor: '#1A1D1F',
    borderRadius: 24,
    marginTop: 10,
    display: 'flex',
    justifyContent: 'center'
  },


  DivTekst:{
   color: 'white',
   fontSize: 50,
   fontWeight: 'bold',
   marginLeft: 70,
  },

  dugme:{
    width: 150,
    bottom: 0,
    height: 50,
    backgroundColor: "#2F80ED",
    borderRadius: 8,
  },

  dugmeTekst:{
    fontSize: 20,
    color: "white",
    marginLeft: 25,
    marginTop: 5,
    fontWeight: 'bold',
  },

  signUp:{
      borderWidth: 1,
      borderRadius: 20,
      width: 300,
      height: 50,
      backgroundColor: '#EFEFEF',
      display: 'flex',
      justifyContent: 'center'
  },

  icons:{
    borderWidth: 1,
    borderRadius: 10,
    width: 80,
    height: 60,
    backgroundColor: '#EFEFEF',
    top: 30,
    margin: 10,
  },

  ikonica:{
    left: 15,
    top: 5,
  }
});

export default LoginScreen;