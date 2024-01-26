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
}






