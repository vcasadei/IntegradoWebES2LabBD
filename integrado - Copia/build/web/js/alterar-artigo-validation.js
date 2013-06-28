
var $ = jQuery.noConflict();

$(document).ready(
   function()
   {
       $('#id-article').attr('disabled', 'disabled');
       if($('#nlmuniqueid').val() !== ""){
           $('#nlmuniqueid').attr('disabled', 'disabled');
           $('#issn').attr('disabled', 'disabled');
           $('#journalTitle').attr('disabled', 'disabled');
           $('#abreviation').attr('disabled', 'disabled');
           $('#pagination').attr('disabled', 'disabled');
           $('#volume').attr('disabled', 'disabled');
           $('#issue').attr('disabled', 'disabled');
           $('#pesquisar-nlm').css('cursor', 'default');
           $('#pesquisar-issn').css('cursor', 'default');
           $('#pesquisar-title').css('cursor', 'default');
       }
       
       $('#title-article').keypress(function(e) {
            if (e.which !== 13) {
                
                $('#title-article').css('box-shadow', '0px 0px 0px 0px #999999'); 
                $('.control-titulo').removeClass('error').addClass( 'ok', 300 );
            }
        });
        
        $('#id-article').keypress(function(e) {
            if (e.which !== 13) {
                
                $('#id-article').css('box-shadow', '0px 0px 0px 0px #999999'); 
                $('.control-id-article').removeClass('error').addClass( 'ok', 300 );
            }
        });
        
        $('#abstract-article').keypress(function(e) {
            if (e.which !== 13) {
                
                $('#abstract-article').css('box-shadow', '0px 0px 0px 0px #999999'); 
                $('.control-abstract').removeClass('error').addClass( 'ok', 300 );
            }
        });
        
        $('#nlmuniqueid').keypress(function(e) {
            if (e.which !== 13) {
                
                $('#nlmuniqueid').css('box-shadow', '0px 0px 0px 0px #999999'); 
                $('.control-nlm').removeClass('error').addClass( 'ok', 300 );
            }
        });
        
        $('#issn').keypress(function(e) {
            if (e.which !== 13) {
                
                $('#issn').css('box-shadow', '0px 0px 0px 0px #999999'); 
                $('.control-issn-journal').removeClass('error').addClass( 'ok', 300 );
            }
        });
        
        $('#journalTitle').keypress(function(e) {
            if (e.which !== 13) {
                
                $('#journalTitle').css('box-shadow', '0px 0px 0px 0px #999999'); 
                $('.control-journal-title').removeClass('error').addClass( 'ok', 300 );
            }
        });
    
      $("#title-article").change( validate.controls.title);
//      $("#id-article").change( validate.controls.id);
      $("#abstract-article").change( validate.controls.abstract);
      $("#nlmuniqueid").change( validate.controls.nlm);
      $("#issn").change( validate.controls.issn);
      $("#journalTitle").change( validate.controls.journaltitle);
      $("#forename").change( validate.controls.autor);
      
      $(".btn-cadastrar").click(
         function( event)
         {
             console.log("ahoy");
            event.preventDefault();
            if( validate.all())
            {
                $('#msg').html('');
                $('.control-cadastro').removeClass('error').addClass( 'ok', 300 );
                $("#btn-cadastrar").blur();
//                $.ajax({
//                    type: "POST",
//                    url: "CadastrarArtigo",
//                    dataType: "text",
//                    data: {login: $('#username-edt').val(), senha: $('#password-edt').val()}
//                }).done(function(data) {
//                    status = data;
//                    if (status == "2") {
//                        $('.control-cadastro').html('Login já está sendo utilizado!');
//                        $('.control-cadastro').removeClass('ok').addClass( 'error', 300 );
//                    } else if (status == "0") {
//                        $('.control-cadastro').html('Houve um erro, tente novamente mais tarde');
//                        $('.control-cadastro').removeClass('ok').addClass( 'error', 300 );
//                    } else {
//                        window.location.href='index.jsp';
//                        alert("Usuário cadastrado com sucesso!");
//                    }
//                });
                
               
            } else {
                $("#btn-cadastrar").blur();
                $('.control-cadastro').html('Ocorreram alguns erros, por favor, verifique os itens destacados.');
                $('.control-cadastro').removeClass('ok').addClass( 'error', 300 );
                $('html, body').animate({ 
                    scrollTop: $(document).height()-$(window).height()}, 
                    1400, 
                    "easeOutQuint"
                 );
            }
         });
         
         
   });
   
 
   
var validate =
   (function()
   {
      

      var all =
         function()
         {
            var invalidControls = [];
            for( var controlValidationMethod in validate.controls)
            {
               if( ! validate.controls[controlValidationMethod].call( $("#" + controlValidationMethod)))
               {
                  invalidControls.push( controlValidationMethod);
               }
            }

            if( invalidControls.length > 0)
            {
                // Set focus on the first erroneous control
                $("#" + invalidControls[0]).focus();
            }

            
            console.log(invalidControls);
            console.log(invalidControls.length);
            return invalidControls.length === 0;
         };

      var controls =
      {
         title:
                 
            function(){
               var $input = $('#title-article');
               var isValid = true;

                function ltrim(texto) { return texto.replace(/^[ ]+/, ''); }
                function rtrim(texto) { return  texto.replace(/[ ]+$/, ''); }
                function trim(texto) { return ltrim(rtrim(texto)); }

                var aux = trim($input.val());
                
                if(aux === "" || aux == null){
                    $input.val('');
                    $input.css('box-shadow', '0px 0px 1px 1px #FF3300'); 
                    $('.control-titulo').html('Insira o Título do Artigo');
                    $('.control-titulo').removeClass('ok').addClass( 'error', 300 );
                    isValid =  false;
                      
                } else {
                    isValid = true;
                    $input.css('box-shadow', '0px 0px 0px 0px #999999'); 
                    $('.control-titulo').removeClass('error').addClass( 'ok', 300 );
                    return isValid; 
                }
                return isValid;
            },
               
//           id: 
//           function(){
//               var $input = $('#id-article');
//               var isValid = true;
//
//                function ltrim(texto) { return texto.replace(/^[ ]+/, ''); }
//                function rtrim(texto) { return  texto.replace(/[ ]+$/, ''); }
//                function trim(texto) { return ltrim(rtrim(texto)); }
//
//                var aux = trim($input.val());
//                if(aux === "" || aux === null){
//                    
//                    $input.val('');
//                    isValid =  false;
//                    $input.css('box-shadow', '0px 0px 1px 1px #FF3300');
//                    $('.control-id-article').html('Informe o ID do Artigo');
//                    $('.control-id-article').removeClass('ok').addClass( 'error', 300 );
//                    
//    
//                    } else {
//                            if( aux.match(/^\d+$/) === null){
//                                isValid =  false;
//                                $('.control-id-article').html('O ID do Artigo deve conter somente números');
//                                $('.control-id-article').removeClass('ok').addClass( 'error', 300 );
//                                $input.css('box-shadow', '0px 0px 1px 1px #FF3300'); 
//                                isValid = false;
//                             } else {
//                                 if(aux.length > 30){
//                                     isValid =  false;
//                                    $('.control-id-article').html('O ID do Artigo deve conter menos de 30 caracteres');
//                                    $('.control-id-article').removeClass('ok').addClass( 'error', 300 );
//                                    $input.css('box-shadow', '0px 0px 1px 1px #FF3300'); 
//                                    isValid = false;
//                                 } else {
//                                     $input.css('box-shadow', '0px 0px 0px 0px #999999');
//                                    $('.control-id-article').removeClass('error').addClass( 'ok', 300 );
//                                    isValid =  true;
//
//                                    return isValid;
//                                 }
//                                     
//                             }
//                        }
//                        return isValid;
//                         
//                
//            }, 
            
            abstract: 
           function(){
               var $input = $('#abstract-article');
               var isValid = true;

                function ltrim(texto) { return texto.replace(/^[ ]+/, ''); }
                function rtrim(texto) { return  texto.replace(/[ ]+$/, ''); }
                function trim(texto) { return ltrim(rtrim(texto)); }

                var aux = trim($input.val());
                if(aux === "" || aux === null){
                    
                    $input.val('');
                    isValid =  false;
                    $input.css('box-shadow', '0px 0px 1px 1px #FF3300');
                    $('.control-abstract').html('Informe o Resumo do Artigo');
                    $('.control-abstract').removeClass('ok').addClass( 'error', 300 );
                    
    
                    } else {
                            $input.css('box-shadow', '0px 0px 0px 0px #999999');
                            $('.control-abstract').removeClass('error').addClass( 'ok', 300 );
                            isValid =  true;

                               return isValid;     

                        }
            },
            nlm: 
           function(){
               var $input = $('#nlmuniqueid');
               var isValid = true;
               
               var issn = $('#issn');
               var journalTitle = $('#journalTitle');
               var abreviation = $('#abreviation');
               var pagination = $('#pagination');
               var volume = $('#volume');
               var issue = $('#issue');

                function ltrim(texto) { return texto.replace(/^[ ]+/, ''); }
                function rtrim(texto) { return  texto.replace(/[ ]+$/, ''); }
                function trim(texto) { return ltrim(rtrim(texto)); }

                var aux = trim($input.val());
                var issnvar = trim(issn.val());
                var journalTitlevar = trim(journalTitle.val());
                var abreviationvar = trim(abreviation.val());
                var paginationvar = trim(pagination.val());
                var volumevar = trim(volume.val());
                var issuevar = trim(issue.val());
                
                if($input.is(':disabled') == false ){
                    if(issnvar !== "" || journalTitlevar !== "" || abreviationvar !== "" || paginationvar !== "" || volumevar !== "" || issuevar !== ""){
                    
                        if(aux === "" || aux === null){

                        $input.val('');
                        isValid =  false;
                        $input.css('box-shadow', '0px 0px 1px 1px #FF3300');
                        $('.control-nlm').html('Insira o NLM no artigo');
                        $('.control-nlm').removeClass('ok').addClass( 'error', 300 );


                        } else {
                            if(aux.length > 9){
                                $input.css('box-shadow', '0px 0px 1px 1px #FF3300');
                                $('.control-nlm').html('NLM deve conter no máximo 9 caracteres');
                                $('.control-nlm').removeClass('ok').addClass( 'error', 300 );
                            } else {
                                $input.css('box-shadow', '0px 0px 0px 0px #999999');
                                $('.control-nlm').removeClass('error').addClass( 'ok', 300 );
                                isValid =  true;

                                return isValid;  
                            }


                        }
                    } else {
                        $input.css('box-shadow', '0px 0px 0px 0px #999999');
                        $('.control-nlm').removeClass('error').addClass( 'ok', 300 );
                        isValid =  true;

                        return isValid; 
                    }
                    
                }
                
                return isValid; 
                
                
            },
             issn: 
           function(){
               var $input = $('#issn');
               var isValid = true;
               
               var nlm = $('#nlmuniqueid');
               var journalTitle = $('#journalTitle');
               var abreviation = $('#abreviation');
               var pagination = $('#pagination');
               var volume = $('#volume');
               var issue = $('#issue');

                function ltrim(texto) { return texto.replace(/^[ ]+/, ''); }
                function rtrim(texto) { return  texto.replace(/[ ]+$/, ''); }
                function trim(texto) { return ltrim(rtrim(texto)); }

                var aux = trim($input.val());
                var nlmvar = trim(nlm.val());
                var journalTitlevar = trim(journalTitle.val());
                var abreviationvar = trim(abreviation.val());
                var paginationvar = trim(pagination.val());
                var volumevar = trim(volume.val());
                var issuevar = trim(issue.val());
                
                //Se anteriormente o journal era null
                if(nlm.is(':disabled') == false){
                    if(aux.length > 9){
                    
                        isValid =  false;
                        $input.css('box-shadow', '0px 0px 1px 1px #FF3300');
                        $('.control-issn-journal').html('ISSN deve conter no máximo 9 caracteres');
                        $('.control-issn-journal').removeClass('ok').addClass( 'error', 300 );
                    
    
                    } else {
                            $input.css('box-shadow', '0px 0px 0px 0px #999999');
                            $('.control-issn-journal').removeClass('error').addClass( 'ok', 300 );
                            isValid =  true;

                            return isValid;  
                        }
                }
                    
                        
                    return isValid;  
                
                               

                    
            },
            journalTitle: 
           function(){
                var $input = $('#journalTitle');
                var isValid = true;
               
               var issn = $('#issn');
               var nlm = $('#nlmuniqueid');
               var abreviation = $('#abreviation');
               var pagination = $('#pagination');
               var volume = $('#volume');
               var issue = $('#issue');

                function ltrim(texto) { return texto.replace(/^[ ]+/, ''); }
                function rtrim(texto) { return  texto.replace(/[ ]+$/, ''); }
                function trim(texto) { return ltrim(rtrim(texto)); }

                var aux = trim($input.val());
                var nlmvar = trim(nlm.val());
                var issnvar = trim(issn.val());
                var abreviationvar = trim(abreviation.val());
                var paginationvar = trim(pagination.val());
                var volumevar = trim(volume.val());
                var issuevar = trim(issue.val());
                
                if(nlm.is(':disabled') == false){
                    if(nlmvar !== "" || issnvar !== "" || abreviationvar !== "" || paginationvar !== "" || volumevar !== "" || issuevar !== ""){
                        if(aux === "" || aux === null){

                            $input.val('');
                            isValid =  false;
                            $input.css('box-shadow', '0px 0px 1px 1px #FF3300');
                            $('.control-journal-title').html('Insira o Título do Journal');
                            $('.control-journal-title').removeClass('ok').addClass( 'error', 300 );


                        } else {
                                $input.css('box-shadow', '0px 0px 0px 0px #999999');
                                $('.control-journal-title').removeClass('error').addClass( 'ok', 300 );
                                isValid =  true;

                                return isValid;  
                            }
                    } else {
                        $input.css('box-shadow', '0px 0px 0px 0px #999999');
                        $('.control-journal-title').removeClass('error').addClass( 'ok', 300 );
                        isValid =  true;

                        return isValid;  
                    }
                }
                
                return isValid;  
            
            },
            autor: 
           function(){
               var $input = $('#forename');
               var last = $('#lastname');
               var initials = $("#initialsname");
               var isValid = true;

                function ltrim(texto) { return texto.replace(/^[ ]+/, ''); }
                function rtrim(texto) { return  texto.replace(/[ ]+$/, ''); }
                function trim(texto) { return ltrim(rtrim(texto)); }
                

                if($('.author-item').length === 0){
                    //Não existe nenhum autor
                    $input.css('box-shadow', '0px 0px 1px 1px #FF3300');
                    last.css('box-shadow', '0px 0px 1px 1px #FF3300');
                    initials.css('box-shadow', '0px 0px 1px 1px #FF3300');
                    $('.control-authors').html('O Artigo deve ter ao menos um Autor. Por favor, insira um Autor');
                    $('.control-authors').removeClass('ok').addClass( 'error', 300 );
                    isValid =  false;
                } else {
                    isValid =  true; 
                    $('.control-authors').removeClass('error').addClass( 'ok', 300 );
                    $input.css('box-shadow', '0px 0px 0px 0px #999999');
                    last.css('box-shadow', '0px 0px 0px 0px #999999');
                    initials.css('box-shadow', '0px 0px 0px 0px #999999');
                }
                return isValid;
                  
            }
         };

      return {
         "all": all,
         "controls": controls};
   })();

