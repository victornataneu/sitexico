document.addEventListener("DOMContentLoaded", function() {
    // Fetch data from the JSON file
    fetch('./edicao-entrega/entregas.json')
        .then(response => response.json())
        .then(data => {
            // Update the content with data from JSON
            document.getElementById("titulo-entrega").innerText = data.titulo_entrega;
            document.getElementById("conteudo-entrega").innerText = data.conteudo_entrega;

            // Promoção texto
            document.getElementById("promocao-texto").innerText = data.promocao_texto;

            // Atualiza as imagens do carousel
            const carouselTrack = document.querySelector(".carousel-track");
            carouselTrack.innerHTML = ''; // Limpa o conteúdo atual
            data.carousel_imagens.forEach(imagem => {
                const imgElement = document.createElement("img");
                imgElement.src = imagem;
                carouselTrack.appendChild(imgElement);
            });

            // Formas de pagamento
            document.getElementById("formas-pagamento-descricao").innerText = data.formas_pagamento.descricao;
            document.getElementById("desconto-pix").innerText = data.formas_pagamento.desconto_pix;

            // Endereço
            document.getElementById("endereco").innerText = data.endereco;
        })
        .catch(error => console.error('Erro ao carregar o JSON:', error));
});
