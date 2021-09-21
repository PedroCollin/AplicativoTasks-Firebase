import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


function Photo({navigation}) {

    const voltar = () => {
        navigation.navigate('Inicial')
    }
    
    return (

            <TouchableOpacity onPress={voltar}>       
            <Text>Voltar</Text>  
            </TouchableOpacity>

) 

}
export default Photo;