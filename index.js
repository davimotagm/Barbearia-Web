const barbearia = {
    cortes: [
        { id: 1, tipo: "Militar", valor: 20.0 },
        { id: 2, tipo: "Samurai", valor: 35.0 },
        { id: 3, tipo: "Pompadour", valor: 20 },
        { id: 4, tipo: "Moicano", valor: 0 },
        { id: 5, tipo: "Razor part", valor: 0 },
    ],

    barbas: [
        { id: 1, tipo: "Capitão Jack", valor: 20.0 },
        { id: 2, tipo: "Van Dyke", valor: 20.0 },
        { id: 3, tipo: "Barba Média", valor: 20.0 },
        { id: 4, tipo: "Barba Baixa", valor: 20.0 },
        { id: 5, tipo: "Barba Zero", valor: 15.0 },
    ],
    estaAberto: true,
};



function buscaCortePorId(id) {
    for (i = 0; i < barbearia.cortes.length; i++) {
        let idSelecionado = barbearia.cortes[i].id;
        if (idSelecionado === id) {
            return barbearia.cortes[i]
        }
    }
    return "Corte não encontrado";
}
//   console.log(buscaCortePorId(5));

function buscaBarbaPorId(id) {
    for (i = 0; i < barbearia.barbas.length; i++) {
        let idSelecionado = barbearia.barbas[i].id;
        if (idSelecionado === id) {
            return barbearia.barbas[i]
        }
    }
    return "Barba não encontrada";
}
// console.log(buscaBarbaPorId(5));

function verificaStatusBarbearia() {
    if (barbearia.estaAberto) {
        return "Estamos abertos"
    }
    return "Estamos fechados";
}
//   console.log(verificaStatusBarbearia());

function retornaTodosCortes() {
    return barbearia.cortes;
}
//   console.log(retornaTodosCortes());

function retornaTodasBarbas() {
    return barbearia.barbas;
}
//   console.log(retornaTodasBarbas());

function criaPedido(nomeCliente, corteId, barbaId) {
    const tipoCorte = buscaCortePorId(corteId).tipo;
    const valorCorte = buscaCortePorId(corteId).valor;
    const tipoBarba = buscaBarbaPorId(barbaId).tipo;
    const valorBarba = buscaBarbaPorId(barbaId).valor;
    let pedido = {
        nome: nomeCliente,
        pedidoCorte: tipoCorte,
        pedidoCortePreco: valorCorte,
        pedidoBarba: tipoBarba,
        pedidoBarbaPreco: valorBarba
    }
    return pedido;
}
// console.log(criaPedido("Davi", 3, 5))

function calculaTotal(pedido) {
    let soma = pedido.pedidoCortePreco + pedido.pedidoBarbaPreco
    return soma
}
// console.log(calculaTotal(criaPedido("Davi", 3, 5)))
