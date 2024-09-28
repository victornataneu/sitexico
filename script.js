// Função para carregar o conteúdo dinâmico
document.addEventListener("DOMContentLoaded", function() {
    fetch('/folder/index.md') // ou /folder/index.json se usar JSON
    .then(response => response.text())
    .then(data => {
        const content = parseMarkdown(data);
        document.getElementById('logo').src = "/assets/img/logoxico.jpeg"; // Altere o caminho da logo conforme a sua estrutura
        document.getElementById('slogan').textContent = content.slogan;
        document.getElementById('whatsapp-text').textContent = content.whatsapp;
        document.getElementById('delivery-rules').textContent = content.delivery_rules;
        document.getElementById('payment-options').textContent = content.payment_options;

        // Carregar produtos dinamicamente (adicione mais campos se necessário)
        const productsDiv = document.getElementById('products');
        content.products.forEach(product => {
            let imgElement = document.createElement('img');
            imgElement.src = product.image;
            imgElement.alt = product.name;
            productsDiv.appendChild(imgElement);
        });
    });
});

// Função básica de parsing de Markdown (você pode melhorar isso com uma biblioteca Markdown)
function parseMarkdown(mdText) {
    const result = {};
    mdText.split("\n").forEach(line => {
        if (line.startsWith('---')) return;
        const [key, value] = line.split(': ');
        result[key.trim()] = value ? value.trim().replace(/"/g, '') : "";
    });
    return result;
}
