import {React, useState, useEffect} from 'react';
import { View, Text, StyleSheet, Pressable, FlatList, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const Pozari = () => {

  const [users, setUsers] = useState([]);

  dostupni = 0;
  const brojDostupnih = () => {
    
    dostupni++;
    axios.post('http://192.168.1.2:3000/PrijaviDostupne', { dostupni })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error.message);
    });
};

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
          <Text style = {styles.lokacija}>{user.lokacija}</Text>
          <View style = {styles.linija}></View>
          <View style = {styles.donjiDio}>
            <Text style = {styles.vrijeme}>Vrijeme prijave: {user.vrijeme}</Text>
              <Text style = {styles.vrijeme}>Dodatne informacije: {"\n"}{user.dodInfo}</Text>
            </View>
            <View style = {styles.donjiDio2}>
              <Pressable onPress = {brojDostupnih} style = {styles.Child}><Text style = {styles.tekst3}>Dostupan sam</Text></Pressable>
              <Text style = {styles.dostupni}>Broj dostupnih: {user.brojDostupnih}</Text>
            </View>
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
    width: 335,
    height: 2,
  },

  Child:{
    width: 140,
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    marginTop: 30,
    marginLeft: 30,
    display: 'flex',
    justifyContent: 'center'
  },

  pozar: {
    backgroundColor: '#1A1D1F',
    width: 360,
    height: 250,
    marginTop: 20,
    borderRadius: 20,
  },

  lokacija: {
    color: '#FFFFFF',
    fontSize: 35,
    textAlign:'center',
    marginTop: -2,
  },

  dostupni: {
    color: '#FFFFFF',
    fontSize: 18,
    marginLeft: 15,
    marginTop: 40,
  },

  donjiDio2:{
    display: 'flex',
    flexDirection: 'row',
  },

  vrijeme: {
    color: '#FFFFFF',
    fontSize: 20,
    marginLeft: 10,
    marginTop: 5,
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
    fontSize: 40,
    fontFamily: 'notoserif',
    bottom: 20,
    color: '#621708',
    fontWeight: 'bold'
  },

 
});

export default Pozari;