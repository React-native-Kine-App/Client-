import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Register from './App/Screens/Register';
import Landing from './App/Screens/Landing';
import Navigator from './App/Routes/Drawer';
import * as Font from 'expo-font';
import  AppLoading from "expo-app-loading";

const getFonts = ()=>  Font.loadAsync({
    'orelegaOne-Regular': require('./assets/fonts/OrelegaOne-Regular.ttf'),
    'freck': require('./assets/fonts/FreckleFace-Regular.ttf')
  })

export default function App() {
  
  const [fontsLoaded, setFontsLoaded] = useState(false)

  if (fontsLoaded){

    return (
  
      <Navigator />
  )

  } else {
return (
<AppLoading
startAsync= {getFonts}
onError 
onFinish= {()=> setFontsLoaded(true)}
/>
)
  }
  ;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft:60,
    paddingRight:60
  },
});
