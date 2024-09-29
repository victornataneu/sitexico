document.addEventListener("DOMContentLoaded", function() {
    fetch('/produtos/index.json') // Certifique-se de que a rota corresponde ao caminho dos seus arquivos JSON/Markdown
        .then(response => response.json()) // Se estiver usando JSON
        .then(data => {
            const productsDiv = document.getElementById('products');
            data.forEach(product => {
                // Cria o elemento para o produto
                let productElement = document.createElement('div');
                productElement.className = 'product-item';
                
                // Imagem do produto
                let imgElement = document.createElement('img');
                imgElement.src = product.imagem;
                imgElement.alt = product.nome;

                // Nome do produto
                let nameElement = document.createElement('h3');
                nameElement.textContent = product.nome;

                // Descrição do produto
                let descElement = document.createElement('p');
                descElement.textContent = product.descricao;

                // Preço do produto
                let priceElement = document.createElement('span');
                priceElement.textContent = `R$ ${product.preco}`;

                // Adiciona os elementos ao container do produto
                productElement.appendChild(imgElement);
                productElement.appendChild(nameElement);
                productElement.appendChild(descElement);
                productElement.appendChild(priceElement);

                // Adiciona o produto ao container principal
                productsDiv.appendChild(productElement);
            });
        })
        .catch(error => {
            console.error("Erro ao carregar produtos:", error);
        });
});
