class NegociacaoController {
  constructor() {
    let $ = document.querySelector.bind(document);

    this._inputData = $("#data");

    this._inputQuantidade = $("#quantidade");

    this._inputValor = $("#valor");
  }

  adiciona(event) {
    event.preventDefault();

    let data = new Date(
      ...this._inputData.value.split("-").map((item, index) => item - index % 2)
    );

    console.log(data);

    let negociacao = new Negociacao(
      data,
      parseInt(this._inputQuantidade.value),
      parseFloat(this._inputValor.value)
    );

    console.log(this._inputData.value);
    console.log(parseInt(this._inputQuantidade.value));
    console.log(parseFloat(this._inputValor.value));
  }
}
