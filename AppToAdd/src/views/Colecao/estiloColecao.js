import { StyleSheet } from 'react-native';

const estiloColecao = StyleSheet.create({
   container: {   
      flex: 1,
      backgroundColor: '#0c1b59',
   },
   header: {
      height: 50,
      backgroundColor: '#F00',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 5,
   },
   texto: {
      fontSize: 20,
      color: '#FFFFFF',
      fontWeight: 'bold',
   },

});

  export default estiloColecao;