var nome = "Maicke Massia"
var nomehtml = document.getElementById("nome-no-html")
var texto1 = document.getElementById("texto-1");
var texto2 = document.getElementById("texto-2");
var btnSobre = document.getElementById("btn-sobre")
var btnProjetos = document.getElementById("btn-projetos")
var ano = document.getElementById("ano")
var data = new Date()
var ano_atual = data.getFullYear()
ano.innerHTML = ano_atual
console.log(ano_atual)


function colocarNomeNoHtml(nome) {
    nomehtml.innerHTML = nome;
}

function clickNoProjetos() {
    console.log("clicou no botão projetos");
    texto2.style.display = "block";
    texto1.style.display = "none";
    btnProjetos.className = "btn-destaque"
    btnSobre.className = "btn-sem-destaque"
}

function clickNoSobre() {
    console.log("clicou no botão sobre")
    texto1.style.display = "block";
    texto2.style.display = "none";
    btnSobre.className = "btn-destaque"
    btnProjetos.className = "btn-sem-destaque"
}


colocarNomeNoHtml(nome);


