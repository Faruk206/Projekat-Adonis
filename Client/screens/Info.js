import {React, useState} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const Info = () => {
  
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style = {styles.prijava}>
        <Text style = {styles.Naslov}>Informacije</Text>
        <ScrollView>
        <View style = {styles.pozar}>
            <Text style = {styles.tekst1}>
                Šta je ova aplikacija?
            </Text>
            <Text style = {styles.tekst2}>
              Ova aplikacija je projekat učenika MSTŠ Travnik, namijenjena prvenstveno za natjecanje na takmičenju Konjic STEM Challenge 2023.{"\n"}
              {"\n"}
              Učenici iza ove aplikacije su:{"\n"}
              <Text style = {styles.tekst3}>
              -Nedim Karić{"\n"}
              -Faruk Balihodzic{"\n"}
              -Nedim Zlotrg{"\n"}
              </Text>
            </Text>
        </View>
        <View style = {styles.pozar1}>
        <Text style = {styles.tekst1}>
                Kako radi i koja je svrha aplikacije?
            </Text>
            <Text style = {styles.tekst2}>
              Glavni cilj ove aplikacije jeste da omogoći civilima i dobrovoljcima da pomognu oko požara.{"\n"}
              {"\n"}
              Aplikacija nudi mogućnost da se prijavite kao volonter ili kao gost. 
              {"\n"}
              {"\n"}
              U oba slučaja imate mogućnost da prijavite požar i osoba prijavljena kao volonter dobija 
              notifikaciju na uređaj da je požar negdje u njegovog blizini. Što je više volontera u jednom području, lakša je i zaštita od velika požara kao i pomoć oko njega!
            </Text>
        </View>
        </ScrollView>
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

    tekst1: {
    marginTop: 20,
    margin: 20,
    color: '#FFFFFF',
    fontSize: 19,
    fontStyle: 'underline',
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },

   tekst2: {
    marginTop: -10,
    margin: 20,
    color: '#FFFFFF',
    fontSize: 16,
    fontStyle: 'italic',
  },

  tekst3: {
    marginTop: -10,
    margin: 20,
    color: '#FFFFFF',
    fontSize: 16,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },

  prijava: {
    flex: 1,
    alignItems: 'center',
    top: 100,
    backgroundColor: '#FFFFFF'
  },

  pozar: {
    backgroundColor: '#14213d',
    width: 330,
    height: 280,
    borderRadius: 25
  },

  pozar1: {
    backgroundColor: '#14213d',
    width: 330,
    height: 500,
    borderRadius: 25,
    marginTop: 20,
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

  DivTekst1:{
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
   },

  Naslov: {
    fontSize: 35,
    fontFamily: 'notoserif',
    bottom: 20,
    color: '#621708',
    fontWeight: 'bold'
  },
  
});

export default Info;