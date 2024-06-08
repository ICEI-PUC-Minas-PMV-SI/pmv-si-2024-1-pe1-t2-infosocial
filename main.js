// URL DA API DE DADOS
URL = 'http://localhost:3000/contatos'
//=================================================================================================
// GET - Recupera todos os Contados e adiciona na tabela
let quantContatos = 0;

// teste 

const host = "smtp.elasticemail.com";
const userNameLogin = "infosocialpuc@gmail.com";
const password = "C88408DB12F78B7B7ACCC98B41014813C9B0";
const toEmail = 'infosocialpuc@gmail.com';
const fromEmail = 'infosocialpuc@gmail.com';
const subject = "New Email Duvidas";
let bodyEmail = '';
let userEmail = '';
let userName = '';


const contatoList = document.getElementById('contato-list');
fetch(URL)
.then(res => res.json())
.then(contatos => {
        console.log(contatos)
        quantContatos = contatos.length;
        let lista_contatos = '';
        for (let i = 0; i < contatos.length; i++) {
            vlt_total = contatos[i].qtd * contatos[i].vlr;
            lista_contatos += `
            <tr>
                <th>${contatos[i].id}</th>
                <td>${contatos[i].nome}</td>
                <td>${(contatos[i].email)}</td>
                <td>${contatos[i].assunto}</td>
                <td>
                    <a onclick="getProduto(${contatos[i].id});" 
                    class="btn btn-warning btn-sm" 
                    data-toggle="modal" data-target="#produto-modal">
                    <i class="fa fa-edit"></i>  Editar
                    </a>

                    <a onclick="$('#id-prod').text(${contatos[i].id});" class="btn btn-danger btn-sm" 
                    data-toggle="modal" data-target="#modal-delete">
                    <i class="fa fa-trash"></i> Remover
                    </a>
                </td>
            </tr>
            `;
            if(contatoList){
                contatoList.innerHTML = lista_contatos;
            }
        }
    });

// CREATE or UPDATE - PROCEDIMENTO PARA CRIAR OU EDITAR UM CONTATO

const duvidasForm = document.getElementById('duvidas-form');

duvidasForm.addEventListener('submit', (e) => {

    e.preventDefault();

    let contDuvidas = (quantContatos + 1).toString()
    //let id = parseInt($('#id').text());    
    console.log('sendEmail: '); 
    // RECUPERA OS DADOS DO CONTADOS
    const contado = JSON.stringify({
        id: contDuvidas,
        nome: document.getElementById('nome-id').value,
        email: document.getElementById('email-id').value,
        assunto: document.getElementById('assunto-id').value
    })

    userEmail = document.getElementById('email-id').value;
    userName = document.getElementById('nome-id').value;
    bodyEmail = document.getElementById('assunto-id').value;
    sendEmail();

    minhaFuncaoAssincrona().then((mensagem) => {
        console.log(mensagem); // "Dados recebidos!" após 2 segundos
    });
    
    
    console.log('sendEmail: ');

    fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: contado
    })
    .then(res => res.json())
    .then(() => location.reload());
});

async function sendEmail() {

    Email.send({
        Host : host,
        Username : userNameLogin,
        Password : password,
        To : toEmail,
        From : fromEmail,
        Subject : subject,
        Body : `Olá, sou ${userName}. ${bodyEmail}. Meu Email ${userEmail}
        `
    }).then(
      message => {
        console.log(message)
        alert("Seu email foi enviado com sucesso");
        document.getElementById('email-id').value = '';
        document.getElementById('nome-id').value = '';
        document.getElementById('assunto-id').value = '';
    }      
    );

}

function minhaFuncaoAssincrona() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Dados recebidos!");
        }, 4000);
    });
}





  




