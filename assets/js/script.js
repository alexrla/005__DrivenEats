const btn = document.querySelector(".btn button");

let contador = 0;

let str = "";

let informacoes = [
    {
        nomePrato: "",
        precoPrato: ""
    },
    {
        nomeBebida: "",
        precoBebida: ""
    },
    {
        nomeSobremesa: "",
        precoSobremesa: ""
    }
];

function escolherPrato(prato)    {
    const pratoSelecionado = document.querySelector("#prato .addBorder");

    if(prato === pratoSelecionado)  {
        pratoSelecionado.classList.toggle("addBorder");
        pratoSelecionado.children[2].classList.toggle("none");
        informacoes[0].nomePrato = "";
        informacoes[0].precoPrato = "";
        contador--;

        ativarDesativarBotaoPedido();

        return;
    } 

    if(pratoSelecionado !== null)   {
        pratoSelecionado.classList.toggle("addBorder");
        pratoSelecionado.children[2].classList.toggle("none");
        contador--;
    }
    
    prato.classList.toggle("addBorder");
    prato.children[2].classList.toggle("none");

    const informacoesPrato = prato.children[1];

    informacoes[0].nomePrato = informacoesPrato.children[0].innerHTML;
    informacoes[0].precoPrato = informacoesPrato.children[2].children[0].innerHTML;

    contador++;

    ativarDesativarBotaoPedido();
}

function escolherBebida(bebida)    {
    const bebidaSelecionada = document.querySelector("#bebida .addBorder");

    if(bebida === bebidaSelecionada)  {
        bebidaSelecionada.classList.toggle("addBorder");
        bebidaSelecionada.children[2].classList.toggle("none");
        informacoes[1].nomeBebida = "";
        informacoes[1].precoBebida = "";

        contador--;

        ativarDesativarBotaoPedido();

        return;
    } 

    if(bebidaSelecionada !== null)   {
        bebidaSelecionada.classList.toggle("addBorder");
        bebidaSelecionada.children[2].classList.toggle("none");
        contador--;
    }

    bebida.classList.toggle("addBorder");
    bebida.children[2].classList.toggle("none");

    const informacoesBebida = bebida.children[1];

    informacoes[1].nomeBebida = informacoesBebida.children[0].innerHTML;
    informacoes[1].precoBebida = informacoesBebida.children[2].children[0].innerHTML;

    contador++;

    ativarDesativarBotaoPedido();
}

function escolherSobremesa(sobremesa)    {
    const sobremesaSelecionada = document.querySelector("#sobremesa .addBorder");

    if(sobremesa === sobremesaSelecionada)  {
        sobremesaSelecionada.classList.toggle("addBorder");
        sobremesaSelecionada.children[2].classList.toggle("none");
        informacoes[2].nomeSobremesa = "";
        informacoes[2].precoSobremesa = "";

        contador--;

        ativarDesativarBotaoPedido();

        return;
    } 

    if(sobremesaSelecionada !== null)   {
        sobremesaSelecionada.classList.toggle("addBorder");
        sobremesaSelecionada.children[2].classList.toggle("none");
        contador--;
    }

    sobremesa.classList.toggle("addBorder");
    sobremesa.children[2].classList.toggle("none");

    const informacoesSobremesa = sobremesa.children[1];

    informacoes[2].nomeSobremesa = informacoesSobremesa.children[0].innerHTML;
    informacoes[2].precoSobremesa = informacoesSobremesa.children[2].children[0].innerHTML;

    contador++;

    ativarDesativarBotaoPedido();
}


function ativarDesativarBotaoPedido()    {
    if(contador === 3)  {
        btn.classList.add("addColor");
        btn.classList.remove("btn-gray");

        btn.innerHTML = "Fechar Pedido";
    }
    else    {
        btn.classList.add("btn-gray");
        btn.classList.remove("addColor");

        btn.innerHTML = "Selecione os 3 itens <br> para fechar o pedido";
    }
}

function fazerPedido()  {
    if(contador === 3)  {
        document.querySelector(".pedido-prato p").innerHTML = informacoes[0].nomePrato;
        document.querySelector(".pedido-prato span").innerHTML = informacoes[0].precoPrato;

        document.querySelector(".pedido-bebida p").innerHTML = informacoes[1].nomeBebida;
        document.querySelector(".pedido-bebida span").innerHTML = informacoes[1].precoBebida;

        document.querySelector(".pedido-sobremesa p").innerHTML = informacoes[2].nomeSobremesa;
        document.querySelector(".pedido-sobremesa span").innerHTML = informacoes[2].precoSobremesa;

        const precoPrato =  document.querySelector(".pedido-prato span").innerHTML;
        const precoBebida =  document.querySelector(".pedido-bebida span").innerHTML;
        const precoSobremesa =  document.querySelector(".pedido-sobremesa span").innerHTML;

        const precoFinal = Number(precoPrato.replace(",", ".")) + Number(precoBebida.replace(",", ".")) + Number(precoSobremesa.replace(",", "."));

        const precoExibir = String(precoFinal.toFixed(2));
        const precoExibirFinal = precoExibir.replace(".", ",");

        document.querySelector(".precoFinal-pedido").innerHTML = precoExibirFinal;
        
        document.querySelector(".overlay-2").classList.remove("none");

        const nome = prompt("Informe o seu seu nome:");

        const endereco = prompt("Informe o seu endereço:");

        str = `Olá, gostaria de fazer o pedido:\n\n- Prato: ${informacoes[0].nomePrato}\n\n- Bebida: ${informacoes[1].nomeBebida}\n\n- Sobremesa: ${informacoes[2].nomeSobremesa}\n\nTotal: ${precoExibirFinal}\n\nNome: ${nome}\nEndereço: ${endereco}`;
    }
}

function finalizarPedido()  {
    const myStr = encodeURIComponent(str);

    const url = `https://wa.me/5599123456789?text=${myStr}`;

    window.open(url);
}

function cancelarPedido()   {
    document.querySelector(".overlay-2").classList.add("none");
}