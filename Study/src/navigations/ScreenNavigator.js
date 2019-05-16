import React from "react";
import {createStackNavigator, createAppContainer} from "react-navigation";
import {SignIn} from "../pages/SignInPage/SignIn";
import {SignUp} from "../pages/SignUpPage/SignUp";
import {List} from "../pages/List";
import {StateActivityIndicator} from "../pages/StateActivityIndicator/StateActivityIndicator";
import {AxiosListGitHub} from "../pages/AxiosListGitHub/AxiosListGitHub";

const MainScreenNavigator = createStackNavigator({

        axiosListGitHub: AxiosListGitHub,
        list: List,
        signUp: SignUp,
        signIn: SignIn,
        stateActivityIndicator: StateActivityIndicator,
    },
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: 'false'
        }
    }
);

export default createAppContainer(MainScreenNavigator);