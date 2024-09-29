fetch('./edicao-entrega/entregas.json')
  .then(response => response.json())
  .then(data => {
    // Textos dinâmicos
    document.getElementById('titulo-envios-brasil').textContent = data.titulo_envios_brasil;
    document.getElementById('titulo-faca-encomenda').textContent = data.titulo_faca_encomenda;
    document.getElementById('mensagem-encomenda').textContent = data.mensagem_encomenda;
    document.getElementById('regras-entrega').textContent = data.regras_entrega;
    document.getElementById('formas-pagamento').textContent = data.formas_pagamento;
    document.getElementById('endereco').textContent = data.endereco;
    
    // Links dinâmicos
    document.getElementById('promocao-link').setAttribute('href', data.promocao_link);
    document.getElementById('promocao-texto').textContent = data.promocao_texto;

    // Imagens dinâmicas
    document.getElementById('logo-img').setAttribute('src', data.logo_url);
    document.getElementById('icon-box').setAttribute('src', data.icons.box);
    document.getElementById('icon-whatsapp').setAttribute('src', data.icons.whatsapp);
    document.getElementById('promocao-img').setAttribute('src', data.icons.promocao);
    document.getElementById('icon-visa').setAttribute('src', data.icons.visa);
    document.getElementById('icon-card').setAttribute('src', data.icons.card);
    document.getElementById('icon-pix').setAttribute('src', data.icons.pix);
    document.getElementById('icon-instagram').setAttribute('src', data.icons.instagram);
    document.getElementById('icon-whatsapp-footer').setAttribute('src', data.icons.whatsapp_footer);
    
    // Atualizando o carousel com imagens dinâmicas
    const carouselTrack = document.getElementById('carousel-track');
    data.carousel_images.forEach(image => {
      const imgElement = document.createElement('img');
      imgElement.setAttribute('src', image);
      imgElement.setAttribute('alt', 'Imagem do carousel');
      carouselTrack.appendChild(imgElement);
    });
  })
  .catch(error => console.log('Erro ao carregar dados:', error));
