// URL DA API DE DADOS
URL = 'http://localhost:3000/contatos'
//=================================================================================================
// GET - Recupera todos os Contados e adiciona na tabela

const nodemailer = require("nodemailer"); 

let quantContatos = 0;

fetch(URL)
    .then(res => res.json())
    .then(contatos => {
        quantContatos = contatos.length;
        // let lista_contatos = '';
        // for (let i = 0; i < contatos.length; i++) {
        //     vlt_total = contatos[i].qtd * contatos[i].vlr;
        //     lista_contatos += `
        //     <tr>
        //         <th>${contatos[i].id}</th>
        //         <td>${contatos[i].nome}</td>
        //         <td>R$${(parseFloat(contatos[i].vlr)).toFixed(2)}</td>
        //         <td>${contatos[i].qtd}</td>
        //         <td>R$${parseFloat(vlt_total).toFixed(2)}</td>
        //         <td>
        //             <a onclick="getProduto(${contatos[i].id});" 
        //             class="btn btn-warning btn-sm" 
        //             data-toggle="modal" data-target="#produto-modal">
        //             <i class="fa fa-edit"></i>  Editar
        //             </a>

        //             <a onclick="$('#id-prod').text(${contatos[i].id});" class="btn btn-danger btn-sm" 
        //             data-toggle="modal" data-target="#modal-delete">
        //             <i class="fa fa-trash"></i> Remover
        //             </a>
        //         </td>
        //     </tr>
        //     `;
        //     produtoList.innerHTML = lista_contatos;
        // }

    });

// CREATE or UPDATE - PROCEDIMENTO PARA CRIAR OU EDITAR UM CONTATO

const duvidasForm = document.getElementById('duvidas-form');

duvidasForm.addEventListener('submit', (e) => {

    //let id = parseInt($('#id').text());    

    // RECUPERA OS DADOS DO CONTADOS
    const contado = JSON.stringify({
        id: (quantContatos + 1).toString(),
        nome: document.getElementById('nome-id').value,
        email: document.getElementById('email-id').value,
        assunto: document.getElementById('assunto-id').value
    })

    fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: contado
    })
    .then(res => res.json())
    .then(() => location.reload());  

    transporterEmail();

});

let transporter = nodemailer.transporter({
    host: "smtp.gmail.com",
    port: "587",
    secure: true,
    auth: {
        user: "infosocialpuc@gmail.com",
        pass: "infosocial2024"
    }
});

const transporterEmail = () =>{
    transporter.sendMail({
        from: "Info Social <infosocialpuc@gmail.com>",
        to: "sandrojunior802@gmail.com",
        subject: "Oi sou sandro estou testando nodemailer",
        text: "Oi sou sandro estou testando nodemailer texto",
        html: "Oi sou sandro estou testando <a href:'https://google.com'>nodemailer<a> texto"
    }).then(message => {
        console.log(message);
    }).catch(err => {
        console.log(err)
    });        
}



