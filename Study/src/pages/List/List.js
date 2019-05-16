import React from "react";
import {Text, TouchableHighlight, View, FlatList, TouchableOpacity} from "react-native";
import * as Platform from "react-native";
import {styles} from "./FlatListStyles";

export class List extends React.Component {

    renderItemDesign = (item)=>(

        <TouchableOpacity onPress={()=>this._itemData(item)}>

            <View style={styles.containerStyle}>
                <Text style={styles.textStyle}>{item.key}</Text>
            </View>

        </TouchableOpacity>
    );

    _itemData = (item)=>{

        this.props.navigation.navigate('signIn',{'user':item})

    };

render() {
        return (
            <FlatList

                data={[{title: 'Title Text', key: 'Asmat'},
                    {title: 'Title Text1', key: 'Usman'},
                    {title: 'Title Text2', key: 'Azmat'},
                    {title: 'Title Text3', key: 'Ali'},
                    {title: 'Title Text4', key: 'Furqan'},
                    {title: 'Title Text5', key: 'Ahmed'},
                    {title: 'Title Text6', key: 'Farman'},
                    {title: 'Title Text7', key: 'Zeshan'},
                    {title: 'Title Text8', key: 'Umer'},
                    {title: 'Title Text9', key: 'Fatima'},
                    {title: 'Title Text10', key: 'Maryam'},
                    {title: 'Title Text11', key: 'Qamer'},
                    {title: 'Title Text', key: 'Shahid'},
                    {title: 'Title Text1', key: 'item1'},
                    {title: 'Title Text2', key: 'item1'},
                    {title: 'Title Text3', key: 'item1'},
                    {title: 'Title Text4', key: 'item1'},
                    {title: 'Title Text5', key: 'item1'},
                    {title: 'Title Text6', key: 'item1'},
                    {title: 'Title Text7', key: 'item1'},
                    {title: 'Title Text8', key: 'item1'},
                    {title: 'Title Text9', key: 'item1'},
                    {title: 'Title Text10', key: 'item1'},
                    {title: 'Title Text11', key: 'item1'},]}

                renderItem={({item}) => this.renderItemDesign(item)}
            />

        );
    }
}


