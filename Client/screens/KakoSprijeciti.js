import {React, useState} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const KakoSprijeciti = () => {
  

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style = {styles.prijava}>
        <Text style = {styles.Naslov}>Kako spriječiti požar?</Text>
        
        <ScrollView>
        <View style = {styles.pozar}>
            <Text style = {styles.lokacija}>
                Preventivne mjere:{"\n"}
                {"\n"}
                - Iz svih pratećih prostorija (podrumi, garaže…) ukloniti sve uskladištene
                zapaljive stvari (farbe, kartonsku ambalažu i papir, dijelove starog nameštaja,
                garderobu itd.);{"\n"}
                {"\n"}
            </Text>
        </View>

        <View style = {styles.pozar1}>
            <Text style = {styles.lokacija}>
            - Pokušajte osigurati STALNU prohodnost protivpožarnih puteva, naročito u
                visokim stambenim objektima i upoznajte djecu s istim;
                {"\n"}
            </Text>
        </View>
        <View style = {styles.pozar2}>
            <Text style = {styles.lokacija}>
            -naučite pravilno aktivirati i koristiti protivpožarni aparat i podučite svoje
            ukućane,{"\n"}
            {"\n"}
            </Text>
        </View>
        <View style = {styles.pozar2}>
            <Text style = {styles.lokacija}>
            -naučite djecu da u slučaju požara pozovu vatrogasce na broj 123 ili civilne
             zaštite na broj 121.{"\n"}
            {"\n"}
            </Text>
        </View>
        <View style = {styles.pozar3}>
            <Text style = {styles.lokacija}>
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

  lokacija: {
    marginTop: 20,
    margin: 20,
    color: '#FFFFFF',
    fontSize: 17,
    fontStyle: 'italic',
    fontWeight: 'bold'
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
    height: 220,
    borderRadius: 25,
  },

  pozar1: {
    backgroundColor: '#621708',
    width: 330,
    height: 150,
    borderRadius: 25,
    marginTop: 20,
  },

  pozar2: {
    backgroundColor: '#621708',
    width: 330,
    height: 150,
    borderRadius: 25,
    marginTop: 20,
  },

  pozar3: {
    backgroundColor: '#FFFFFF',
    width: 330,
    height: 150,
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

export default KakoSprijeciti;