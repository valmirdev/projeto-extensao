const { createApp } = Vue;
createApp({
  data() {
    return {
      contador: 0,
      menuAberto: false,
      produtos: [
        {
          id: 1,
          nome: "Caderno",
          preco: 15.0,
          imagem1: "./img/caderno.png",
          imagem2: "./img/caderno2.png",
        },
        {
          id: 2,
          nome: "Apontador",
          preco: 1.2,
          imagem1: "./img/apontador.png",
          imagem2: "./img/apontador2.png",
        },
        {
          id: 3,
          nome: "Estojo",
          preco: 8.5,
          imagem1: "./img/estojo.png",
          imagem2: "./img/estojo2.png",
        },
      ],
      carrinho: [],
      valorTotal: 0.0,
    };
  },

  methods: {
    adicionarCarrinho(p) {
      this.carrinho.push(p);
      this.valorTotal += p.preco;
    },
    removerCarrinho(idx) {
      this.carrinho.splice(idx, 1);
      this.valorTotal -= this.carrinho[idx].preco;
    },
  },
}).mount("#app");
