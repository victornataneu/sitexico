document.addEventListener("DOMContentLoaded", function() {
    // Fetch data from the JSON file
    fetch('./edicao-entrega/entregas.json')
        .then(response => response.json())
        .then(data => {
            // Atualizar títulos
            document.getElementById("titulo-envios-brasil").innerText = data.titulo_envios_brasil;
            document.getElementById("titulo-faca-encomenda").innerText = data.titulo_faca_encomenda;

            // Atualizar link e texto da promoção
            const promocaoLink = document.getElementById("promocao-link");
            promocaoLink.href = data.promocao_link;
            document.getElementById("promocao-texto").innerText = data.promocao_texto;

            // Atualizar imagens do carousel
            const carouselTrack = document.querySelector(".carousel-track");
            carouselTrack.innerHTML = ''; // Limpa o conteúdo atual
            data.carousel_images.forEach(imageUrl => {
                const imgElement = document.createElement("img");
                imgElement.src = imageUrl;
                carouselTrack.appendChild(imgElement);
            });

            // Atualizar mensagem de encomenda e WhatsApp
            document.getElementById("mensagem-encomenda").innerText = data.mensagem_encomenda;
            const whatsappLink = document.getElementById("whatsapp-link");
            whatsappLink.href = data.whatsapp_link;

            // Atualizar regras de entrega
            document.getElementById("regras-entrega").innerText = data.regras_entrega;

            // Atualizar formas de pagamento
            const formasPagamentoDiv = document.getElementById("formas-pagamento");
            formasPagamentoDiv.innerHTML = `
                <p>${data.formas_pagamento.descricao}</p>
                <p>${data.formas_pagamento.desconto_pix}</p>
            `;

            // Atualizar endereço
            document.getElementById("endereco").innerText = data.endereco;
        })
        .catch(error => console.error('Erro ao carregar o JSON:', error));
});
