import {createStackNavigator} from 'react-navigation-stack';

import Profile from "../Screens/Profile";

const screens = {

Profile: {
screen: Profile,
navigationOotions: {
    title : 'Bienvenue dans ton profile'
}
},

 
}
const ProfileStack = createStackNavigator(screens, {
    defaultNavigationOptions:{
        headerTintColor : 'pink',
        headerStyle : {backgroundColor:'grey', height: 60 }
    }
})



export default ProfileStack