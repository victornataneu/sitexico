document.addEventListener("DOMContentLoaded", function() {
    // Fetch data from the JSON file
    fetch('./edicao-entrega/entregas.json')
        .then(response => response.json())
        .then(data => {
            // Update the content with data from JSON
            document.getElementById("titulo-envios-brasil").innerText = data.titulo_envios_brasil;
            document.getElementById("titulo-faca-encomenda").innerText = data.titulo_faca_encomenda;

            // Promoção
            document.getElementById("promocao-link").href = data.promocao_link;
            document.getElementById("promocao-texto").innerText = data.promocao_texto;

            // Mensagem de encomenda
            document.getElementById("mensagem-encomenda").innerText = data.mensagem_encomenda;

            // Atualiza as imagens do carousel
            const carouselTrack = document.querySelector(".carousel-track");
            carouselTrack.innerHTML = ''; // Limpa o conteúdo atual
            data.carousel_images.forEach(imagem => {
                const imgElement = document.createElement("img");
                imgElement.src = imagem;
                imgElement.alt = "Imagem do produto"; // Adiciona um texto alternativo
                carouselTrack.appendChild(imgElement);
            });

            // Formas de pagamento
            document.getElementById("formas-pagamento-descricao").innerText = data.formas_pagamento;

            // Endereço
            document.getElementById("endereco").innerText = data.endereco;
        })
        .catch(error => console.error('Erro ao carregar o JSON:', error));
});
