//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let amigo = document.getElementById('amigo').value;

    if (amigo == '') {
        alert('Por favor, insira um nome.');
        return;
    }
    
    amigos.push(amigo);
    document.getElementById('amigo').value = '';

    exibirListaAmigos();
}

function exibirListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}
