
//function testar() {
 //   alert('Seja bem vindo')
//}

let usuario = document.getElementById('inpUsuario');
let senha = document.getElementById('inpSenha')

function efetuarLogin(){
    console.log(usuario.value);
    console.log(senha.value)
    if(usuario.value == "gabi" && senha.value == "123456"){
        alert('Acertou! Seja bem vindo.')
    }else{
        alert('Usuário ou senha incorreta.')
    }
    // faz com que tudo se apague depois do ok!
    usuario.value = ""
    senha.value = ""
    // vai fazer com que o cursor volte para o input do usuário
    usuario.focus()

}


