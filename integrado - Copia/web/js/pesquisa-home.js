$(document).ready(function(){
    
    var tipo = new String();
    tipo = "titulo";
    
    $('#search').keypress(function(e){
        if (e.which !== 13) {

            $t(".tooltip span").css('display', 'none');
            $('#search').css('box-shadow', '0px 0px 0px 0px #999999');
        };
        
    });
    
    
    
    $('#search').typeahead({
        source: function(query, process) {
            return $.post('BuscaTitArticle', {
                tit: query, tipo: tipo
            }, function(data) {
                if (!data) {
                    return [];
                }
                return process(data);
            });
        }
    });

    $('#avancada').css('display', 'block');

    $('.radios').on('click', function() {
        if ($('input:checked').val() === 'titulo') {
            $('#caixa-pesquisa').attr('placeholder', 'Digite aqui parte do título de um artigo');
            tipo = "titulo";
        } else {
            $("#caixa-pesquisa").attr("placeholder", "Digite aqui uma palavra-chave");
            tipo = "keyword";
        }

    });

    $('#avancada').on('click', function() {
        $('#pesquisa-s').css('display', 'none');
        $('#pesquisa-a').css('display', 'block');
        $('#simples').css('display', 'block');
        $('#avancada').css('display', 'none');
    });

    $('#simples').on('click', function() {
        $('#pesquisa-a').css('display', 'none');
        $('#pesquisa-s').css('display', 'block');
        $('#avancada').css('display', 'block');
        $('#simples').css('display', 'none');
    });

    $('#btn-pesquisa').on( 'focus', function() {
        $('#caixa-pesquisa').focus();   
    });

//    $('#btn-pesquisa').on( 'click', function() {
//        $('#caixa-pesquisa').focus();
//        $('#pesquisa-s').submit();
//
//    });

// $('.btn-cadastrar').click(function() {
//     $('#msg').html("");
//     /*Verifica se as senhas confererem*/
//     var senha = $('#password-edt').val();
//     var senhaConfirm = $('#password-confirm-edt').val();

//     if (senha !== senhaConfirm) {
//         $('#msg').html("Senhas nao conferem!");
//     } else {
//         $.ajax({
//             type: "POST",
//             url: "CadastrarUsuarioComum",
//             dataType: "text",
//             data: {login: $('#username-edt').val(), senha: $('#password-edt').val()}
//         }).done(function(data) {
//             status = data;
//             if (status == "2") {
//                 $('#msg').html("<span>Login já está sendo utilizado!</span>");
//             } else if (status == "0") {
//                 alert("Houve um erro, tente novamente mais tarde");
//             } else if (status == "1") {
//                 window.location.href = 'loginCadastro.html';
//             }
//         });
//     }
// });

// $('.btn-cadastrar-admin').click(function() {

//     $('#msg').html("");

//     var senha = $('#password-edt').val();
//     var senhaConfirm = $('#password-confirm-edt').val();

//     if (senha !== senhaConfirm) {
//         $('#msg').html("Senhas não conferem!");
//     } else {
//         $.ajax({
//             type: "POST",
//             url: "CadastrarUsuario",
//             dataType: "text",
//             data: {login: $('#username-edt').val(), senha: $('#password-edt').val(), tipo: $('#user-type-edt').val()}
//         }).done(function(data) {
//             status = data;
//             if (status == "2") {
//                 $('#msg').html("<span>Login já está sendo utilizado!</span>");
//             } else if (status == "0") {
//                 alert("Houve um erro, tente novamente mais tarde");
//             } else {
//                 window.location.href = 'loginCadastro.html';
//             }
//         });
//     }
// });

// $('.btn-logar').click(function() {
   
//    /*Coloca a mensagem de erro como vazia*/
//     $('#msg').html("");
    
     /*Manda pro servlet*/
//     $.ajax({
//         type: "POST",
//         url: "FazerLogin",
//         dataType: "text",
//         data: {login: $('.username-edt').val(), senha: $('.password-edt').val()}
//     }).done(function(data) {
//         status = data;
//         if (status === "0") {
//             $('#msg').html("<span>Login ou senha inexistentes!</span>");
//         } else {
//             window.location.href = 'index.jsp';
//         }
//     });

    
});



