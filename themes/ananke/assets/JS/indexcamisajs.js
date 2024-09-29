function shareOnWhatsApp(productName, productImage) {
    // Número do WhatsApp para enviar a mensagem (incluindo o código do país)
    let phoneNumber = '5562994953404';

    // Crie uma mensagem para o vendedor contendo o nome do produto e o link da imagem
    let message = `Olá! Gostei desse produto: ${productName}. Veja a imagem: ${window.location.origin}${productImage}`;
    
    // Crie uma URL para abrir o WhatsApp com a mensagem preenchida e o número específico
    let whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Imprima a URL no console para verificação
    console.log('URL gerada para WhatsApp:', whatsappUrl);

    // Abre o WhatsApp em uma nova aba com a mensagem preenchida
    window.open(whatsappUrl, '_blank');
}
