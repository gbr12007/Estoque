const linha = document.querySelector('.lista-produtos');
const nome = document.querySelector('.nome');
const quantidade = document.querySelector('.quantidade');
const adicionar = document.querySelector('.adicionar');
const remover = document.querySelector('.remover');
const apagar = document.querySelector('.deletar-confirmar');
let estoque = [];

function atualizarTabela() {
    let aviso = document.querySelector('.alerta');
    
    estoque = estoque.filter(item => item.quantidade > 0);
    
    linha.innerHTML = '';

    for (let item of estoque) {
        const lista = document.createElement('tr');
        const nomeColocado = document.createElement('td');
        const quantidadeC = document.createElement('td');

        nomeColocado.innerText = item.nome;
        quantidadeC.innerText = item.quantidade;

        lista.appendChild(nomeColocado);
        lista.appendChild(quantidadeC);
        linha.appendChild(lista);
    }

    aviso.style.display = 'none';
}

function deletarItem(nome, quantidade) {
    let aviso = document.querySelector('.alerta');

    for (let item of estoque) {
        if (item.nome === nome && item.quantidade >= quantidade) {
            aviso.style.display = 'flex';

            apagar.onclick = () => {
                item.quantidade -= Number(quantidade);
                atualizarTabela();
                aviso.style.display = 'none';
            };

            break;
        }
    }
}

function criandoELemento(nome, quantidade) {
    estoque.push({ nome: nome, quantidade: quantidade });
    atualizarTabela();
}

remover.addEventListener('click', e => {
    deletarItem(nome.value, Number(quantidade.value));
});

adicionar.addEventListener('click', e => {
    criandoELemento(nome.value, Number(quantidade.value));
});
