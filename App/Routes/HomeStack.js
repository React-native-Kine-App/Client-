import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";
import Register from "../Screens/Register";
import Landing from "../Screens/Landing";
import Login from "../Screens/Login";
import Profile from "../Screens/Profile";
import Header from '../../shared/Header';
import React from 'react';

const screens = {

Home: {
screen: Landing,
navigationOptions: {
    headerTitle : ()=> <Header/>
}
},
Register: {
    screen: Register,
    navigationOptions: {
        title : 'Créer Un Compte'
    }
},
Login: {
    screen : Login,
    navigationOptions: {
        title : 'Se connecter'
    }
},
Profile : {
    screen : Profile,
    navigationOptions: {
        title : 'Mon Espace'
    }
}
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions:{
        headerTintColor : 'pink',
        headerStyle : {backgroundColor:'grey', height: 60 }
    }
})


export default HomeStack