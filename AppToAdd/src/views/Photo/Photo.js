import React from 'react';
import {TouchableOpacity, Text, Button, Image, View} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import ImagePicker from 'react-native-image-picker';

const Photo = () => {

    const options = {
        title: 'Pick an image',
        storageOptions: {
            skipBackup: true,
            path: 'images',
        },
    };

    const openPicker = () => {
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error:', response.error);
            } else {
                const source = {uri: response.uri};
            }
        });
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent:'center' }}>
            <Button title="Pick image" onPress={openPicker}
            />     
            </View>
    )

}

export default Photo;