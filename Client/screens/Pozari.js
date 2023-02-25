import {React, useState, useEffect} from 'react';
import { View, Text, StyleSheet, Pressable, FlatList, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const Pozari = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://192.168.1.2:3000/pozari')
      .then((response) => setUsers(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <View style = {styles.prijava}>
        <Text style = {styles.Naslov}>Trenutni požari</Text>
        <View style = {styles.pozar}>
            {users.map((user, index) => (
          <View key={index} style = {styles.pozar}>
          <Text style = {styles.tekst1}>{user.lokacija}</Text>
          <View style = {styles.linija}></View>
          <View style = {styles.donjiDio}>
            <Text style = {styles.tekst1}>{user.vrijeme}</Text>
              <Text style = {styles.tekst2}>{user.dodInfo}</Text>
            </View>
            <Pressable style = {styles.Child}><Text style = {styles.tekst3}>Dostupan sam</Text></Pressable>
          </View>
      ))}
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

  linija:{
    backgroundColor: '#FFFFFF',
    width: 330,
    height: 3,
  },

  Child:{
    width: 140,
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    marginTop: 10,
    display: 'flex',
    justifyContent: 'center'
  },

  pozar: {
    backgroundColor: '#1A1D1F',
    width: 340,
    height: 150,
    marginTop: 20,
    borderRadius: 25,
  },

  tekst1: {
    color: '#FFFFFF',
    fontSize: 20,
    marginLeft: 20
  },

  tekst2: {
    color: '#FFFFFF',
    fontSize: 16,
    marginLeft: 10
  },

  tekst3: {
    color: 'black',
    fontSize: 16,
    marginLeft: 10
  },

  Naslov: {
    fontSize: 35,
    fontFamily: 'notoserif',
    bottom: 20,
    color: '#621708',
    fontWeight: 'bold'
  },

 
});

export default Pozari;