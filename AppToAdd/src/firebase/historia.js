import { conexaoFS } from './conexaoFB';

export class Historia {
    
    state = {
        colecao: conexaoFS.collection('ColecionaveisFirestore/itens/titulos')
    };

    pegarColecao(){
        return this.state.colecao;
    }

    adicionarTitulo(titulo) {
        this.state.colecao.add(titulo);
    }

    editarTitulo(titulo) {
        const {id} = titulo;
        delete titulo.id;

        this.state.colecao.doc(id).update(titulo);
    }

    removerTitulo(titulo){
        this.state.colecao.doc(titulo.id).delete();
    }
    
}