import {React, useState} from 'react';
import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const Pozari = () => {
  
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style = {styles.prijava}>
        <Text style = {styles.Naslov}>Trenutni požari</Text>

        <View style = {styles.pozar}>
            <Text style = {styles.tekst1}>Donji Vakuf</Text>
            <View style = {styles.linija}></View>
            <View style = {styles.donjiDio}>
              <Text style = {styles.tekst2}>Vrijeme prijave: 16:37</Text>
            </View>
            <Pressable style = {styles.Child}><Text style = {styles.tekst2}>Dostupan sam</Text></Pressable>
        </View>
        <View style = {styles.pozar}>
            <Text style = {styles.tekst1}>Donji Vakuf</Text>
            <View style = {styles.linija}></View>
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
    backgroundColor: '#1A1D1F',
    borderRadius: 24,
    marginTop: 10,
    display: 'flex',
    justifyContent: 'center'
  },

  pozar: {
    background: 'linear-gradient(#8BC6EC, #9599E2)',
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

  Naslov: {
    fontSize: 35,
    fontFamily: 'notoserif',
    bottom: 20,
    color: '#621708',
    fontWeight: 'bold'
  },

 
});

export default Pozari;