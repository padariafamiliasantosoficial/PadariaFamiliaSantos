if (document.querySelector('.swiper')) {
    const swiper = new Swiper('.swiper', {
        loop: true,
        autoplay: {
            delay: 0, // Sem pausa entre transições
            disableOnInteraction: false, // Continua mesmo com interação
        },
        speed: 5000, // Velocidade total da transição (5 segundos)
        slidesPerView: 'auto', // Ajusta automaticamente ao tamanho dos slides
        spaceBetween: 10, // Espaçamento entre slides
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });

    // Pausar autoplay ao clicar nas setas
    const nextButton = document.querySelector('.swiper-button-next');
    const prevButton = document.querySelector('.swiper-button-prev');

    if (nextButton && prevButton) {
        nextButton.addEventListener('click', () => {
            swiper.autoplay.stop(); // Para o autoplay
            swiper.params.speed = 500; // Define a velocidade da transição
        });
        prevButton.addEventListener('click', () => {
            swiper.autoplay.stop(); // Para o autoplay
            swiper.params.speed = 500; // Define a velocidade da transição
        });
    }
}

        // Opcional: Pausar autoplay ao clicar nas setas
        const nextButton = document.querySelector('.swiper-button-next');
const prevButton = document.querySelector('.swiper-button-prev');

if (nextButton && prevButton) {
    nextButton.addEventListener('click', () => {
        swiper.autoplay.stop(); // Para o autoplay
        swiper.params.speed = 500; // Define a velocidade da transição (2,5 segundos)
    });
    prevButton.addEventListener('click', () => {
        swiper.autoplay.stop(); // Para o autoplay
        swiper.params.speed = 500; // Define a velocidade da transição (2,5 segundos)
    });
}


///PARTE 2

// Array de produtos
const produtos = [
    { id: 1, nome: 'Pão de Queijo', preco: 0.50, imagem: 'imagens/paodequeijo.jpg', descricao: 'Delicioso por fora, macio por dentro! Nosso pão de queijo é feito com ingredientes selecionados e muito queijo de verdade, perfeito para acompanhar um café ou como lanche rápido.', categoria: 'Salgados', slug: 'pao-de-queijo' },
    { id: 2, nome: 'Pão de Sal', preco: 0.60, imagem: 'imagens/paodesal.jpg', descricao: 'O clássico pão de sal, crocante por fora e macio por dentro. Ideal para sanduíches ou para comer com manteiga no café da manhã.', categoria: 'Pães', slug: 'pao-de-sal' },
    { id: 3, nome: 'Enroladinho de Salsicha', preco: 1.99, imagem: 'imagens/enroladinhodesalsicha.jpg', descricao: 'Saboroso enroladinho de salsicha, perfeito para um lanche rápido. Feito com massa leve e salsicha de qualidade.', categoria: 'Salgados', slug: 'enroladinho-de-salsicha' },
    { id: 4, nome: 'Bolo Bombocado', preco: 16.49, imagem: 'imagens/bolobombocado.jpg', descricao: 'Um bolo bombocado irresistível, com textura macia e sabor intenso de coco. Perfeito para sobremesa ou lanche da tarde.', categoria: 'Bolos', slug: 'bolo-bombocado' },
    { id: 5, nome: 'Bolo de Chocolate', preco: 19.99, imagem: 'imagens/bolodechocolate.jpg', descricao: 'Bolo de chocolate fofinho e delicioso, com cobertura cremosa de chocolate. Uma explosão de sabor para os amantes de chocolate.', categoria: 'Bolos', slug: 'bolo-de-chocolate' },
    { id: 6, nome: 'Pudim', preco: 4.99, imagem: 'imagens/pudim.jpg', descricao: 'Pudim cremoso com calda caramelizada, feito com leite condensado e ovos. Uma sobremesa clássica que derrete na boca.', categoria: 'Sobremesas', slug: 'pudim' },
    { id: 7, nome: 'Rosca de Leite', preco: 2.50, imagem: 'imagens/rosquinhadeleite.jpg', descricao: 'Rosca de leite macia e saborosa, com leve toque de baunilha. Perfeita para acompanhar um café ou chá.', categoria: 'Pães', slug: 'rosca-de-leite' },
    { id: 8, nome: 'Pão de Doce', preco: 1.20, imagem: 'imagens/paodedoce.jpeg', descricao: 'Pão doce com um toque especial de canela e açúcar. Ideal para o café da manhã ou lanche da tarde.', categoria: 'Pães', slug: 'pao-de-doce' },
    { id: 9, nome: 'Bolo de Cenoura', preco: 16.49, imagem: 'imagens/bolodecenoura.jpg', descricao: 'Bolo de cenoura macio com cobertura de chocolate. Um clássico brasileiro que combina o sabor da cenoura com o doce do chocolate.', categoria: 'Bolos', slug: 'bolo-de-cenoura' },
    { id: 10, nome: 'Bolo de Fubá', preco: 16.49, imagem: 'imagens/bolodefuba.jpg', descricao: 'Bolo de fubá tradicional, com textura leve e sabor suave de milho. Perfeito para acompanhar um café fresquinho.', categoria: 'Bolos', slug: 'bolo-de-fuba' },
    { id: 11, nome: 'Bolo de Milho', preco: 16.49, imagem: 'imagens/bolodemilho.jpg', descricao: 'Bolo de milho cremoso, feito com milho verde fresco. Uma delícia típica das festas juninas, mas gostosa o ano todo.', categoria: 'Bolos', slug: 'bolo-de-milho' },
    { id: 12, nome: 'Bolo de Trigo', preco: 16.49, imagem: 'imagens/bolodetrigo.jpg', descricao: 'Bolo de trigo simples e delicioso, com sabor caseiro. Ideal para quem gosta de um bolo fofinho e sem muita cobertura.', categoria: 'Bolos', slug: 'bolo-de-trigo' },
    { id: 13, nome: 'Bolo de Mandioca', preco: 16.49, imagem: 'imagens/bolodemandioca.jpg', descricao: 'Bolo de mandioca com textura única e sabor marcante. Feito com mandioca fresca e coco ralado.', categoria: 'Bolos', slug: 'bolo-de-mandioca' },
    { id: 14, nome: 'Bolo de Laranja', preco: 16.99, imagem: 'imagens/bolodelaranja.jpg', descricao: 'Bolo de laranja fofinho e cítrico, com cobertura de glacê de laranja. Perfeito para um lanche refrescante.', categoria: 'Bolos', slug: 'bolo-de-laranja' },
    { id: 15, nome: 'Bolo de Chocolate', preco: 20.99, imagem: 'imagens/bolodechocolate2-1.jpg', descricao: 'Bolo de chocolate, ainda mais irresistível, cobertura e recheio de chocolate.', categoria: 'Bolos', slug: 'bolo-de-chocolate-2' },
    { id: 16, nome: 'Bolo de Coco', preco: 17.99, imagem: 'imagens/bolodecoco.jpg', descricao: 'Bolo de coco úmido e saboroso, com cobertura de coco ralado. Uma explosão de sabor tropical.', categoria: 'Bolos', slug: 'bolo-de-coco' },
    { id: 17, nome: 'Bolo de Formigueiro', preco: 16.49, imagem: 'imagens/boloformigueiro.jpeg', descricao: 'Bolo de formigueiro com granulado, perfeito para festas e lanches. O contraste do granulado com a massa fofinha é irresistível.', categoria: 'Bolos', slug: 'bolo-de-formigueiro' },
    { id: 18, nome: 'Bolo de Banana', preco: 16.99, imagem: 'imagens/bolodebanana.jpg', descricao: 'Bolo de banana com um toque caseiro, feito com bananas maduras e canela. Perfeito para aproveitar bananas que estão sobrando.', categoria: 'Bolos', slug: 'bolo-de-banana' },
    { id: 19, nome: 'Bolo de Leite Ninho', preco: 16.49, imagem: 'imagens/bolodeleiteninho.jpg', descricao: 'Bolo de leite ninho cremoso, com recheio e cobertura de creme de leite ninho. Uma sobremesa sofisticada e deliciosa.', categoria: 'Bolos', slug: 'bolo-de-leite-ninho' },
    { id: 20, nome: 'Mousse de Maracujá', preco: 3.50, imagem: 'imagens/moussedemaracuja.jpg', descricao: 'Mousse leve e refrescante com sabor intenso de maracujá. Perfeito para dias quentes ou como sobremesa após uma refeição.', categoria: 'Sobremesas', slug: 'mousse-de-maracuja' },
    { id: 21, nome: 'Pão Integral', preco: 8.99, imagem: 'imagens/paointegral.jpg', descricao: 'Pão rico em fibras, perfeito para uma alimentação saudável. Feito com farinha integral e grãos.', categoria: 'Pães', slug: 'pao-integral' },
    { id: 22, nome: 'Pão de Forma', preco: 11.49, imagem: 'imagens/paodeforma.jpg', descricao: 'Pão fatiado, macio e versátil para sanduíches e torradas. Ideal para o café da manhã ou lanches rápidos.', categoria: 'Pães', slug: 'pao-de-forma' },
    { id: 23, nome: 'Cajuzinho', preco: 1.50, imagem: 'imagens/cajuzinho.jpg', descricao: 'Doce de amendoim com toque de chocolate, coberto com granulado. Um clássico das festas brasileiras.', categoria: 'Sobremesas', slug: 'cajuzinho' },
    { id: 24, nome: 'Torta de Morango', preco: 6.00, imagem: 'imagens/tortademorango.jpg', descricao: 'Torta com creme de baunilha e morangos frescos, coberta com geleia de morango. Uma sobremesa leve e deliciosa.', categoria: 'Sobremesas', slug: 'torta-de-morango' },
    { id: 25, nome: 'Pão de Milho', preco: 2.50, imagem: 'imagens/paodemilho.jpg', descricao: 'Pão leve com sabor rústico de milho, ótimo para lanches. Feito com fubá e milho verde.', categoria: 'Pães', slug: 'pao-de-milho' },
    { id: 26, nome: 'Pão de Centeio', preco: 3.00, imagem: 'imagens/paocenteio.jpg', descricao: 'Pão denso e nutritivo, com sabor marcante de centeio. Ideal para sanduíches mais robustos.', categoria: 'Pães', slug: 'pao-de-centeio' },
    { id: 27, nome: 'Pão Ciabatta', preco: 4.00, imagem: 'imagens/paociabatta.jpg', descricao: 'Pão italiano com casca crocante e miolo aerado, perfeito para bruschettas ou sanduíches gourmet.', categoria: 'Pães', slug: 'pao-ciabatta' },
    { id: 28, nome: 'Pão de Leite', preco: 1.80, imagem: 'imagens/paodeleite.jpg', descricao: 'Pão macio e levemente doce, ideal para lanches infantis ou para comer com geleia.', categoria: 'Pães', slug: 'pao-de-leite' },
    { id: 29, nome: 'Cheesecake', preco: 7.00, imagem: 'imagens/cheesecake.jpg', descricao: 'Torta cremosa de queijo com base de biscoito e cobertura de frutas vermelhas. Uma sobremesa sofisticada e irresistível.', categoria: 'Sobremesas', slug: 'cheesecake' },
    { id: 30, nome: 'Esfiha de Carne', preco: 3.00, imagem: 'imagens/esfiha.jpg', descricao: 'Esfiha recheada com carne moída temperada, suculenta e saborosa. Perfeita para um lanche rápido.', categoria: 'Salgados', slug: 'esfiha-de-carne' },
    { id: 31, nome: 'Coxinha de Frango', preco: 3.50, imagem: 'imagens/coxinhadefrango.jpg', descricao: 'Coxinha crocante com recheio cremoso de frango desfiado. Um clássico das padarias brasileiras.', categoria: 'Salgados', slug: 'coxinha-de-frango' },
    { id: 32, nome: 'Empada de Palmito', preco: 3.20, imagem: 'imagens/empada.jpg', descricao: 'Empada com massa amanteigada e recheio cremoso de palmito. Uma opção vegetariana deliciosa.', categoria: 'Salgados', slug: 'empada-de-palmito' },
    { id: 33, nome: 'Beijinho', preco: 1.50, imagem: 'imagens/beijinho.jpg', descricao: 'Doce de coco com toque de leite condensado, coberto com coco ralado. Um docinho tradicional e irresistível.', categoria: 'Sobremesas', slug: 'beijinho' },
    { id: 34, nome: 'Quibe Frito', preco: 3.00, imagem: 'imagens/quibefrito.jpg', descricao: 'Quibe crocante com recheio de carne moída e especiarias. Perfeito para um lanche ou aperitivo.', categoria: 'Salgados', slug: 'quibe-frito' },
    { id: 35, nome: 'Folhado de Frango', preco: 3.50, imagem: 'imagens/folhadefrango.jpg', descricao: 'Massa folhada com recheio cremoso de frango e catupiry. Uma combinação irresistível de sabores.', categoria: 'Salgados', slug: 'folhado-de-frango' },
    { id: 36, nome: 'Pudim de Leite', preco: 5.00, imagem: 'imagens/pudimdeleite.jpg', descricao: 'Pudim cremoso com calda de caramelo, clássico e irresistível. Feito com leite condensado, ovos e baunilha.', categoria: 'Sobremesas', slug: 'pudim-de-leite' }
];

// Função auxiliar para encontrar produto por slug
function encontrarProdutoPorSlug(slug) {
    return produtos.find(prod => prod.slug === slug);
}

// Função para exibir detalhes (adaptada para usar slug opcional)
function exibirDetalhesProduto(slugOrId) {
    let produto;
    if (typeof slugOrId === 'string') {
        produto = encontrarProdutoPorSlug(slugOrId);
    } else {
        produto = produtos.find(p => p.id === slugOrId); // Fallback para ID
    }
    
    if (produto) {
        // ... (seu código existente para popular os detalhes no DOM)
        
        // Atualiza a URL para slug (se ainda não estiver)
        if (!window.location.pathname.startsWith(`/produto/${produto.slug}`)) {
            history.pushState({ slug: produto.slug }, '', `/produto/${produto.slug}`);
        }
    } else {
        console.error('Produto não encontrado');
    }
}

// Ao carregar a página, verifica se há slug na URL
window.addEventListener('load', () => {
    const path = window.location.pathname;
    const match = path.match(/^\/produto\/([a-z0-9-]+)$/);
    if (match) {
        const slug = match[1];
        exibirDetalhesProduto(slug);
    }
    // ... (outros códigos de load existentes)
});

// Lidar com back/forward no navegador
window.addEventListener('popstate', (event) => {
    const path = window.location.pathname;
    const match = path.match(/^\/produto\/([a-z0-9-]+)$/);
    if (match) {
        exibirDetalhesProduto(match[1]);
    } else {
        // Fecha os detalhes se voltar para lista
        if (infoProduto) infoProduto.style.display = 'none';
    }
});


// Array do carrinho
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

// Função para salvar o carrinho no localStorage
function salvarCarrinho() {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

// Swiper
if (document.querySelector('.swiper')) {
    const swiper = new Swiper('.swiper', {
        loop: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        speed: 5000,
        slidesPerView: 'auto',
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });

    const nextButton = document.querySelector('.swiper-button-next');
    const prevButton = document.querySelector('.swiper-button-prev');

    if (nextButton && prevButton) {
        nextButton.addEventListener('click', () => {
            swiper.autoplay.stop();
            swiper.params.speed = 500;
        });
        prevButton.addEventListener('click', () => {
            swiper.autoplay.stop();
            swiper.params.speed = 500;
        });
    }
}

// Função para exibir produtos por categoria
// Exemplo corrigido dentro de exibirProdutosPorCategoria(categoria)
// Função para exibir produtos por categoria (versão corrigida e única)
function exibirProdutosPorCategoria(categoria) {
    const container = document.getElementById('produtos-filtrados');
    if (!container) {
        console.error("Elemento #produtos-filtrados não encontrado no DOM");
        return;
    }
    container.innerHTML = '';
    let produtosFiltrados = categoria === 'Menu' ? produtos : produtos.filter(p => p.categoria === categoria);
    
    produtosFiltrados.forEach(produto => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.dataset.slug = produto.slug; // Armazena slug para cliques
        card.innerHTML = `
            <div class="product-content">
                <div class="product-image-container">
                    <img class="product-image" src="${produto.imagem || 'imagens/placeholder.jpg'}" alt="${produto.nome}">
                    <div class="product-text">
                        <h3>${produto.nome}</h3>
                        <h4>Preço: R$ ${produto.preco.toFixed(2)}</h4>
                    </div>
                    <button class="add-cart" type="button">Adicionar ao Carrinho</button>
                    <div class="container-cart-qntd">
                        <button class="btn-menos" onclick="alterarQuantidade(${produto.id}, -1, false)">-</button>
                        <input class="quantidade" type="number" value="1" min="1" onchange="alterarQuantidade(${produto.id}, this.value, false)">
                        <button class="btn-mais" onclick="alterarQuantidade(${produto.id}, 1, false)">+</button>
                    </div>
                </div>
            </div>
        `;
        
        // Listener para clique no card inteiro (exceto botões/input) - usa slug e pushState
        card.addEventListener('click', (e) => {
            if (e.target.tagName !== 'BUTTON' && e.target.tagName !== 'INPUT') {
                e.preventDefault(); // Evita redirecionamento padrão
                exibirDetalhesProduto(produto.slug); // Chama com slug
                history.pushState({ slug: produto.slug }, '', `/produto/${produto.slug}`); // Atualiza URL sem recarregar
            }
        });
        
        // Listener para "Adicionar ao Carrinho"
        const btnAdd = card.querySelector('.add-cart');
        btnAdd.addEventListener('click', e => {
            e.stopPropagation();
            e.preventDefault();
            const quantidade = parseInt(card.querySelector('.quantidade').value) || 1;
            adicionarAoCarrinho(produto.id, quantidade);
        });
        
        container.appendChild(card);
    });
    
    // Se usar Swiper no container, atualize aqui
    // if (swiper) swiper.update();
}

// Função para adicionar ao carrinho
function adicionarAoCarrinho(id, quantidade = 1) {
    const produto = produtos.find(p => p.id == id);
    if (produto) {
        const itemExistente = carrinho.find(item => item.id == id);
        if (itemExistente) {
            itemExistente.quantidade += quantidade;
        } else {
            carrinho.push({ ...produto, quantidade });
        }
        salvarCarrinho();
        exibirCarrinho();
    }
}

// Função para exibir o carrinho dinamicamente
function exibirCarrinho() {
    mensagemCarrinho = ''; // Limpa a mensagem por padrão
    const listaInterativa = document.getElementById('lista');
    listaInterativa.innerHTML = `
    <div class="cart-header">
    <img src="imagens/fechar.png" alt="Fechar carrinho" class="close-button" onclick="toggleCart()">
        </div>
            <h1>Seu carrinho</h1>  
    `;
    // Calcula o número de tipos de itens no carrinho (quantidade de produtos diferentes)
    const totalTiposItens = carrinho.length;
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        if (totalTiposItens > 0) {
            cartCount.textContent = totalTiposItens;
            cartCount.classList.remove('hidden');
        } else {
            cartCount.classList.add('hidden');
        }
    }
    if (carrinho.length === 0) {
        listaInterativa.innerHTML += '<p style="color: black;">O carrinho está vazio.</p>';
        document.getElementById('cart-total').textContent = 'Total: R$ 0.00';
        return;
    }

    let total = 0;
    carrinho.forEach(item => {
        total += item.preco * item.quantidade;
        const divItem = document.createElement('div');
        divItem.className = 'item-carrinho';
        divItem.innerHTML = `
            <img src="${item.imagem}" alt="${item.nome}" style="width: 50px; height: 50px; object-fit: cover;">
            <div class="item-info">
                <h2>${item.nome}</h2>
                <p>Preço: R$ ${item.preco.toFixed(2)}</p>
                <p>Total: R$ ${(item.preco * item.quantidade).toFixed(2)}</p>
            </div>
                <button class="btn-menos" onclick="alterarQuantidade(${item.id}, -1, true)">-</button>
                <input class="quantidade" type="number" value="${item.quantidade}" min="1" onchange="alterarQuantidade(${item.id}, this.value, true)">
                <button class="btn-mais" onclick="alterarQuantidade(${item.id}, 1, true)">+</button>
            </div>
            <button class="remover-item" onclick="removerDoCarrinho(${item.id})">Remover</button>
        `;
        listaInterativa.appendChild(divItem);
    });
    const container = document.createElement('div');
        container.style.display = 'flex'; 
        container.style.alignItems = 'center'; 
        container.style.justifyContent = 'space-between'; 
        container.style.gap = '10px'; 
        
        // texto total
        const totalElement = document.createElement('p');
        totalElement.id = 'cart-total';
        totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
        container.appendChild(totalElement);

        // botão de limpar
    const limpar = document.createElement('button');
        limpar.id = 'limpar';
        limpar.textContent = 'Limpar Carrinho';
        limpar.onclick = limparCarrinho;
        container.appendChild(limpar); 

       
        listaInterativa.appendChild(container);

        
    const finalizarCompra = document.createElement('button');
        container.style.marginBottom ="25px";
        container.style.alignItems ="center"
        finalizarCompra.id = 'finalizar';
        finalizarCompra.textContent = 'Finalizar Compra';
        finalizarCompra.className = 'botaofinalizar';
        finalizarCompra.onclick = function() {
            const mensagemElement = document.getElementById('mensagem');
            if (mensagemElement) {
                mensagemElement.innerHTML = 'Função indisponível no momento, <a href="Sobre" class="saiba-mais">SAIBA MAIS</a>';
            }
        
        };
      
        listaInterativa.appendChild(finalizarCompra); // Anexa diretamente ao listaInterativa

        // Criar o elemento de mensagem
        const mensagemElement = document.createElement('p');
        mensagemElement.id = 'mensagem';
        listaInterativa.appendChild(mensagemElement);
}



// Função para alterar quantidade
let mensagemCarrinho = '';

function alterarQuantidade(id, valor, noCarrinho = false) {
    if (noCarrinho) {
        // Lógica para o carrinho
        const item = carrinho.find(item => item.id == id);
        if (item) {
            let novaQuantidade;
            if (typeof valor === 'number') {
                // Caso dos botões (+1 ou -1)
                novaQuantidade = item.quantidade + valor;
            } else {
                // Caso do input (valor digitado)
                novaQuantidade = parseInt(valor) || 1;
            }
            if (novaQuantidade <= 100 && novaQuantidade >= 1) {
                item.quantidade = novaQuantidade;
                document.getElementById('mensagem').innerText = "";
            }
            salvarCarrinho();
            exibirCarrinho();
        }
    } else {
        // Lógica para os cartões de produto
        const input = document.querySelector(`.product-card[data-id="${id}"] .quantidade`);
        if (input) {
            let novaQuantidade;
            if (typeof valor === 'number') {
                // Caso dos botões (+1 ou -1)
                novaQuantidade = (parseInt(input.value) || 1) + valor;
            } else {
                // Caso do input (valor digitado)
                novaQuantidade = parseInt(valor) || 1;
            }
            if (novaQuantidade >= 1 && novaQuantidade <= 100) {
                input.value = novaQuantidade;
            }
        }
    }
}

// Função para remover item do carrinho
function removerDoCarrinho(id) {
    carrinho = carrinho.filter(item => item.id != id);
    salvarCarrinho();
    exibirCarrinho();
}

// Função para limpar o carrinho
function limparCarrinho() {
    carrinho = [];
    salvarCarrinho();
    exibirCarrinho();
}

// Função para alternar visibilidade do carrinho
function toggleCart() {
    const listaInterativa = document.getElementById('lista');
    const overlay = document.querySelector('.overlay');
    listaInterativa.classList.toggle('open');
    overlay.classList.toggle('show');
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const tipo = params.get('tipo');
    const infoProduto = document.querySelector('.info-produto');
    const categoriaDetalhes = document.querySelector('.categoria-detalhes');

    let produto = null;

    // Verifica se é uma URL com slug (/produto/slug)
    const path = window.location.pathname.toLowerCase().replace(/\/$/, ''); // Remove barra final se houver
    let slug = null;
    if (path.startsWith('/produto/')) {
        slug = path.substring('/produto/'.length);
        produto = produtos.find(p => p.slug === slug);
    }

    // Fallback para ?id= (compatibilidade com links antigos)
    const productId = params.get('id');
    if (!produto && productId) {
        produto = produtos.find(p => p.id == productId);
    }

    if (window.location.pathname.includes('Produtos') || path.startsWith('/produto/')) {
        if (!infoProduto) {
            console.error("Elemento .info-produto não encontrado no DOM");
            return;
        }

        if (produto) {
            document.getElementById('produto-imagem').src = produto.imagem;
            document.getElementById('produto-imagem').alt = produto.nome;
            document.getElementById('produto-nome').textContent = produto.nome;
            document.getElementById('produto-descricao').textContent = produto.descricao;
            document.getElementById('produto-preco').textContent = `Preço: R$ ${produto.preco.toFixed(2)}`;
            document.getElementById('add-cart').textContent = 'Adicionar ao Carrinho';
            
            const qntdInput = document.getElementById('qntd');
            qntdInput.value = '1';
            qntdInput.min = '1';  // Adiciona atributo min
            qntdInput.max = '100'; // Adiciona atributo max
            
            infoProduto.style.display = 'grid';

            // Adicionar classes para reduzir padding
            if (categoriaDetalhes) {
                categoriaDetalhes.classList.add('info-visivel');
            }
            if (infoProduto) {
                infoProduto.classList.add('info-produto-visivel');
            }

            // Função para alterar quantidade na página de detalhes (similar a alterarQuantidade)
            function alterarQuantidadeDetalhes(valor) {
                let novaQuantidade;
                const input = document.getElementById('qntd');
                const mensagemElement = document.getElementById('mensagem') || document.createElement('p'); // Usa elemento existente ou cria
                mensagemElement.id = 'mensagem';
                if (!document.getElementById('mensagem')) {
                    infoProduto.appendChild(mensagemElement); // Adiciona à página se não existir
                }

                if (typeof valor === 'string') {
                    novaQuantidade = parseInt(valor);
                    if (isNaN(novaQuantidade)) {
                        // Entrada inválida: mantém valor anterior
                        input.value = input.value || 1;
                        mensagemElement.innerText = "Por favor, insira um número válido.";
                        setTimeout(() => { mensagemElement.innerText = ""; }, 3000);
                        return;
                    }
                } else {
                    // Para botões: calcula com base no valor atual
                    novaQuantidade = (parseInt(input.value) || 1) + valor;
                }

                // Limita entre 1 e 100
                novaQuantidade = Math.max(1, Math.min(100, novaQuantidade));
                input.value = novaQuantidade;
                mensagemElement.innerText = ""; // Limpa mensagem em caso de sucesso
            }

            // Adicionar ao carrinho com quantidade validada
            document.getElementById('add-cart').addEventListener('click', () => {
                alterarQuantidadeDetalhes(qntdInput.value); // Valida antes de adicionar
                const quantidade = parseInt(qntdInput.value) || 1;
                adicionarAoCarrinho(produto.id, quantidade);
            });

            // Botão de diminuir
            document.getElementById('btn-menos').addEventListener('click', () => {
                alterarQuantidadeDetalhes(-1);
            });

            // Botão de aumentar
            document.getElementById('btn-mais').addEventListener('click', () => {
                alterarQuantidadeDetalhes(1);
            });

            // Onchange para digitação direta
            qntdInput.addEventListener('change', () => {
                alterarQuantidadeDetalhes(qntdInput.value);
            });

            // Opcional: Impedir caracteres não numéricos
            qntdInput.addEventListener('input', function() {
                this.value = this.value.replace(/[^0-9]/g, '');
            });
        } else {
            infoProduto.style.display = 'none';
        }
        
        document.querySelectorAll('.categoria-detalhes h2').forEach(h2 => {
            h2.addEventListener('click', () => {
                const categoria = h2.getAttribute('data-categoria');
                exibirProdutosPorCategoria(categoria);
            });
        });

        if (tipo) {
            exibirProdutosPorCategoria(tipo);
        } else {
            exibirProdutosPorCategoria('Menu');
        }
    }

    exibirCarrinho();
});


// Adicionar menu pequeno para telas menores
    // Seleciona o ícone e o menu

    // Função para criar e adicionar o menu mobile à página


// Chama a função para criar o menu (pode colocar isso no final do script ou no onload)
        let btnMenu = document.getElementById('icone-mobile')
        let menuMob = document.getElementById('container-mobile')
    
    btnMenu.addEventListener('click', toggleMenu)
    

// Função para alternar visibilidade do menu mobile
function toggleMenu() {
    const menuMob = document.getElementById('container-mobile');
    const overlay = document.querySelector('.overlay');
    menuMob.classList.toggle('abrir-menu');
    overlay.classList.toggle('show');
}

// Função para abrir o carrinho a partir do menu mobile
function openCartFromMenu() {
    // Fecha o menu mobile
    const menuMob = document.getElementById('container-mobile');
    menuMob.classList.remove('abrir-menu');

    // Abre o carrinho
    toggleCart();
}
function toggleMenu() {
    const menuMob = document.getElementById('container-mobile');
    const overlay = document.querySelector('.overlay');

    if (menuMob.classList.contains('abrir-menu')) {
        // Menu está aberto: feche apenas ele
        menuMob.classList.remove('abrir-menu');
        overlay.classList.remove('show');
    } else {
        // Menu está fechado: feche qualquer outro painel aberto (ex: carrinho) usando closeSidePanels
        closeSidePanels();
        // Agora abra o menu
        menuMob.classList.add('abrir-menu');
        overlay.classList.add('show');
    }
}
function toggleCart() {
    const listaInterativa = document.getElementById('lista');
    const overlay = document.querySelector('.overlay');

    if (listaInterativa.classList.contains('open')) {
        // Carrinho está aberto: feche apenas ele
        listaInterativa.classList.remove('open');
        overlay.classList.remove('show');
    } else {
        // Carrinho está fechado: feche qualquer outro painel aberto usando closeSidePanels
        closeSidePanels();
        // Agora abra o carrinho
        listaInterativa.classList.add('open');
        overlay.classList.add('show');
    }
}
// Função para fechar painéis laterais (usada no overlay)
function closeSidePanels() {
    const menuMob = document.getElementById('container-mobile');
    const listaInterativa = document.getElementById('lista');
    const overlay = document.querySelector('.overlay');

    if (menuMob.classList.contains('abrir-menu')) {
        menuMob.classList.remove('abrir-menu');
    }
    if (listaInterativa.classList.contains('open')) {
        listaInterativa.classList.remove('open');
    }
    overlay.classList.remove('show');
}
document.querySelector('.overlay').addEventListener('click', closeSidePanels);

    let fecharMenu = document.getElementById('fechar');
fecharMenu.addEventListener('click', toggleMenu);

    //ENVIAR EMAIL

emailjs.init("R_s1_9hjc-TF4dqml");

document.getElementById("contato-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Pega os dados do localStorage
    let data = JSON.parse(localStorage.getItem("enviosEmail")) || { count: 0, date: null };
    let hoje = new Date().toLocaleDateString(); // pega data de hoje (ex: 20/08/2025)

    // Se mudou o dia, zera o contador
    if (data.date !== hoje) {
        data = { count: 0, date: hoje };
    }

    // Se já enviou 2 hoje, bloqueia
    if (data.count >= 2) {
        alert("⚠️ Você já enviou 2 mensagens hoje. Tente novamente amanhã.");
        return;
    }

    // Prepara dados do formulário
    const formData = {
        name: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("assunto").value,
        comentario: document.getElementById("comentario").value
    };

    const serviceID = "service_0uqntnt";
    const templateID = "template_tk8wxmg";

    emailjs.send(serviceID, templateID, formData)
        .then(() => {
            alert("✅ E-mail enviado com sucesso!");
            document.getElementById("contato-form").reset();

            // Atualiza contador no localStorage
            data.count++;
            data.date = hoje;
            localStorage.setItem("enviosEmail", JSON.stringify(data));
        })
        .catch((err) => {
            console.error("Erro ao enviar:", err);
            alert("❌ Ocorreu um erro ao enviar o e-mail.");
        });
});

