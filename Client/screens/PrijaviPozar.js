import {React, useState} from 'react';
import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import ImagePicker from 'react-native-image-picker';
import { encode } from 'react-native-image-base64';

const PrijaviPozar = () => {
  
  const options = {
    mediaType: 'photo',
    quality: 1,
  };

  const posaljiSliku = () =>{
    ImagePicker.launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        encode(response.data, imageData => {
          fetch('http://192.168.1.2:3000/slika', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ image: imageData }),
          })
            .then(response => response.json())
            .then(data => {
              console.log(data);
            })
            .catch(error => {
              console.error(error);
            });
        });
      }
    });
  }

  const [vrijeme, setVrijeme] = useState('');
  const [lokacija, setLokacija] = useState('');
  const [dodinfo, setDodInfo] = useState('');

  const handleSubmit = () => {
    
    axios.post('http://192.168.1.2:3000/PrijaviPozar', { vrijeme, lokacija, dodinfo })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error.message);
    });
};

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style = {styles.Naslov}>Prijavi požar</Text>
        <View style = {styles.prijava}>
          <View style = {styles.prijava1}>
      <Text style = {styles.Podnaslov2}>Vrijeme</Text>
      <TextInput value={vrijeme} onChangeText={text => setVrijeme(text)} style = {styles.input1}></TextInput>
      
      <Text style = {styles.Podnaslov1}>Lokacija</Text>
      <TextInput value={lokacija} onChangeText={text => setLokacija(text)} style = {styles.input2}></TextInput>

      <Text style = {styles.Podnaslov3}>Dodatne informacije</Text>
      <TextInput value={dodinfo} onChangeText={text => setDodInfo(text)} style = {styles.input3}></TextInput>

        <Pressable style = {styles.signUp} onPress={posaljiSliku}><Text style = {{fontSize: 20, fontWeight: 'bold', left: 100}}>Dodaj sliku</Text></Pressable>
        <Pressable style = {styles.signUp} onPress={handleSubmit}><Text style = {{fontSize: 20, fontWeight: 'bold', left: 100}}>Prijavi</Text></Pressable>
        </View>
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
    marginTop: 100,
    width: 350,
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
  },

  prijava1: {
    alignItems: 'center',
    width: 350,
    height: 480,
    backgroundColor: '#2f3e46',
    borderRadius: 30,
  },

  input1:{
    borderWidth: 1,
    borderRadius: 20,
    top: 25,
    width: 300,
    height: 50,
    backgroundColor: '#F5F5F5'
  },
  
  input2:{
    borderWidth: 1,
    borderRadius: 20,
    width: 300,
    height: 50,
    top: 40,
    backgroundColor: '#F5F5F5'
  },
  
  input3:{
    borderWidth: 1,
    borderRadius: 20,
    width: 300,
    height: 50,
    top: 55,
    backgroundColor: '#F5F5F5'
  },

  Naslov: {
    fontSize: 35,
    fontFamily: 'notoserif',
    top: 50,
    color: '#2f3e46',
    fontWeight: 'bold'
  },

  Podnaslov1: {
    fontSize: 23,
    bottom: 0,
    right: 90,
    color: 'white',
    top: 30,
    fontWeight: 'bold'
  },

  Podnaslov2: {
    fontSize: 23,
    bottom: 5,
    top: 15,
    right: 90,
    color: 'white',
    fontWeight: 'bold'
  },

  Podnaslov3: {
    fontSize: 23,
    top: 50,
    right: 30,
    color: 'white',
    fontWeight: 'bold'
  },


  signUp:{
      borderWidth: 1,
      borderRadius: 20,
      top: 110,
      width: 300,
      height: 50,
      backgroundColor: '#EFEFEF',
      display: 'flex',
      justifyContent: 'center'
  },

});

export default PrijaviPozar;