import React from "react";
import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({

    containerStyle:{
        flex:1,
        backgroundColor:'#222223',
        justifyContent:'center',
        paddingLeft:60,
        paddingRight:60,
    },

    headerStyle:{
        color:'white',
        paddingBottom:10,
        marginBottom:40,
        fontSize:26,
        borderBottomWidth:1,
        borderBottomColor:'#fff',

    },

    textInputStyle:{
        width:'100%',
        color:'white',
        height:40,
        marginBottom:30,
        fontSize:18,
        borderBottomWidth:1,
        borderBottomColor:'#199187',
    },

    signUpBtnStyle:{
        width:'100%',
        alignItems:'center',
        backgroundColor:'#5da0ab',
        padding:20


    },

    signUpBtnTxtStyle:{
        color:'white',
        fontWeight:'bold'

    },
    signInBtnStyle:{
        flexDirection:'row',
        justifyContent:'flex-end',
        marginTop:20,
        padding:10

    },

    signInBtnTxtStyle:{
        color:'#fff',
        fontSize:20,



    }


})