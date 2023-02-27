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
        <View style = {styles.pozar3}>
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
    fontSize: 22,
    fontStyle: 'underline',
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },

   tekst2: {
    marginTop: -10,
    margin: 20,
    color: '#FFFFFF',
    fontSize: 17,
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
    backgroundColor: '#1b263b',
    width: 370,
    height: 310,
    borderColor: '#6a994e',
    borderLeftWidth: 6,
    borderBottomWidth: 6,
    borderTopWidth: 6,
    borderRightWidth: 6,
    borderRadius: 15,
    marginTop: 10,
  },

  pozar1: {
    backgroundColor: '#1b263b',
    width: 370,
    height: 510,
    borderColor: '#6a994e',
    borderLeftWidth: 6,
    borderBottomWidth: 6,
    borderTopWidth: 6,
    borderRightWidth: 6,
    borderRadius: 15,
    marginTop: 10,
  },


  Naslov: {
    fontSize: 45,
    fontFamily: 'notoserif',
    bottom: 20,
    color: '#1b263b',
    fontWeight: 'bold'
  },
  
});

export default Info;