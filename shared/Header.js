import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {MetirialIcons} from '@expo/vector-icons';

export default function Header ( ){

    return (
        <View style= {styles.header}>
            {/* ICON FOR THE MENU */}
            <View>
                <Text style= {styles.headerText}> KIné Application </Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create ( {
    header : {
        width : '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },
    headerText : {
        fontWeight: 'bold',
        fontSize:20,
        color: '#333',
        letterSpacing:1
    }
})