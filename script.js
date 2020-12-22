

// limite definido pelo usuário//
let limDef = document.getElementById("limite");
let numLimiteDef = Number(limDef.value);

// Número de clientes atuais//
let clienAtual = document.getElementById("clienteAtual"); 
let numAtual   = Number(clienAtual.value);

//arrays que armazenam/atualizam os números de clientes//
let clientes = []; 


function entrar() {
        
    if (limDef.value < 0) {
        window.alert("O Limite definido não é um valor válido!")
        limDef.value = 0;
        clienAtual.innerHTML = "0"
        clientes.length = 0;      
    }


    if (clientes.length == limDef.value || limDef.value < 0) {
        window.alert("O número de clientes máximo foi atingido!")
        limDef.value = 0;
        clienAtual.innerHTML = "0"
        clientes.length = 0;
        
    } else {
        clientes.push("");
        clienAtual.innerHTML = clientes.length;
        
        
    }
  
}

function sair() {
    
    if (clientes.length == 0) {    
        window.alert("ERRO Não há clientes há serem removidos");
    } else {
        clientes.pop("");
        clienAtual.innerHTML = clientes.length;
        
    }


}