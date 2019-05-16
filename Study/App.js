import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {SignIn} from "./src/pages/SignInPage/SignIn";
import {SignUp} from "./src/pages/SignUpPage/SignUp";
import MainScreenNavigator from './src/navigations/ScreenNavigator';
import {List} from "./src/pages/List/List";
import {StateActivityIndicator} from "./src/pages/StateActivityIndicator/StateActivityIndicator";
import {AxiosListGitHub} from "./src/pages/AxiosListGitHub/AxiosListGitHub";
import firebase from "react-native-firebase";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  async componentDidMount() {
    this.checkPermission();
    this.createNotificationListeners(); //add this line
  }

  //1
  async checkPermission() {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
      this.getToken();
    } else {
      this.requestPermission();
    }
  }

  //3
  async getToken() {
    let fcmToken = await AsyncStorage.getItem('fcmToken', value);
    if (!fcmToken) {
      fcmToken = await firebase.messaging().getToken();
      if (fcmToken) {
        // user has a device token
        await AsyncStorage.setItem('fcmToken', fcmToken);
      }
    }
  }

  //2
  async requestPermission() {
    try {
      await firebase.messaging().requestPermission();
      // User has authorised
      this.getToken();
    } catch (error) {
      // User has rejected permissions
      console.log('permission rejected');
    }
  }

  render() {
    return (
        <AxiosListGitHub/>
    );
  }
}

