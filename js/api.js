let tabela = document.querySelector("#tabela")

// async é uma forma que o JS tem de transformar uma função sincrona em assincrona, muit utilizada em APIs
async function carregarDados(){
    const url = "https://jsonplaceholder.org/users"

    const resultado = await fetch(url) // fecth irá fazer uma busca na url passada como parâmetro
    const dados = await resultado.json() // estamoos convertendo todos os dados que estão vindo da api no formato json

    //console.log(dados)
    for (const item of dados) {
        //console.log(item.email)

        //CRIANDOO ELEMENTOS HTML
        const linha = document.createElement("tr")
        const tdNome = document.createElement("td")
        const tdEmail = document.createElement("td")
        const tdTrabalho = document.createElement("td")
        const tdFone = document.createElement("td")

        //CRIANDO CONTEUDO NAS COLUNAS
        tdNome.textContent = item.firstname
        tdEmail.textContent = item.email
        tdTrabalho.textContent = item.company.bs
        tdFone.textContent = item.phone

        //ADICIONANDO OS ELEMENTOS EM SUAS TAGS
        linha.appendChild(tdNome)
        linha.appendChild(tdEmail)
        linha.appendChild(tdTrabalho)
        linha.appendChild(tdFone)
        
        tabela.appendChild(linha)

    }
}
carregarDados()