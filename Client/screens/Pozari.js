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
            <Text style = {styles.lokacija}>Donji Vakuf</Text>
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

  pozar: {
    backgroundColor: '#621708',
    width: 330,
    height: 120,
  },

  lokacija: {
    color: '#FFFFFF',
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