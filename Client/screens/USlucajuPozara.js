import {React, useState} from 'react';
import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const USlucajuPozara = () => {
  

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style = {styles.prijava}>
        <Text style = {styles.Naslov}>U slučaju požara</Text>

        <View style = {styles.pozar}>
            <Text style = {styles.lokacija}>
                1. Stanite i razmislite gdje se nalazite.{"\n"}
                {"\n"}
                2. Primijetite li požar, odmah nazovite vatrogasce na broj 193 ili Centar 112 ili
                policiju na broj 192.{"\n"}
                {"\n"}
                3. Počnite razgovor odmah govoreći polako i razgovjetno, navodeći što se dogodilo i da li su ljudi u opasnosti.{"\n"}
                {"\n"}
            </Text>
        </View>
        <View style = {styles.pozar1}>
            <Text style = {styles.lokacija}>
            4. Navedite točnu adresu mjesta požara ili drugog izvanrednog događaja.{"\n"}
                {"\n"}
                5. Budite spremni dati dodatne informacije i osobne podatke (ime i prezime).{"\n"}
                {"\n"}
                6. Završite razgovor kada Vam vatrogasci koje ste kontaktirali to dozvole.{"\n"}
                {"\n"}
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
    fontSize: 17,
    fontStyle: 'italic'
  },

  prijava: {
    flex: 1,
    alignItems: 'center',
    top: 100,
    backgroundColor: '#FFFFFF'
  },

  pozar: {
    backgroundColor: '#621708',
    width: 330,
    height: 290,
    borderRadius: 25
  },

  pozar1: {
    backgroundColor: '#621708',
    width: 330,
    height: 290,
    borderRadius: 25,
    marginTop: 20,
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
  
});

export default USlucajuPozara;