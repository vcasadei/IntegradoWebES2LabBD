$(document).ready(function(){
    
    var tipo = new String();
    tipo = "titulo";
    
    $('#search').typeahead({
        source: function(query, process) {
            return $.post('BuscaTitArticle', {
                tit: query, tipo : tipo
            }, function(data) {
                if (!data) {
                    return [];
                }
                return process(data);
            });
        }
    });
    
    $('#avancada').css('display','block');

    $( '.radios' ).on( 'click', function() {
            if($('input:checked').val() === 'titulo'){
                $('#caixa-pesquisa').attr('placeholder','Digite aqui parte do título de um artigo');
                tipo = "titulo";
            } else {
                $("#caixa-pesquisa").attr("placeholder","Digite aqui uma palavra-chave");
                tipo = "keyword";
            }

    });

    $('#avancada').on( 'click', function() {
        $('#pesquisa-s').css('display','none');
        $('#pesquisa-a').css('display','block');
        $('#simples').css('display','block');
        $('#avancada').css('display','none');
    });

    $('#simples').on( 'click', function() {
        $('#pesquisa-a').css('display','none');
        $('#pesquisa-s').css('display','block');
        $('#avancada').css('display','block');
        $('#simples').css('display','none');
    });

    $('#btn-pesquisa').on( 'focus', function() {
        $('#caixa-pesquisa').focus();   
    });

    $('#btn-pesquisa').on( 'click', function() {
        $('#caixa-pesquisa').focus();
        $('#pesquisa-s').submit();

    });

});

$('.btn-cadastrar').click(function() {
    $.ajax({
        type: "POST",
        url: "CadastrarUsuarioComum",
        dataType: "text",
        data: {login: $('#username-edt').val(), senha: $('#password-edt').val()}
    }).done(function(data) {
        status = data;
        if (status == "2") {
            $('#msg').html("<span>Login já está sendo utilizado!</span>");
        } else if (status == "0") {
            alert("Houve um erro, tente novamente mais tarde");
        } else {
            window.location.href='Login.html';
            alert("Usuário cadastrado com sucesso!");
        }
    });
});

$('.btn-cadastrar-admin').click(function() {
    $.ajax({
        type: "POST",
        url: "CadastrarUsuario",
        dataType: "text",
        data: {login: $('#username-edt').val(), senha: $('#password-edt').val(), tipo: $('#user-type-edt').val()}
    }).done(function(data) {
        status = data;
        if (status == "2") {
            $('#msg').html("<span>Login já está sendo utilizado!</span>");
        } else if (status == "0") {
            alert("Houve um erro, tente novamente mais tarde");
        } else {
            window.location.href='Login.html';
            alert("Usuário cadastrado com sucesso!");
        }
    }); 
});