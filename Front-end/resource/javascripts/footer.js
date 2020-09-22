const emailFooter = document.getElementById('emailFooter');


// emailFooter.onclick = function () {
//     swal ( " Bom trabalho! " , " Você clicou no botão! " , " sucesso " )
// };

// let emailInput = document.getElementById('staticEmail2').value;

function enviar() {

    emailFooter.addEventListener("click", (event) => {event.preventDefault(); swal ( " E-mail enviado! " , ` E-mail de boas vindas enviado para ${document.getElementById('staticEmail2').value}` , "success" )} );
}

enviar()