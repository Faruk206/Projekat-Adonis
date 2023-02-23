import {React, useState} from 'react';
import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const USlucajuPozara = () => {
  
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
        <Text style = {styles.Naslov}>Trenutni požari</Text>

        <View style = {styles.pozar}>
            <Text></Text>
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
});

export default USlucajuPozara;