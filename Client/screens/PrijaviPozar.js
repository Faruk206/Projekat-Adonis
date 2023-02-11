import {React, useState} from 'react';
import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const PrijaviPozar = () => {
  
  const [vrijeme, setVrijeme] = useState('');
  const [lokacija, setLokacija] = useState('');
  const [dodinfo, setDodInfo] = useState('');
  
  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('vrijeme', vrijeme);
    formData.append('lokacija', lokacija);
    formData.append('dodinfo', dodinfo);

    fetch('http://192.168.1.2:3000/PrijaviPozar', {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style = {styles.prijava}>
        <Text style = {styles.Naslov}>Prijavi požar</Text>
        
      <Text style = {styles.Podnaslov2}>Vrijeme</Text>
      <TextInput value={vrijeme} onChangeText={text => setVrijeme(text)} style = {styles.input1}></TextInput>
      
      <Text style = {styles.Podnaslov1}>Lokacija</Text>
      <TextInput value={lokacija} onChangeText={text => setLokacija(text)} style = {styles.input1}></TextInput>

      <Text style = {styles.Podnaslov3}>Dodatne informacije</Text>
      <TextInput value={dodinfo} onChangeText={text => setDodInfo(text)} style = {styles.input1}></TextInput>
        
        <Pressable style = {styles.signUp} onPress={handleSubmit}><Text style = {{fontSize: 20, fontWeight: 'bold', left: 100}}>Prijavi</Text></Pressable>
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },

  prijava: {
    flex: 1,
    alignItems: 'center',
    top: 100,
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
    top: 20,
    backgroundColor: '#F5F5F5'
  },
  
  input3:{
    borderWidth: 1,
    borderRadius: 20,
    width: 350,
    height: 50,
    top: 40,
    backgroundColor: '#F5F5F5'
  },

  Naslov: {
    fontSize: 35,
    fontFamily: 'notoserif',
    bottom: 20,
    color: '#621708',
    fontWeight: 'bold'
  },

  Podnaslov1: {
    fontSize: 18,
    bottom: 5,
    right: 130,
    color: 'black',
    top: 15,
    fontWeight: 'normal'
  },

  Podnaslov2: {
    fontSize: 18,
    bottom: 5,
    right: 130,
    color: 'black',
    fontWeight: 'normal'
  },

  Podnaslov3: {
    fontSize: 18,
    top: 35,
    right: 75,
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
      top: 80,
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

export default PrijaviPozar;