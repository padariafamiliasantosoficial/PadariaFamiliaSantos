// =================== VARIÁVEIS GLOBAIS ===================
let infoProduto = null;
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

// =================== LISTA DE PRODUTOS ===================
const produtos = [
    { id: 1, nome: 'Pão de Queijo', preco: 0.50, imagem: '/imagens/paodequeijo.jpg', descricao: 'Delicioso pão de queijo...', categoria: 'Salgados', slug: 'pao-de-queijo' },
    { id: 2, nome: 'Pão de Sal', preco: 0.60, imagem: '/imagens/paodesal.jpg', descricao: 'O clássico pão de sal...', categoria: 'Pães', slug: 'pao-de-sal' },
    // ...adicione todos os outros produtos aqui
];

// =================== CARRINHO ===================
function salvarCarrinho() {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

function adicionarAoCarrinho(id, quantidade = 1) {
    const produto = produtos.find(p => p.id == id);
    if (!produto) return;

    const itemExistente = carrinho.find(item => item.id == id);
    if (itemExistente) {
        itemExistente.quantidade += quantidade;
    } else {
        carrinho.push({ ...produto, quantidade });
    }

    salvarCarrinho();
    exibirCarrinho();
}

function exibirCarrinho() {
    const listaInterativa = document.getElementById('lista');
    if (!listaInterativa) return;

    listaInterativa.innerHTML = `
        <div class="cart-header">
            <img src="/imagens/fechar.png" alt="Fechar carrinho" class="close-button" onclick="toggleCart()">
        </div>
        <h1>Seu carrinho</h1>  
    `;

    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        if (carrinho.length > 0) {
            cartCount.textContent = carrinho.length;
            cartCount.classList.remove('hidden');
        } else {
            cartCount.classList.add('hidden');
        }
    }

    if (carrinho.length === 0) {
        listaInterativa.innerHTML += '<p style="color: black;">O carrinho está vazio.</p>';
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
            <button onclick="alterarQuantidade(${item.id}, -1, true)">-</button>
            <input type="number" value="${item.quantidade}" min="1" onchange="alterarQuantidade(${item.id}, this.value, true)">
            <button onclick="alterarQuantidade(${item.id}, 1, true)">+</button>
            <button onclick="removerDoCarrinho(${item.id})">Remover</button>
        `;
        listaInterativa.appendChild(divItem);
    });

    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.justifyContent = 'space-between';

    const totalElement = document.createElement('p');
    totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
    container.appendChild(totalElement);

    const limpar = document.createElement('button');
    limpar.textContent = 'Limpar Carrinho';
    limpar.onclick = limparCarrinho;
    container.appendChild(limpar);

    listaInterativa.appendChild(container);

    const finalizar = document.createElement('button');
    finalizar.textContent = 'Finalizar Compra';
    finalizar.className = 'botaofinalizar';
    finalizar.onclick = () => {
        const msg = document.getElementById('mensagem');
        if (msg) {
            msg.innerHTML = 'Função indisponível no momento, <a href="Sobre">SAIBA MAIS</a>';
        }
    };
    listaInterativa.appendChild(finalizar);

    const msg = document.createElement('p');
    msg.id = 'mensagem';
    listaInterativa.appendChild(msg);
}

function alterarQuantidade(id, valor, noCarrinho = false) {
    if (noCarrinho) {
        const item = carrinho.find(i => i.id == id);
        if (!item) return;

        let novaQuantidade = typeof valor === 'number'
            ? item.quantidade + valor
            : parseInt(valor) || 1;

        if (novaQuantidade >= 1 && novaQuantidade <= 100) {
            item.quantidade = novaQuantidade;
        }

        salvarCarrinho();
        exibirCarrinho();
    }
}

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

// =================== DETALHES DO PRODUTO ===================
function exibirDetalhesProduto(produto) {
    if (!produto || !infoProduto) return;

    document.getElementById('produto-imagem').src = produto.imagem;
    document.getElementById('produto-nome').textContent = produto.nome;
    document.getElementById('produto-descricao').textContent = produto.descricao;
    document.getElementById('produto-preco').textContent = `Preço: R$ ${produto.preco.toFixed(2)}`;

    infoProduto.style.display = 'grid';
}

// =================== MENU & CARRINHO TOGGLE ===================
function toggleMenu() {
    const menuMob = document.getElementById('container-mobile');
    const overlay = document.querySelector('.overlay');
    if (!menuMob || !overlay) return;
    menuMob.classList.toggle('abrir-menu');
    overlay.classList.toggle('show');
}

function toggleCart() {
    const listaInterativa = document.getElementById('lista');
    const overlay = document.querySelector('.overlay');
    if (!listaInterativa || !overlay) return;
    listaInterativa.classList.toggle('open');
    overlay.classList.toggle('show');
}

// =================== EMAILJS COM LIMITE ===================
emailjs.init("SUA_CHAVE_PUBLICA");

document.getElementById("contato-form")?.addEventListener("submit", function(event) {
    event.preventDefault();

    const hoje = new Date().toLocaleDateString();
    let dados = JSON.parse(localStorage.getItem("controleMensagens")) || { data: hoje, count: 0 };

    if (dados.data !== hoje) {
        dados = { data: hoje, count: 0 };
    }

    if (dados.count >= 2) {
        alert("Você já enviou 2 mensagens hoje. Tente novamente amanhã.");
        return;
    }

    const form = event.target;
    const params = {
        nome: form.nome.value,
        email: form.email.value,
        mensagem: form.mensagem.value
    };

    emailjs.send("seu_service_id", "seu_template_id", params).then(() => {
        alert("Mensagem enviada com sucesso!");
        dados.count++;
        localStorage.setItem("controleMensagens", JSON.stringify(dados));
    }, (err) => {
        alert("Erro ao enviar mensagem.");
        console.error(err);
    });
});

// =================== INICIALIZAÇÃO ===================
document.addEventListener('DOMContentLoaded', () => {
    infoProduto = document.querySelector('.info-produto');

    exibirCarrinho();

    // SLUG ou ID
    const params = new URLSearchParams(window.location.search);
    const path = window.location.pathname.toLowerCase().replace(/\/$/, '');

    let produto = null;

    if (path.startsWith('/produto/')) {
        const slug = path.substring('/produto/'.length);
        produto = produtos.find(p => p.slug === slug);
    }

    if (!produto) {
        const id = params.get('id');
        if (id) {
            produto = produtos.find(p => p.id == id);
            if (produto) {
                history.replaceState(null, '', `/produto/${produto.slug}`);
            }
        }
    }

    if (produto) {
        exibirDetalhesProduto(produto);
    }

    // Swiper
    if (document.querySelector('.swiper')) {
        const swiper = new Swiper('.swiper', {
            loop: true,
            autoplay: { delay: 0, disableOnInteraction: false },
            speed: 5000,
            slidesPerView: 'auto',
            spaceBetween: 10,
            pagination: { el: '.swiper-pagination', clickable: true },
            navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
            scrollbar: { el: '.swiper-scrollbar' },
        });
    }

    // Overlay fecha painéis
    document.querySelector('.overlay')?.addEventListener('click', () => {
        document.getElementById('container-mobile')?.classList.remove('abrir-menu');
        document.getElementById('lista')?.classList.remove('open');
        document.querySelector('.overlay')?.classList.remove('show');
    });
});
