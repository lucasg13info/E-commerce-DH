 //onclick
// window.onload = function (){

// };


//FORMA1  OBS . DESSA FORMA NÃO PODE SE REPETIR AÇÃO DE EVENTOS .POIS IRÁ REPETIR PARA TODOS
// seletor.onclick = function( ){};

// //FORMA 2 COM ADD EU CONSIGO ADICIONAR EVENTO PARA CADA AÇÃO
// seletor.addEventListener('click',function(){});



window.addEventListener('load',function(){
    let logo = document.getElementById('testeclick');
    let servico = document.getElementById('exemplo');
    
     logo.addEventListener('click', function (evento){
         
        // PreventDefault ele tira todo os eventos padrão do método
        // a questão da situação era que ao clicar o site se movia para baixo , nao era o necessário.
        // essa ação é ativa do preventDefault pra baixo...
        evento.preventDefault(); 
        alert('Clicou no link do express');
     })

});

servico.addEventListener('click',function(){
    // o uso do this significa que estamos o mesmo elemento no caso (servico) o elemento que está sendo clicado.

    this.style.color = 'red';  //Mudando a cor da palavra para vermelho  ao clicar. 
})