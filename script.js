function horario() {
    let date = new Date();
    let hora = date.getHours();
    let minuto = date.getMinutes();
    let ano = date.getFullYear();
    let mes = date.getMonth();
    let dia = date.getDay();
    let idhorario = document.getElementById('horario')
    let iddata = document.getElementById('data')

    if (hora<10) {
        hora = '0' + hora;
    }
    if (minuto<10) {
        minuto = '0' + minuto;
    }
    if (mes<10) {
        mes = '0' + mes;
    }
    if (dia<10) {
        dia = '0' + dia;
    }
    
    idhorario.innerHTML = `${hora}:${minuto}`;
    iddata.innerHTML = `${dia}/${mes}/${ano}`;
}

// Teste
function tiktok() {
    let site = document.getElementById('site');
    let div = document.getElementById('divsites');
    let botao = document.getElementById('fechar');
    let imagem = document.getElementById('imagemfechar');
    site.src = 'https://www.tiktok.com/embed';
    site.style.width = '700px';
    site.style.height = '500px';
    div.style.width = '700px';
    div.style.height = '35px';
    div.style.background = '#929b96ef';
    div.style.borderTop = '2px solid #e1ede6';
    div.style.borderBottom = '2px solid #313b36';
    div.style.marginRight = '100px';
    botao.style.width = '25px';
    botao.style.height = '25px';
    botao.style.borderTop = '3px solid #e1ede6';
    botao.style.borderBottom = '3px solid #313b36';
    botao.style.borderRight = '3px solid #555c5b';
    botao.style.borderLeft = '3px solid #555c5b';
    botao.style.marginTop = '2px';
    botao.style.marginLeft = '2px';
    imagem.src = 'imagens/simbolo-x.png';
}

function fechar () {
    let site = document.getElementById('site');
    let div = document.getElementById('divsites');
    let botao = document.getElementById('fechar');
    let imagem = document.getElementById('imagemfechar');
    site.src = '';
    site.style.width = '0';
    site.style.height = '0';
    div.style.width = '0';
    div.style.height = '0';
    div.style.border = '0';
    div.style.background = '#929b96ce';
    botao.style.width = '0';
    botao.style.height = '0';
    botao.style.border = '0';
    imagem.src = '';
}