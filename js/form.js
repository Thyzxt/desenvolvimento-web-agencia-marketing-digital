const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const telInput = document.querySelector("#tel")
const citySelect = document.querySelector("#city")
const topicSelect = document.querySelector("#topic")
const messageTextarea = document.querySelector("#message")

form.addEventListener("submit", (event) =>{

    event.preventDefault();

    if(nameInput.value == ""){

        alert("Por favor, preencha o seu nome");
        return;}

    if(emailInput.value == "" || !isEmailValid(emailInput.value)){

        alert("Por favor, preencha o seu email corretamente");
        return;}

    if(telInput.value == "" || !isTelValid(telInput.value)){

        alert("Por favor, preencha o seu telefone corretamente");
        return;}

    if(citySelect.value == ""){

        alert("Por favor, selecione a cidade");
        return;}

    if(topicSelect.value == ""){

        alert("Por favor, selecione o assunto");
        return;}

    if(messageTextarea.value == ""){

        alert("Por favor, insira a mensagem");
        return;}

    form.submit();});

function isEmailValid(email){

    const emailRegex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/);

    if(emailRegex.test(email)){

        return true;}
        
    else{
        
        return false;}}

function isTelValid(tel){
    
    const telRegex = new RegExp(/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/);

    if(telRegex.test(tel)){

        return true;}
        
    else{
        
        return false;}}