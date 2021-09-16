import React from "react";
import { View, Text, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import estiloRotasDrawer from './estiloRotasDrawer';

function DrawerPersonalizado(props) {
  return (
    <DrawerContentScrollView {...props}>

      <View style={estiloRotasDrawer.fotoContainer}>
        <Image 
          style={estiloRotasDrawer.foto}
          source={require('../../../assets/imagens/bobao.jfif')}
        />
        <Text style={estiloRotasDrawer.nome}>Lindao</Text>
      </View>

      <DrawerItemList {...props}/>

    </DrawerContentScrollView>
  );
}

export default DrawerPersonalizado;