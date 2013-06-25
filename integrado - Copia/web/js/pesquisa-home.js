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
                tit: query, tipo : tipo
            }
            , function(data) {
                
                
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

//    $('#btn-pesquisa').on( 'click', function() {
//        $('#caixa-pesquisa').focus();
//        $('#pesquisa-s').submit();
//
//    });


});




