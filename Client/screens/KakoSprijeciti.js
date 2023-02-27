import {React, useState} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';




const KakoSprijeciti = () => {
  

  const navigation = useNavigation();



  return (
    <View style={styles.container}>
      <View style = {styles.prijava}>
        <Text style = {styles.Naslov}>Kako spriječiti požar?</Text>
        <View style = {styles.pozar}>
            <Text style = {styles.lokacija}>
                <Text style = {styles.lokacija2}>Preventivne mjere:{"\n"}</Text>
                {"\n"}
                - Iz svih pratećih prostorija (podrumi, garaže…) ukloniti sve uskladištene
                zapaljive stvari (farbe, kartonsku ambalažu i papir, dijelove starog nameštaja,
                garderobu itd.);
            </Text>
        </View>
        <View style = {styles.pozar1}>
            <Text style = {styles.lokacija}>
            - Pokušajte osigurati STALNU prohodnost protivpožarnih puteva, naročito u
                visokim stambenim objektima i upoznajte djecu s istim;
            </Text>
        </View>
        <View style = {styles.pozar2}>
            <Text style = {styles.lokacija}>
            -Naučite pravilno aktivirati i koristiti protivpožarni aparat i podučite svoje
            ukućane
            </Text>
        </View>
        <View style = {styles.pozar2}>
            <Text style = {styles.lokacija}>
            -Naučite djecu da u slučaju požara pozovu vatrogasce na broj 123 ili civilne
             zaštite na broj 121.
            </Text>
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

  lokacija: {
    marginTop: 20,
    margin: 20,
    color: '#FFFFFF',
    fontSize: 15,
    fontStyle: 'italic',
    fontWeight: 'bold'
  },

  lokacija2: {
    marginTop: 20,
    margin: 20,
    color: '#FFFFFF',
    fontSize: 23,
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    fontWeight: 'bold'
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

  prijava: {
    flex: 1,
    alignItems: 'center',
    top: 100,
    backgroundColor: '#FFFFFF'
  },

  pozar: {
    backgroundColor: '#1b263b',
    width: 360,
    height: 190,
    borderRadius: 20,
  },

  pozar1: {
    backgroundColor: '#1b263b',
    width: 360,
    height: 120,
    borderRadius: 20,
    marginTop: 10,
  },

  pozar2: {
    backgroundColor: '#1b263b',
    width: 360,
    height: 100,
    borderRadius: 20,
    marginTop: 10,
  },

  Naslov: {
    fontSize: 32,
    fontFamily: 'notoserif',
    bottom: 20,
    color: '#003566',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  
});

export default KakoSprijeciti;