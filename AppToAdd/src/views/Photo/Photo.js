import React from 'react';
import {TouchableOpacity, Text, Button, ImageBackground, View} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'react-native-image-picker'


export default class Photo extends React.Component {

    handleChoosePhoto = () => {
        const options = {
            noData: true
        };
        ImagePicker.launchImageLibrary(options, response => {
            console.log("response", response);
            if(response.uri){
                this.setState({ photo: response });
            }
       });
    };



    render() {
        const photo = this.state;
        return (
            <View>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                {photo &&(
                    <ImageBackground 
                        source={{ uri: photo.uri }}
                        style={{ width: 300, height:300 }}
                    />
                )}
                    <Button title="Escolha uma foto" onPress={this.handleChoosePhoto} />
                </View>
            </View>
        ); 
    }
}
