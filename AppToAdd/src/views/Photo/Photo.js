import React from 'react';
import {TouchableOpacity, Text, Button, Image, View, ImagePickerIOS} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


export default class Photo extends React.Component {

    handleChoosePhoto = () => {
        const options = {
            noData: true
        };
        ImagePicker.launchImageLibrary(options, response => {
            console.log("response", response);
            if(response.uri){
                this.setState({ photo: response })
            }
       });
    };

    voltar = () => {
        navigation.navigate('Inicial')
    };

    render() {
    return (
        <View>
        <TouchableOpacity onPress={voltar}>       
        <Text>Voltar</Text>  
        </TouchableOpacity>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        {photo &&(
            <Image 
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
