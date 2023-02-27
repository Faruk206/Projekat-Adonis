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
                3. Počnite razgovor odmah govoreći polako i razgovjetno, navodeći što se dogodilo i da li su ljudi u opasnosti.
            </Text>
        </View>
        <View style = {styles.pozar1}>
            <Text style = {styles.lokacija}>
            4. Navedite točnu adresu mjesta požara ili drugog izvanrednog događaja.{"\n"}
                {"\n"}
                5. Budite spremni dati dodatne informacije i osobne podatke (ime i prezime).{"\n"}
                {"\n"}
                6. Završite razgovor kada Vam vatrogasci koje ste kontaktirali to dozvole.
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
    height: 260,
    borderColor: '#6a994e',
    borderStyle: 'solid',
    borderWidth: 6,
    borderRadius: 15,
  },

  pozar1: {
    backgroundColor: '#1b263b',
    width: 370,
    height: 310,
    borderColor: '#6a994e',
    borderStyle: 'double',
    borderWidth: 6,
    borderRadius: 15,
    marginTop: 10,
  },

  Naslov: {
    fontSize: 40,
    fontFamily: 'notoserif',
    bottom: 20,
    color: '#003566',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  
});

export default USlucajuPozara;