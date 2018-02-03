class NegociacaoService {

    constructor(){
        
    }

    obterNegociacoesDaSemana(cb){
        const xhr = new XMLHttpRequest();

        xhr.open('GET', 'negociacoes/semana')

        xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {

            if (xhr.status == 200) {
            console.log('Obtendo resposta do servidor')
            const negociacoes = JSON
            .parse(xhr.responseText)
            .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor))

            cb(null, negociacoes)
            
            } else {
            cb('Error', null)
            }

        }

        
        }
        xhr.send()
    }
}