const containerPai = document.querySelector('.container-central-resposta-quadro');
const inputText = document.getElementById('inputText');

// Criar os elementos
const h3 = document.createElement('h3');
const img = document.createElement('img');

// Definir conteúdo inicial
h3.textContent = 'Nenhuma mensagem encontrada!';
img.setAttribute('src', './imagem.jpg');

// Adicionar ao container pai
containerPai.appendChild(h3);
containerPai.appendChild(img);

inputText.addEventListener('input', () => {
    if (inputText.value !== "") {
        // Remover elementos existentes
        containerPai.innerHTML = '';
    } else {
        h3.textContent = 'Nenhuma mensagem encontrada!';
        img.setAttribute('src', './imagem.jpg');

        containerPai.appendChild(h3);
        containerPai.appendChild(img);
    }
});

const tabelaSubstituicao = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
};

function criptografarTexto() {
    const textoOriginal = inputText.value;

    let textoCriptografado = '';
    for (let letra of textoOriginal) {
        textoCriptografado += tabelaSubstituicao[letra] || letra;
    }

    const p = document.createElement('p');
    p.textContent = textoCriptografado;
    containerPai.appendChild(p);
};

// Função para gerar a tabela de substituição inversa
function gerarTabelaInversa(tabela) {
    const tabelaInversa = {};
    for (const chave in tabela) {
        const valor = tabela[chave];
        tabelaInversa[valor] = chave;
    }
    return tabelaInversa;
}

const tabelaSubstituicaoInversa = gerarTabelaInversa(tabelaSubstituicao);

function descriptografarTexto() {
    const textoCriptografado = inputText.value.trim();

    // Dividir o texto criptografado em palavras
    const palavrasCriptografadas = textoCriptografado.split(' ');

    // Descriptografar cada palavra
    const palavrasDescriptografadas = palavrasCriptografadas.map(palavraCriptografada => {
        return tabelaSubstituicaoInversa[palavraCriptografada] || palavraCriptografada;
    });

    // Unir as palavras descriptografadas
    const textoDescriptografado = palavrasDescriptografadas.join(' ');

    // Limpar container pai
    containerPai.innerHTML = '';

    // Adicionar o texto descriptografado ao container pai
    const p = document.createElement('p');
    p.textContent = textoDescriptografado;
    containerPai.appendChild(p);
}










