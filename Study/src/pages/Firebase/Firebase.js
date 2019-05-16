import React from "react";
import {
    SafeAreaView,
    Text,
    TextInput,
    TouchableOpacity,
    View} from "react-native";
import {styles} from "./FirebaseStyles";

export class Firebase extends React.Component{


    render(){
        return(

            <View style={styles.containerStyle}>
                <Text style={styles.textStyle}>Fire base testing</Text>
            </View>


        );
    }
}

