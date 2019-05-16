import React from "react";
import {SafeAreaView, Text, TextInput, TouchableOpacity, View} from "react-native";
import {styles} from "./SignInStyles";

export class SignIn extends React.Component{

    render(){

        const {navigation}=this.props;
        const incomingUser=navigation.getParam('user','Default Value');

        return(
            <View
                style={styles.containerStyle}
            >
                <SafeAreaView/>

                <Text style={styles.headerStyle}>Sign In as {incomingUser.key}</Text>

                <TextInput
                    style={styles.textInputStyle}
                    placeholder={"Email"}
                    placeholderTextColor={"#fff"}
                    underlineColorAndroid={'transparent'}

                />

                <TextInput
                    style={styles.textInputStyle}
                    placeholder={"Password"}
                    secureTextEntry={true}
                    placeholderTextColor={"#fff"}
                    underlineColorAndroid={'transparent'}

                />

                <TouchableOpacity onPress={()=>{alert("Sign In Successfully")}}
                                  style={styles.signInBtnStyle}
                >
                    <Text
                        style={styles.signInBtnTxtStyle}>Sign In</Text>
                </TouchableOpacity>
            </View>
        );
    }
}