import React from "react";
import {SafeAreaView, Text, TextInput, TouchableOpacity, View} from "react-native";
import {styles} from "./SignUpStyles";

export class SignUp extends React.Component{

    state={
        userEmail:'',
    }

    _goToSignInPage = ()=>{
        this.props.navigation.navigate('signIn')
};

    _myFunction = (name)=>{
      console.warn('Hello '+name)
    };

    render(){
        return(
            <View
                style={styles.containerStyle}
            >
                <SafeAreaView/>

                <Text style={styles.headerStyle}>Registration</Text>

                <TextInput
                    style={styles.textInputStyle}
                    placeholder={"User name"}
                    placeholderTextColor={"#fff"}
                    underlineColorAndroid={'transparent'}

                />

                <TextInput
                    style={styles.textInputStyle}
                    placeholder={"Email"}
                    placeholderTextColor={"#fff"}
                    underlineColorAndroid={'transparent'}
                    onChangeText={(text)=>this.setState({userEmail:text})}

                />

                <TextInput
                    style={styles.textInputStyle}
                    placeholder={"Password"}
                    secureTextEntry={true}
                    placeholderTextColor={"#fff"}
                    underlineColorAndroid={'transparent'}

                />

                <TextInput
                    style={styles.textInputStyle}
                    placeholder={"Re-Enter Password"}
                    secureTextEntry={true}
                    placeholderTextColor={"#fff"}
                    underlineColorAndroid={'transparent'}

                />

                <TouchableOpacity
                    // onPress={()=>this._myFunction('Asmat')}
                    onPress={()=>console.warn(this.state.userEmail)}
                    style={styles.signUpBtnStyle}
                >
                    <Text style={styles.signUpBtnTxtStyle}>Sign Up</Text>

                </TouchableOpacity>

                <TouchableOpacity
                    onPress={()=>this._goToSignInPage()}
                    style={styles.signInBtnStyle}
                >
                    <Text style={styles.signUpBtnTxtStyle}>Sign In</Text>

                </TouchableOpacity>


            </View>
        );
    }
}