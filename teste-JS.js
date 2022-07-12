let wal = document.getElementById("res");

function aqui(){
    let n1= window.prompt("Digite um número:");
    if( n1 % 2 == 0){
        wal.innerHTML= "O número " +n1 + " que foi digitado é "+"PAR".bold();
        
    }else {
        wal.innerHTML= "O número " +n1 + " que foi digitado é "+"IMPAR".bold();
        
    }
}
     
 




