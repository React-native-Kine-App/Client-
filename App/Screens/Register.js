import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


export default function Register() {
  
    const [checked, setChecked] = React.useState('first'); 
  return (
    <View style={styles.regForm}>
      <Text style= {styles.header}> Inscription </Text>
      <TextInput 
      style = {styles.textInput} 
      placeholder=' Ton Nom'
      underlineColorAndroid={'transparent'}
      />
      <TextInput 
      style = {styles.textInput} 
      placeholder=' Ton Email'
      underlineColorAndroid={'transparent'}
      />
      
        <TextInput 

        style = {styles.textInput}
        textContentType= "telephoneNumber"
        placeholder=' Numéro de téléphone  '
        underlineColorAndroid={'transparent'}
        />
         <TextInput 

style = {styles.textInput}
textContentType= 'password'
secureTextEntry
placeholder=' Mot de passe '
underlineColorAndroid={'transparent'}
/>
 <TextInput 

  style = {styles.textInput}
  textContentType = 'password' 
  secureTextEntry
  placeholder=' Confirmation mot de passe  '
  underlineColorAndroid={'transparent'}
  />
        <TouchableOpacity style = {styles.button}>
            <Text style= {styles.btnText}>S'enregistrer</Text>
        </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  regForm: {
    textAlign:'center',
    alignSelf:'stretch',
    backgroundColor: 'pink',
  },
  header: {
      fontSize:24,
      color: 'black',
      paddingBottom:10,
      marginBottom:40,
      borderBottomColor:'#199187',
      borderBottomWidth: 1,

  },
  textInput : {
      alignSelf:'stretch',
      height:40,
      marginBottom:30,
      color: 'black',
      borderBottomColor:'#f8f8f8',
      borderBottomWidth:1,
  },
  button : {
      alignSelf: 'stretch',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#59cbbd',
      marginTop: 30,
  },
  btnText : {
      color : '#fff',
      fontWeight : 'bold',

  }
});
