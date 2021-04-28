
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


export default function Profile() {
  
    const [checked, setChecked] = React.useState('first'); 
  return (
    <View style={styles.container}>
    <Text>
        Bienvenue dans ton espace personnelle 
    </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container : {
backgroundColor:'pink'
  }

  
});
