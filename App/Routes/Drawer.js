import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import HomeStack   from "./HomeStack";
import ProfileStack from "./ProfileStack";

const RootDrawerNavigator = createDrawerNavigator({
    Home : {
        screen : HomeStack,
        navigationOptions: {
            title : 'Accueil'
        }
    },
    Profile : {
        screen : ProfileStack,
        navigationOptions: {
            title : 'Mon Espace'
        }
    }
})

export default createAppContainer (RootDrawerNavigator)