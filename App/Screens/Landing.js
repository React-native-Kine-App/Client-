import React from 'react';
import { Text, View, Button } from 'react-native';
import { StyleSheet} from 'react-native';






export default function Landing({navigation}) {
  
  const pressHandler = ( ()=>{
    navigation.navigate('Register')
    // navigation.push('Register')
  })
  const pressHandler2 = ( ()=>{
    navigation.navigate('Login')
    // navigation.push('Register')
  })
 
  return (
    <View>
    <Text style= {styles.title}>On doit mettre ue image et quelque animations pour la page d'accueil </Text>

    <Button 
    title = 'Créer un compte  '
    onPress= {pressHandler}
      />

<Button 
    style= {styles.btn}
    title = 'Se Connecter  '
    onPress= {pressHandler2}
      />
    </View>
  
    
  
  );
}

const styles = StyleSheet.create({
  title: {
   fontFamily: 'freck',
   fontSize: 24,

  },
  btn : {
    padding:10,
    marginTop: '10px',
    marginBottom:'20px'
  }
});

