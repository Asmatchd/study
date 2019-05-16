import React from "react";
import {
    FlatList,
    Text,
    TouchableOpacity,
    View,
    ActivityIndicator,
} from "react-native";
import axios from 'axios'
import {styles} from "./AxiosListGitHubStyles";
import {axiosInstance, baseUrl} from "../../services/apiService";
import {AppButton} from "../../components/AppButton";

export class AxiosListGitHub extends React.Component{

    state = {
        users:[],
        isLoading:false,
        refreshing: false,
};
    // componentWillMount(): void {
    //     this.fetchData();
    // };
    //
    // fetchData = async ()=>{
    //    const response = await fetch("https://randomuser.me/api?results=100")
    //     const json = await response.json();
    //    this.setState({
    //        data: json.results,
    //        isLoading:false,
    //        refreshing:false});
    // };

    getUsers = ()=> {
        axiosInstance.get(baseUrl).then(response=>{

            // console.warn(response.data.results);
            const userArray = response.

            this.setState({
                users: userArray,
                isLoading:false,
                refreshing:false});

        }).catch(error=>{
            console.warn(error.message)
        })
    };

    handleRefresh = () =>{

        this.setState({
            refreshing:true
        }, ()=>{
            this.getUsers();
            }
            );

    };


    changeState = ()=>{
      this.setState({isLoading:true}, ()=>{
          this.getUsers();
      })
    };

    render() {
        return (
            this.state.isLoading
            ?
                <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
                    <ActivityIndicator size="large" color="red" animating/>
                </View>
            :

            <View style={styles.container}>

                <AppButton
                    btnBgColor={'#2abec7'}
                    btnPadding={10}
                    btnPress={this.changeState}
                    btnTextSize={18}
                    btnTitle={'list'}
                    textColor={'#000'}
                />

                <FlatList
                    data={this.state.users}
                    disableVirtualization={true}
                    renderItem={({item}) =>

                        <TouchableOpacity >

                            <View style={styles.listContainer}>

                                <Text style={styles.listText}>
                                    {item.name.first} {item.name.first}
                                </Text>

                            </View>

                        </TouchableOpacity>
                    }

                    refreshing={this.state.refreshing}
                    onRefresh={this.handleRefresh}

                />

            </View>


        );
    }
}