import React from 'react';
import { View, Text, StyleSheet, Pressable  } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style = {styles.Naslov}>Meni</Text>
      <Pressable style = {styles.Parent} onPress={() => {navigation.navigate('PrijaviPozar')}} ><Text style = {styles.DivTekst}>Prijavi požar</Text></Pressable>
      <Pressable style = {styles.Child} onPress={() => {navigation.navigate('Pozari')}} ><Text style = {styles.DivTekst1}>Pogledaj trenutne požare</Text></Pressable>
      <Pressable style = {styles.Child}><Text style = {styles.DivTekst1}>Kako spriječiti požar?</Text></Pressable>
      <Pressable style = {styles.Child} onPress={() => {navigation.navigate('USlucajuPozara')}}><Text style = {styles.DivTekst1}>Šta uraditi u slučaju požara?</Text></Pressable>
      <Pressable style = {styles.Child}><Text style = {styles.DivTekst1}>Informacije o aplikaciji</Text></Pressable>
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
  Naslov: {
    fontSize: 40,
    marginBottom: 20,
    color: 'black',
    fontWeight: 'bold'
  },
  Parent:{
    width: 340,
    height: 70,
    backgroundColor: '#621708',
    borderRadius: 24,
    marginTop: 10,
    display: 'flex',
    justifyContent: 'center'
  },

  Child:{
    width: 340,
    height: 70,
    backgroundColor: '#1A1D1F',
    borderRadius: 24,
    marginTop: 10,
    display: 'flex',
    justifyContent: 'center'
  },

  Naslov: {
    fontSize: 50,
    fontFamily: 'notoserif',
    bottom: 50,
    color: '#621708',
    fontWeight: 'bold'
  },

  DivTekst:{
   color: 'white',
   fontSize: 25,
   fontWeight: 'bold',
   marginLeft: 90,
  },

  DivTekst1:{
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
   },

  dugme:{
    width: 150,
    bottom: -170,
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
  }
});

export default Home;