import {React, useState} from 'react';
import { View, Text, StyleSheet, Pressable, TextInput, Image  } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Registracija = () => {
  
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [volonter, setVolonter] = useState('');

  const handleSubmitVolonter = () => {
    volonter = 'Da'
    axios.post('http://192.168.1.2:3000/Registracija', { email, password, volonter })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error.message);
    });
};

const handleSubmitPosmatrac = () => {
    volonter = 'Ne'
    axios.post('http://192.168.1.2:3000/Registracija', { email, password, volonter })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error.message);
    });
};

const PrijavaKaoVolonter = () =>{
    navigation.navigate('Prijavi');
    handleSubmitVolonter();
}

const PrijavaKaoPosmatrac = () =>{
    navigation.navigate('Prijavi');
    handleSubmitPosmatrac();
}

  return (
    <View style={styles.container}>
      <Text style = {styles.Naslov}>Adonis</Text>
      <Text style = {styles.Podnaslov1}>Napravite novi račun</Text>
      <Text style = {styles.Podnaslov2}>Email</Text>
     <TextInput value={email} onChangeText={text => setEmail(text)} style = {styles.input1}></TextInput>
     <Text style = {{    
    fontSize: 18,
    right: 120,
    bottom: 45,
    marginTop: 10,
    right: 120,
    color: 'black',
    fontWeight: 'normal'
    }}>Password</Text>
     <TextInput value={password} onChangeText={text => setPassword(text)} style = {styles.input2}></TextInput>
     <Text style = {{    
    fontSize: 18,
    left: 0,
    top: 255,
    marginTop: 10,
    right: 120,
    color: 'black',
    fontWeight: 'normal'
    }}
    >Već imate račun?
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
      > Prijavite se!</Text>
      </Text>
      <Pressable style = {styles.signUp} onPress={() => {navigation.navigate('Prijavi')}}><Text style = {{fontSize: 20, fontWeight: 'bold', left: 50}}>Prijava kao volonter</Text></Pressable>
      <Pressable style = {styles.signUp1} onPress={() => {navigation.navigate('Prijavi')}}><Text style = {{fontSize: 20, fontWeight: 'bold', left: 40}}>Prijava kao posmatrač</Text></Pressable>
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
    bottom: 40,
    backgroundColor: '#F5F5F5'
  },
  
  input2:{
    borderWidth: 1,
    borderRadius: 20,
    width: 350,
    height: 50,
    bottom: 40,
    backgroundColor: '#F5F5F5'
  },

  Naslov: {
    fontSize: 50,
    fontFamily: 'notoserif',
    bottom: 80,
    color: '#2F80ED',
    fontWeight: 'bold'
  },

  Podnaslov1: {
    fontSize: 36,
    width: 300, 
    right: 20,
    bottom: 60,
    color: 'black',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },

  Podnaslov2: {
    fontSize: 18,
    right: 120,
    bottom: 45,
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
      bottom: 40,
      backgroundColor: '#EFEFEF',
      display: 'flex',
      justifyContent: 'center'
  },

  signUp1:{
    borderWidth: 1,
    borderRadius: 20,
    width: 300,
    height: 50,
    bottom: 30,
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
    top: 0,
    margin: 10,
  },

  ikonica:{
    left: 15,
    top: 5,
  }
});

export default Registracija;