//alert("teste");

document.querySelector('.salvarTxtBt').addEventListener('click', adicionar);

function adicionar(event){
    event.preventDefault();
    console.log(event);

    let form = document.querySelector('form');
    console.log(form.titulo.value);
    console.log(form.addTxt.value);

    let cartao = document.createElement('div')
    let titulo = document.createElement('h3');
    titulo.style.fontFamily="'Poppins', sans-serif";
    let addTxt = document.createElement('p');
    addTxt.style.fontFamily="'Poppins', sans-serif";

    titulo.textContent = form.titulo.value;
    addTxt.textContent = form.addTxt.value;
  
    cartao.appendChild(titulo);
    cartao.appendChild(addTxt);

    let btnClose = document.createElement('button');

    btnClose.style.fontFamily="'Poppins', sans-serif";
    btnClose.style.backgroundColor="rgb(248, 244, 244)";
    btnClose.style.border="1px solid black";
    btnClose.style.color="black";
    btnClose.style.padding="0.3rem";
    btnClose.style.margin="2%";
    btnClose.style.width="34%"
    btnClose.style.float="right";
    btnClose.style.fontWeight="bold";
    
    btnClose.textContent = 'Remover';
    btnClose.addEventListener('click', remover);

    cartao.appendChild(btnClose);

    /*
    CHAMADA DA FUNÇÃO EDITAR QUE NÃO DEU CERTO
    
    let btnEdit = document.createElement('button');

    btnEdit.style.fontFamily="'Poppins', sans-serif";
    btnEdit.style.backgroundColor="rgb(248, 244, 244)";
    btnEdit.style.border="1px solid black";
    btnEdit.style.color="black";
    btnEdit.style.padding="0.3rem";
    btnEdit.style.margin="2%";
    btnEdit.style.width="34%"
    btnEdit.style.float="right";
    btnEdit.style.fontWeight="bold";

    btnEdit.textContent = 'Editar';
    botao.addEventListener('click', editar);

    cartao.appendChild(btnEdit); */

    cartao.classList.add('cartao');

    document.querySelector("#dados").appendChild(cartao);
    form.reset();
}

function remover(event){
    let cartao = event.target.parentElement;
    console.log(event.target.parentElement);

    cartao.remove();
}

/*

FUNÇÃO EDITAR QUE NÃO DEU CERTO

function editar(event){

    let cartao = event.target.parentElement; //seleciona o cartao e todos os seus elementos
    h3.remove(); //remover h3
    p.remove(); //remover p

    let input = document.createElement('input') //cria uma caixa de texto para o título
    input.style.width="20px";
    input.style.height="20px";
    input.style.position="center";


    let textarea = document.createElement('textarea'); //cria uma caixa de texto para o conteudo
    input.style.columnCount="3";
    input.style.rowGap="5";
    input.style.position="center";

    btnEdit.textContent = 'Salvar'; //muda a escrita do botao editar para salvar
    btnEdit.addEventListener('click', salvar);

    cartao.appendChild(btnEdit); 
}

FUNÇÃO SALVAR EDIÇÕES QUE NÃO DEU CERTO

function salvar(event){

    let cartao = event.target.parentElement; 
    
    let h3 = document.createElement('h3');
    let p = documento.createElement('p');

    input.textContent = h3;
    textarea.textContent = p;

    h3.textContent = form.h3.value;
    p.textContent = form.p.value;

    cartao.appendChild(h3);
    cartao.appendChild(p);
}
*/

