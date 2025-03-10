
const ul = document.querySelector("nav ul");
function iconeBurguer(){
    
   if(ul.classList.contains("open")){
    ul.classList.remove("open");
   } else{
    ul.classList.add("open")
   }
  
  
}

const imagem = document.getElementById("brevemente")

function alertConfirm(){
   alert("brevemente!")
}

imagem.addEventListener("click", alertConfirm);

// validando o formulário

const form = document.getElementById("formulario");

form.addEventListener("submit", function(event){
   // previnir o evento
   event.preventDefault

   const name = document.getElementById("textName").value.trim();
   const email = document.getElementById("Emailput").value.trim()
   const senha = document.getElementById("passwordSenha").value.trim();
   const phone = document.getElementById("NumberPhone").value.trim()


  // Validar o campo Nome
  if (!validarNome(name)) {
   alert('Por favor, preencha o campo Nome com pelo menos 3 caracteres.');
   return;
 }

 // Validar o campo Email
 if (!validarEmail(email)) {
   alert('Por favor, insira um email válido.');
   return;
 }

 // Validar o campo Senha
 if (!validarSenha(senha)) {
   alert('A senha deve ter no mínimo 8 caracteres, incluindo letras, números e um caractere especial.');
   return;
 }

 // Validar o campo Telefone
 if (!validarTelefone(phone)) {
   alert('O telefone deve estar no formato: (XX) XXXXX-XXXX.');
   return;
 }

 // Se tudo estiver válido, enviar o formulário
 alert('Formulário enviado com sucesso!');
 this.submit();
});

// Função para validar o Nome
function validarNome(name) {
 return name.length >= 3; // Nome deve ter pelo menos 3 caracteres
}

// Função para validar o Email
function validarEmail(email) {
 const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 return regex.test(email);
}

// Função para validar a Senha
function validarSenha(senha) {
 // Regra: mínimo de 8 caracteres, incluindo pelo menos uma letra, um número e um caractere especial
 const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
 return regex.test(senha);
}

// Função para validar o Telefone
function validarTelefone(phone) {
 // Regra: formato (XX) XXXXX-XXXX
 const regex = /^\(\d{2}\) \d{5}-\d{4}$/;
 return regex.test(phone);
}



