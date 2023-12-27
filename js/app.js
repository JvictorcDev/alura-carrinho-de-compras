let totalGeral;
limpar();

function adicionar() {
    
    // recuperar valores dos inputs, nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    
    // calcular o total do produto, o subtotal
    let preco = quantidade * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos" id="lista-produtos">
    <section class="carrinho__produtos__produto">
      <span class="texto-azul">${quantidade}x</span> ${nomeProduto} Celular <span class="texto-azul">R$${preco}</span>
    </section>`
    
    // atualizar o valor total
    totalGeral = totalGeral + preco;
    
    // adicionar ao carrinho de compras (tabela)
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$${totalGeral}`;
    document.getElementById('quantidade').value = 0;
    

}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = `R$${totalGeral}`;

}