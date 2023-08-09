//alert("Olá, mundo")

// console.log("Só quem é dev vai descobrir!")

let nome = document.querySelector("#nome")

function exibirNome(){
    console.log(nome.value)
    if(nome.value == ""){
        nome.style.border = "2px solid red"
    }
    else{
        nome.style.border = "2px solid green"
    }
}

nome.addEventListener("blur", exibirNome) //o addEventListener cria um evento para algum elemento, no caso estamos utilizando o evento "blur", que é quando o foco sai de um campo. 

// nome.addEventListener("focus", function(){
//     nome.value = "Este campo não deve ficar vazio"
// })

let idade = document.querySelector("#idade")
idade.addEventListener("blur" ,function(){
        if(idade.value >=18){
            alert("Você possui 18 anos ou mais!")
    }
    else{
        alert("Infelizmente você não é de maior!")
        // Essa função irá redirecionar o usuário para um link específico
        window.location.href = "https://www.youtube.com/watch?v=5P8GcCpmGYQ"
    }
    
})

let endereco = document.querySelector("input[name=end]")
endereco.addEventListener("blur", function(){
    console.log(endereco.value.length)
    if(endereco.value.length  >= 35){
        alert ("O endereço está muito grande")
        endereco.style.border = "2px solid red"
    }
    else {
        alert ("O endereço está OK!")
        endereco.style.border = "2px solid yellow"
    }
})


let email = document.querySelector("#email")
let confirmar = document.querySelector("#confirmar")


email.addEventListener("keyup", function(){
    let minusculo = email.value.toLowerCase()// tornando o conteúdo do E-mail minúsculo
    confirmar.value = email.value
    if(minusculo.indexOf('@') == -1 || minusculo.indexOf('.') == -1){
        console.log("Email inválido")
        //email .style.border = "2px solid red"
        email.classList.add("border-danger")
        email.classList.remove("border-success")
    }
    
    else{
       console.log ("Email válido")
       //email .style.border = "2px solid green" 
       email.classList.add("border-success")
       email.classList.remove("border-danger")
    }
    console.log (email.value.indexOf("@"))
})


let senha = document.querySelector("#senha")
let btn_olho = document.querySelector(".fa-eye")

// ()=>{} into é uma errow function, ou seja, uma versão resumida da função anônima.
btn_olho.addEventListener("click",()=>{
    if(btn_olho.classList.contains("fa-eye")){
        console.log("A classe existe")
        btn_olho.classList.remove ("fa-eye")
        btn_olho.classList.add ("fa-eye-slash")

        senha.setAttribute("type","text")

    }
    else{
        console.log("A classe não existe")
        btn_olho.classList.remove("fa-eye-slash")
        btn_olho.classList.add("fa-eye")

        senha.setAttribute("type","password")
    }
})

//PEGANDO DADOS DO CAMPO RADIO
let escolaridade = document.querySelectorAll("input[name=escolaridade]")
let btnEscolaridade = document.querySelector("#btnEscolaridade")

btnEscolaridade.addEventListener("click", (evento)=>{
    //console.log(evento)
    evento.preventDefault() //Está função ira impedir o comportamento padrão do botão.

    console.log(escolaridade[2])
})