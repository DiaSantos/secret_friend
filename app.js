//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Lista para armazenar os nomes adicionados
let nomes = [];

// Flag para indicar se já foi realizado o sorteio
let sorteado = false;

/**
 * Adiciona um nome à lista de amigos.
 * 
 * - Remove espaços extras do nome digitado.
 * - Não permite inserir nomes vazios.
 * - Se já houver sorteio, reinicia todo o processo.
 * - Atualiza a lista exibida na tela.
 * 
 * @returns {void} Não retorna valor.
 */
function adicionarAmigo() {
    let campo = document.getElementById('amigo'); // Campo de entrada
    let nome = campo.value.trim(); // Remove espaços extras

    // Se já houve sorteio, limpa tudo para reiniciar
    if (sorteado) {
        nomes = [];
        document.getElementById('listaAmigos').innerHTML = '';
        document.getElementById('resultado').innerHTML = '';
        sorteado = false;
    }

    // Impede a adição de nomes vazios
    if (!nome) {
        alert('Digite um nome válido');
        return;
    }

    // Adiciona o nome na lista
    nomes.push(nome);

    // Atualiza a exibição da lista de nomes na tela
    document.getElementById('listaAmigos').innerHTML =
        nomes.map(n => `<li>${n}</li>`).join('');

    // Limpa o campo de entrada
    campo.value = '';
}

/**
 * Realiza o sorteio de um amigo secreto.
 * 
 * - Escolhe aleatoriamente um nome da lista.
 * - Exibe somente o nome sorteado na tela.
 * - Marca que o sorteio foi realizado para controlar reinício.
 * 
 * @returns {void} Não retorna valor.
 */
function sortearAmigo() {
    // Impede sorteio se não houver nomes
    if (!nomes.length) {
        alert('Adicione pelo menos um nome!');
        return;
    }

    // Gera um índice aleatório
    let indice = Math.floor(Math.random() * nomes.length);

    // Mostra apenas o nome sorteado
    document.getElementById('resultado').innerHTML =
        `<li>🎉 Amigo Secreto: ${nomes[indice]}</li>`;

    // Limpa a lista exibida para deixar só o resultado
    document.getElementById('listaAmigos').innerHTML = '';

    // Marca que o sorteio foi realizado
    sorteado = true;
}
