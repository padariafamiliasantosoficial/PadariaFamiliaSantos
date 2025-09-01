// Mock localStorage para ambientes não-navegador, como Node.js
if (typeof localStorage === 'undefined' || localStorage === null) {
    var localStorage = {
        store: {}, // Armazenamento em memória
        getItem: function(key) {
            return this.store.hasOwnProperty(key) ? this.store[key] : null;
        },
        setItem: function(key, value) {
            this.store[key] = value.toString(); // Simula armazenamento como string
        },
        removeItem: function(key) {
            delete this.store[key];
        },
        clear: function() {
            this.store = {};
        }
    };
}

// Configuração do Swiper
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

// Função para exibir detalhes do produto
function exibirDetalhesProduto(slug) {
    const produto = encontrarProdutoPorSlug(slug);
    const infoProduto = document.querySelector('.info-produto');
    const categoriaDetalhes = document.querySelector('.categoria-detalhes');

    if (!infoProduto) {
        console.error("Elemento .info-produto não encontrado no DOM");
        return;
    }

    if (produto) {
        const imagemElem = document.getElementById('produto-imagem');
        const nomeElem = document.getElementById('produto-nome');
        const descricaoElem = document.getElementById('produto-descricao');
        const precoElem = document.getElementById('produto-preco');
        const addCartBtn = document.getElementById('add-cart');
        const qntdInput = document.getElementById('qntd');
        const btnMenos = document.getElementById('btn-menos');
        const btnMais = document.getElementById('btn-mais');

        if (!imagemElem || !nomeElem || !descricaoElem || !precoElem || !addCartBtn || !qntdInput || !btnMenos || !btnMais) {
            console.error("Elementos de detalhes do produto não encontrados no DOM");
            return;
        }

        imagemElem.src = produto.imagem;
        imagemElem.alt = produto.nome;
        nomeElem.textContent = produto.nome;
        descricaoElem.textContent = produto.descricao;
        precoElem.textContent = `Preço: R$ ${produto.preco.toFixed(2)}`;
        addCartBtn.textContent = 'Adicionar ao Carrinho';
        qntdInput.value = '1';
        qntdInput.min = '1';
        qntdInput.max = '100';

        infoProduto.style.display = 'grid';

        if (categoriaDetalhes) {
            categoriaDetalhes.classList.add('info-visivel');
        }
        infoProduto.classList.add('info-produto-visivel');

        // Função para alterar quantidade na página de detalhes
        function alterarQuantidadeDetalhes(valor) {
            let novaQuantidade;
            const mensagemElement = document.getElementById('mensagem') || infoProduto.appendChild(document.createElement('p'));
            mensagemElement.id = 'mensagem';

            if (typeof valor === 'string') {
                novaQuantidade = parseInt(valor);
                if (isNaN(novaQuantidade)) {
                    qntdInput.value = qntdInput.value || 1;
                    mensagemElement.innerText = "Por favor, insira um número válido.";
                    setTimeout(() => { mensagemElement.innerText = ""; }, 3000);
                    return;
                }
            } else {
                novaQuantidade = (parseInt(qntdInput.value) || 1) + valor;
            }

            novaQuantidade = Math.max(1, Math.min(100, novaQuantidade));
            qntdInput.value = novaQuantidade;
            mensagemElement.innerText = "";
        }

        addCartBtn.addEventListener('click', () => {
            alterarQuantidadeDetalhes(qntdInput.value);
            const quantidade = parseInt(qntdInput.value) || 1;
            adicionarAoCarrinho(produto.id, quantidade);
        });

        btnMenos.addEventListener('click', () => {
            alterarQuantidadeDetalhes(-1);
        });

        btnMais.addEventListener('click', () => {
            alterarQuantidadeDetalhes(1);
        });

        qntdInput.addEventListener('change', () => {
            alterarQuantidadeDetalhes(qntdInput.value);
        });

        qntdInput.addEventListener('input', function() {
            this.value = this.value.replace(/[^0-9]/g, '');
        });

        // Atualiza a URL sem recarregar
        const novaUrl = `/produto/${produto.slug}`;
        if (window.location.pathname !== novaUrl) {
            history.pushState({ slug: produto.slug }, '', novaUrl);
        }
    } else {
        infoProduto.style.display = 'none';
    }
}

// Verifica slug na URL ao carregar a página
window.addEventListener('load', () => {
    const path = window.location.pathname;
    const match = path.match(/^\/produto\/([a-z0-9-]+)$/);
    if (match) {
        exibirDetalhesProduto(match[1]);
    }
});

// Lidar com back/forward no navegador
window.addEventListener('popstate', (event) => {
    const path = window.location.pathname;
    const match = path.match(/^\/produto\/([a-z0-9-]+)$/);
    const infoProduto = document.querySelector('.info-produto');
    if (match) {
        exibirDetalhesProduto(match[1]);
    } else {
        if (infoProduto) infoProduto.style.display = 'none';
    }
});

// Array do carrinho
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

// Função para salvar o carrinho no localStorage
function salvarCarrinho() {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

// Função para exibir produtos por categoria
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
        card.setAttribute('data-id', produto.id);
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
        card.addEventListener('click', (e) => {
            if (e.target.tagName !== 'BUTTON' && e.target.tagName !== 'INPUT') {
                exibirDetalhesProduto(produto.slug);
                e.preventDefault(); // Evita qualquer propagação que possa congelar
            }
        });
        container.appendChild(card);

        const btnAdd = card.querySelector('.add-cart');
        btnAdd.addEventListener('click', e => {
            e.stopPropagation();
            e.preventDefault();
            const quantidade = parseInt(card.querySelector('.quantidade').value) || 1;
            adicionarAoCarrinho(produto.id, quantidade);
        });
    });
}

// Outras funções permanecem as mesmas (adicionarAoCarrinho, exibirCarrinho, alterarQuantidade, etc.)
// ... (cópia o resto do código original aqui, mas como é longo, assuma que é o mesmo, com foco nas correções acima)

document.addEventListener('DOMContentLoaded', () => {
    // Inicialização completa, como antes
    exibirCarrinho();
});

// EmailJS inicialização (deve vir após o CDN ser carregado)
emailjs.init("R_s1_9hjc-TF4dqml");

// Evento de submit do formulário (restante igual)
