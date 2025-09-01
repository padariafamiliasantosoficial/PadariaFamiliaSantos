// ======= Script mesclado e limpo =======

// ===== Produtos (baseado no segundo script, com slugs adicionados a partir do primeiro) =====
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

// ===== Estado do carrinho =====
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
function salvarCarrinho() {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

// ===== Helper: encontrar produto por slug ou id =====
function encontrarProduto(slugOrId) {
    if (!slugOrId && slugOrId !== 0) return undefined;
    // se for número string que representa número, parse
    if (typeof slugOrId === 'string' && /^\d+$/.test(slugOrId)) {
        slugOrId = parseInt(slugOrId, 10);
    }
    if (typeof slugOrId === 'string') {
        return produtos.find(prod => prod.slug === slugOrId || prod.slug === slugOrId.toLowerCase());
    } else {
        return produtos.find(p => p.id === Number(slugOrId));
    }
}

// ===== Preenche detalhes do produto na página =====
function preencherDetalhes(produto) {
    if (!produto) return false;
    const imagem = document.getElementById('produto-imagem');
    const nome = document.getElementById('produto-nome');
    const descricao = document.getElementById('produto-descricao');
    const preco = document.getElementById('produto-preco');
    const addCart = document.getElementById('add-cart');
    const qntd = document.getElementById('qntd');

    if (!imagem || !nome || !descricao || !preco || !addCart || !qntd) {
        console.error("Elementos de detalhes do produto não encontrados no DOM");
        return false;
    }

    imagem.src = produto.imagem;
    imagem.alt = produto.nome;
    nome.textContent = produto.nome;
    descricao.textContent = produto.descricao;
    preco.textContent = `Preço: R$ ${produto.preco.toFixed(2)}`;
    addCart.textContent = 'Adicionar ao Carrinho';
    qntd.value = '1';
    qntd.min = '1';
    qntd.max = '100';

    return true;
}

// ===== Exibir detalhes (sem forçar redirecionamento - compatível com segunda abordagem) =====
let currentProduto = null;
function exibirDetalhesProduto(slugOrId) {
    const produto = encontrarProduto(slugOrId);
    const infoProduto = document.querySelector('.info-produto');
    const categoriaDetalhes = document.querySelector('.categoria-detalhes');

    if (!infoProduto) {
        console.error("Elemento .info-produto não encontrado no DOM");
        return;
    }

    if (produto) {
        currentProduto = produto;
        if (preencherDetalhes(produto)) {
            infoProduto.style.display = 'grid';
            if (categoriaDetalhes) categoriaDetalhes.classList.add('info-visivel');
            infoProduto.classList.add('info-produto-visivel');
        }
    } else {
        infoProduto.style.display = 'none';
        currentProduto = null;
    }
}

// ===== Swiper (único bloco, protegido) =====
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
        const stopAndSpeed = () => {
            try {
                swiper.autoplay.stop();
                swiper.params.speed = 500;
            } catch (e) { /* ignore */ }
        };
        nextButton.addEventListener('click', stopAndSpeed);
        prevButton.addEventListener('click', stopAndSpeed);
    }
}

// ===== Exibir produtos por categoria (renderiza cards) =====
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
                        <button class="btn-menos" data-action="minus">-</button>
                        <input class="quantidade" type="number" value="1" min="1">
                        <button class="btn-mais" data-action="plus">+</button>
                    </div>
                </div>
            </div>
        `;
        // Clique no card abre página de produto (comportamento do segundo script)
        card.addEventListener('click', (e) => {
            if (e.target.tagName !== 'BUTTON' && e.target.tagName !== 'INPUT') {
                window.location.href = `Produtos?id=${produto.id}`;
            }
        });
        container.appendChild(card);

        // adiciona listeners para botões dentro do card
        const btnAdd = card.querySelector('.add-cart');
        btnAdd.addEventListener('click', e => {
            e.stopPropagation();
            e.preventDefault();
            const quantidade = parseInt(card.querySelector('.quantidade').value) || 1;
            adicionarAoCarrinho(produto.id, quantidade);
        });

        const btnMenos = card.querySelector('.btn-menos');
        const btnMais = card.querySelector('.btn-mais');
        const inputQtd = card.querySelector('.quantidade');

        if (btnMenos) btnMenos.addEventListener('click', (ev) => {
            ev.stopPropagation();
            alterarQuantidade(produto.id, -1, false);
        });
        if (btnMais) btnMais.addEventListener('click', (ev) => {
            ev.stopPropagation();
            alterarQuantidade(produto.id, 1, false);
        });
        if (inputQtd) inputQtd.addEventListener('change', (ev) => {
            ev.stopPropagation();
            alterarQuantidade(produto.id, ev.target.value, false);
        });
        if (inputQtd) inputQtd.addEventListener('input', function() {
            this.value = this.value.replace(/[^0-9]/g, '');
        });
    });
}

// ===== Adicionar ao carrinho =====
function adicionarAoCarrinho(id, quantidade = 1) {
    const produto = produtos.find(p => p.id == id);
    if (produto) {
        const itemExistente = carrinho.find(item => item.id == id);
        if (itemExistente) {
            itemExistente.quantidade += quantidade;
            itemExistente.quantidade = Math.max(1, Math.min(100, itemExistente.quantidade));
        } else {
            carrinho.push({ ...produto, quantidade: Math.max(1, Math.min(100, quantidade)) });
        }
        salvarCarrinho();
        exibirCarrinho();
    }
}

// ===== Alterar quantidade (cards ou carrinho) =====
function alterarQuantidade(id, valor, noCarrinho = false) {
    if (noCarrinho) {
        const item = carrinho.find(item => item.id == id);
        if (item) {
            let novaQuantidade;
            if (typeof valor === 'number') {
                novaQuantidade = item.quantidade + valor;
            } else {
                novaQuantidade = parseInt(String(valor).replace(/[^0-9]/g, '')) || 1;
            }
            novaQuantidade = Math.max(1, Math.min(100, novaQuantidade));
            item.quantidade = novaQuantidade;
            const mensagemEl = document.getElementById('mensagem');
            if (mensagemEl) mensagemEl.innerText = "";
            salvarCarrinho();
            exibirCarrinho();
        }
    } else {
        const input = document.querySelector(`.product-card[data-id="${id}"] .quantidade`);
        if (input) {
            let novaQuantidade;
            if (typeof valor === 'number') {
                novaQuantidade = (parseInt(input.value) || 1) + valor;
            } else {
                novaQuantidade = parseInt(String(valor).replace(/[^0-9]/g, '')) || 1;
            }
            novaQuantidade = Math.max(1, Math.min(100, novaQuantidade));
            input.value = novaQuantidade;
        }
    }
}

// ===== Remover e limpar carrinho =====
function removerDoCarrinho(id) {
    carrinho = carrinho.filter(item => item.id != id);
    salvarCarrinho();
    exibirCarrinho();
}
function limparCarrinho() {
    carrinho = [];
    salvarCarrinho();
    exibirCarrinho();
}

// ===== Exibir carrinho (unificado) =====
function exibirCarrinho() {
    const listaInterativa = document.getElementById('lista');
    if (!listaInterativa) {
        console.error("Elemento #lista não encontrado no DOM");
        return;
    }

    listaInterativa.innerHTML = `
        <div class="cart-header">
            <img src="imagens/fechar.png" alt="Fechar carrinho" class="close-button" id="close-cart-button">
        </div>
        <h1>Seu carrinho</h1>
    `;

    // atualiza badge
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
        // cria/atualiza total
        let totalEl = document.getElementById('cart-total');
        if (!totalEl) {
            totalEl = document.createElement('p');
            totalEl.id = 'cart-total';
            listaInterativa.appendChild(totalEl);
        }
        totalEl.textContent = 'Total: R$ 0.00';
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
            <div class="cart-controls">
              <button class="btn-menos" data-id="${item.id}">-</button>
              <input class="quantidade" type="number" value="${item.quantidade}" min="1">
              <button class="btn-mais" data-id="${item.id}">+</button>
            </div>
            <button class="remover-item" data-id="${item.id}">Remover</button>
        `;
        listaInterativa.appendChild(divItem);

        // attach events
        const btnMenos = divItem.querySelector('.btn-menos');
        const btnMais = divItem.querySelector('.btn-mais');
        const inputQtd = divItem.querySelector('.quantidade');
        const btnRemover = divItem.querySelector('.remover-item');

        if (btnMenos) btnMenos.addEventListener('click', () => alterarQuantidade(item.id, -1, true));
        if (btnMais) btnMais.addEventListener('click', () => alterarQuantidade(item.id, 1, true));
        if (inputQtd) {
            inputQtd.addEventListener('change', (ev) => {
                const val = parseInt(ev.target.value) || 1;
                alterarQuantidade(item.id, val, true);
            });
            inputQtd.addEventListener('input', function() { this.value = this.value.replace(/[^0-9]/g, ''); });
        }
        if (btnRemover) btnRemover.addEventListener('click', () => removerDoCarrinho(item.id));
    });

    // container de total + limpar
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    container.style.justifyContent = 'space-between';
    container.style.gap = '10px';

    const totalElement = document.createElement('p');
    totalElement.id = 'cart-total';
    totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
    container.appendChild(totalElement);

    const limpar = document.createElement('button');
    limpar.id = 'limpar';
    limpar.textContent = 'Limpar Carrinho';
    limpar.onclick = limparCarrinho;
    container.appendChild(limpar);

    listaInterativa.appendChild(container);

    const finalizarCompra = document.createElement('button');
    finalizarCompra.id = 'finalizar';
    finalizarCompra.textContent = 'Finalizar Compra';
    finalizarCompra.className = 'botaofinalizar';
    finalizarCompra.onclick = function() {
        const mensagemElement = document.getElementById('mensagem') || listaInterativa.appendChild(document.createElement('p'));
        mensagemElement.id = 'mensagem';
        mensagemElement.innerHTML = 'Função indisponível no momento, <a href="Sobre" class="saiba-mais">SAIBA MAIS</a>';
    };
    listaInterativa.appendChild(finalizarCompra);

    const mensagemElement = document.createElement('p');
    mensagemElement.id = 'mensagem';
    listaInterativa.appendChild(mensagemElement);

    // fechar cart button (se existe)
    const closeCartButton = document.getElementById('close-cart-button');
    if (closeCartButton) closeCartButton.addEventListener('click', toggleCart);
}

// ===== Painéis laterais: menu mobile, carrinho e overlay =====
function closeSidePanels() {
    const menuMob = document.getElementById('container-mobile');
    const listaInterativa = document.getElementById('lista');
    const overlay = document.querySelector('.overlay');

    if (menuMob && menuMob.classList.contains('abrir-menu')) {
        menuMob.classList.remove('abrir-menu');
    }
    if (listaInterativa && listaInterativa.classList.contains('open')) {
        listaInterativa.classList.remove('open');
    }
    if (overlay) overlay.classList.remove('show');
}

function toggleMenu() {
    const menuMob = document.getElementById('container-mobile');
    const overlay = document.querySelector('.overlay');

    if (!menuMob || !overlay) return;

    if (menuMob.classList.contains('abrir-menu')) {
        menuMob.classList.remove('abrir-menu');
        overlay.classList.remove('show');
    } else {
        closeSidePanels();
        menuMob.classList.add('abrir-menu');
        overlay.classList.add('show');
    }
}

function toggleCart() {
    const listaInterativa = document.getElementById('lista');
    const overlay = document.querySelector('.overlay');
    if (!listaInterativa || !overlay) return;

    if (listaInterativa.classList.contains('open')) {
        listaInterativa.classList.remove('open');
        overlay.classList.remove('show');
    } else {
        closeSidePanels();
        listaInterativa.classList.add('open');
        overlay.classList.add('show');
    }
}

// abrir carrinho a partir do menu mobile
function openCartFromMenu() {
    const menuMob = document.getElementById('container-mobile');
    if (menuMob) menuMob.classList.remove('abrir-menu');
    toggleCart();
}

// overlay click
if (document.querySelector('.overlay')) {
    document.querySelector('.overlay').addEventListener('click', closeSidePanels);
}

// conectar botões de menu (se existirem)
const btnMenu = document.getElementById('icone-mobile');
if (btnMenu) btnMenu.addEventListener('click', toggleMenu);

const fecharMenu = document.getElementById('fechar');
if (fecharMenu) fecharMenu.addEventListener('click', toggleMenu);

// ===== initDetalhesEvents (eventos da página de produto) =====
function initDetalhesEvents() {
    const addCart = document.getElementById('add-cart');
    const btnMenos = document.getElementById('btn-menos');
    const btnMais = document.getElementById('btn-mais');
    const qntd = document.getElementById('qntd');

    if (!addCart || !qntd) {
        // Não é obrigatório ter todos os controles; apenas reporta e retorna
        // (algumas páginas podem não ter a seção de detalhes)
        // console.warn("Elementos de detalhes incompletos para eventos");
        return;
    }

    function alterarQuantidadeDetalhes(valor) {
        let novaQuantidade;
        const input = qntd;
        let mensagemElement = document.getElementById('mensagem');
        if (!mensagemElement) {
            const infoProduto = document.querySelector('.info-produto');
            if (infoProduto) {
                mensagemElement = document.createElement('p');
                mensagemElement.id = 'mensagem';
                infoProduto.appendChild(mensagemElement);
            }
        }

        if (typeof valor === 'string') {
            novaQuantidade = parseInt(valor.replace(/[^0-9]/g, '')) || 1;
            if (isNaN(novaQuantidade)) {
                input.value = input.value || 1;
                if (mensagemElement) {
                    mensagemElement.innerText = "Por favor, insira um número válido.";
                    setTimeout(() => { if (mensagemElement) mensagemElement.innerText = ""; }, 3000);
                }
                return;
            }
        } else {
            novaQuantidade = (parseInt(input.value) || 1) + valor;
        }

        novaQuantidade = Math.max(1, Math.min(100, novaQuantidade));
        input.value = novaQuantidade;
        if (mensagemElement) mensagemElement.innerText = "";
    }

    addCart.addEventListener('click', () => {
        if (currentProduto) {
            alterarQuantidadeDetalhes(qntd.value);
            const quantidade = parseInt(qntd.value) || 1;
            adicionarAoCarrinho(currentProduto.id, quantidade);
        } else {
            console.error("Nenhum produto atual para adicionar ao carrinho");
        }
    });

    if (btnMenos) btnMenos.addEventListener('click', () => alterarQuantidadeDetalhes(-1));
    if (btnMais) btnMais.addEventListener('click', () => alterarQuantidadeDetalhes(1));

    qntd.addEventListener('change', () => alterarQuantidadeDetalhes(qntd.value));
    qntd.addEventListener('input', function() { this.value = this.value.replace(/[^0-9]/g, ''); });
}

// ===== Popstate para navegar voltar/avançar (se usar rotas de slug) =====
window.addEventListener('popstate', (event) => {
    const path = window.location.pathname;
    const match = path.match(/^\/produto\/([a-z0-9-]+)$/);
    const infoProduto = document.querySelector('.info-produto');
    if (match) {
        exibirDetalhesProduto(match[1]);
    } else {
        if (infoProduto) infoProduto.style.display = 'none';
        currentProduto = null;
    }
});

// ===== Email (única inicialização) =====
if (typeof emailjs !== 'undefined' && emailjs.init) {
    try {
        emailjs.init("R_s1_9hjc-TF4dqml");
    } catch (e) { /* ignore */ }
}

// ===== DOMContentLoaded: inicialização unificada =====
document.addEventListener('DOMContentLoaded', () => {
    // inicializa eventos de detalhes (se houver)
    initDetalhesEvents();

    // Lê params
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');
    const tipo = params.get('tipo');

    // Se a URL for /produto/slug, exibe detalhes (compatibilidade com primeira versão)
    const path = window.location.pathname.toLowerCase().replace(/\/$/, '');
    let produto = null;
    if (path.startsWith('/produto/')) {
        const slug = path.substring('/produto/'.length);
        produto = encontrarProduto(slug);
    }

    // Se vier por id (query), carrega produto
    if (!produto && productId) {
        produto = encontrarProduto(productId);
    }

    // Se estamos na página Produtos (comportamento do segundo script)
    if (window.location.pathname.toLowerCase().includes('produtos') || path.startsWith('/produto/')) {
        const infoProduto = document.querySelector('.info-produto');
        const categoriaDetalhes = document.querySelector('.categoria-detalhes');

        if (!infoProduto) {
            console.error("Elemento .info-produto não encontrado no DOM");
        } else {
            if (produto) {
                currentProduto = produto;
                preencherDetalhes(produto);
                infoProduto.style.display = 'grid';
                if (categoriaDetalhes) categoriaDetalhes.classList.add('info-visivel');
                infoProduto.classList.add('info-produto-visivel');

                // Se veio via id (query) e temos slug, não forçar redirecionamento aqui,
                // apenas atualizamos a visualização (prioridade: manter comportamento do segundo).
                if (productId && produto.slug) {
                    // opcional: atualizar history sem recarregar para exibir slug na URL
                    try {
                        const novaUrl = `/produto/${produto.slug}`;
                        if (window.location.pathname !== novaUrl) {
                            history.replaceState({}, '', novaUrl + (window.location.search || ''));
                        }
                    } catch (e) { /* ignore */ }
                }
            } else {
                infoProduto.style.display = 'none';
            }

            // categorias clicáveis
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
    }

    // exibe carrinho (atualiza contadores etc)
    exibirCarrinho();

    // enviar email: attach listener se existir o form
    const contatoForm = document.getElementById("contato-form");
    if (contatoForm && typeof emailjs !== 'undefined' && emailjs.send) {
        contatoForm.addEventListener("submit", function(event) {
            event.preventDefault();
            let data = JSON.parse(localStorage.getItem("enviosEmail")) || { count: 0, date: null };
            let hoje = new Date().toLocaleDateString();

            if (data.date !== hoje) {
                data = { count: 0, date: hoje };
            }
            if (data.count >= 2) {
                alert("⚠️ Você já enviou 2 mensagens hoje. Tente novamente amanhã.");
                return;
            }

            const formData = {
                name: document.getElementById("nome") ? document.getElementById("nome").value : '',
                email: document.getElementById("email") ? document.getElementById("email").value : '',
                subject: document.getElementById("assunto") ? document.getElementById("assunto").value : '',
                comentario: document.getElementById("comentario") ? document.getElementById("comentario").value : ''
            };

            const serviceID = "service_0uqntnt";
            const templateID = "template_tk8wxmg";

            emailjs.send(serviceID, templateID, formData)
                .then(() => {
                    alert("✅ E-mail enviado com sucesso!");
                    if (document.getElementById("contato-form")) document.getElementById("contato-form").reset();
                    data.count++;
                    data.date = hoje;
                    localStorage.setItem("enviosEmail", JSON.stringify(data));
                })
                .catch((err) => {
                    console.error("Erro ao enviar:", err);
                    alert("❌ Ocorreu um erro ao enviar o e-mail.");
                });
        });
    }
});
