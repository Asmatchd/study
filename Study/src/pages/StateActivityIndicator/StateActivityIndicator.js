import React from "react";
import {
    ActivityIndicator,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    AppRegistry,
    TextInput,
} from 'react-native';
import {styles} from "./StateActivityIndicatorStyles";

export class StateActivityIndicator extends React.Component {

    // showLoading() {
    //     this.setState({loading: true})
    // }
    //
    // hideLoading() {
    //     this.setState({loading: false})
    // }
    //
    // state = {}
    //
    //     render(){
    //         return (
    //             <View
    //                 style={{flex: 1}}>
    //
    //                 {this.state.loading &&
    //                 <View style={styles.loading}>
    //                     <ActivityIndicator/>
    //                 </View>
    //                 }
    //             </View>
    //         );
    //     }
    // }


    state = {
        loading: false
    }

    renderLoading() {
        if (this.state.loading) {
            return (
                <ActivityIndicator size="large"  color="red" style={{
                    position:'absolute', left:0, right:0, bottom:0, top:0 }}/>
            )
        } else {
            return null
        }
    }


    render() {
        setTimeout(() => this.setState({
            loading: false }), 3000);
        return (
            <View style={styles.container} >
                <TouchableOpacity style={styles.button} onPress={()=>this.setState({loading: true})}>
                    <Text style={{color:'white'}}>Loading</Text>
                </TouchableOpacity>
                {this.renderLoading()}
            </View>
        )
    }
}

