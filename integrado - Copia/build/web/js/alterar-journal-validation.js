
var $ = jQuery.noConflict();

$(document).ready(
   function()
   {
       $('#nlmuniqueid').attr('placeholder', 'Busque pelo ID');
        $('#nlmuniqueid').attr('data-provide', 'typeahead');
        $('#pesquisar-nlm').css('display', 'inline');
        $('#issn').attr('placeholder', '');
        $('#issn').attr('data-provide', '');
        $('#pesquisar-issn').css('display', 'none');
        $('#journalTitle').attr('placeholder', '');
        $('#journalTitle').attr('data-provide', '');
        $('#pesquisar-title').css('display', 'none');
            
       $('.radios').on('click', function() {
        if ($('input:checked').val() === 'nlm') {
            $('#nlmuniqueid').attr('placeholder', 'Busque pelo ID');
            $('#nlmuniqueid').attr('data-provide', 'typeahead');
            $('#pesquisar-nlm').css('display', 'inline');
            $('#issn').attr('placeholder', '');
            $('#issn').attr('data-provide', '');
            $('#pesquisar-issn').css('display', 'none');
            $('#journalTitle').attr('placeholder', '');
            $('#journalTitle').attr('data-provide', '');
            $('#pesquisar-title').css('display', 'none');
        } else {
             if ($('input:checked').val() === 'issn'){
                $('#nlmuniqueid').attr('placeholder', '');
                $('#nlmuniqueid').attr('data-provide', '');
                $('#pesquisar-nlm').css('display', 'none');
                $('#issn').attr('placeholder', 'Busque pelo ISSN');
                $('#issn').attr('data-provide', 'typeahead');
                $('#pesquisar-issn').css('display', 'inline');
                $('#journalTitle').attr('placeholder', '');
                $('#journalTitle').attr('data-provide', '');
                $('#pesquisar-title').css('display', 'none');
             } else {
                 //titulo
                $('#nlmuniqueid').attr('placeholder', '');
                $('#nlmuniqueid').attr('data-provide', '');
                $('#pesquisar-nlm').css('display', 'none');
                $('#issn').attr('placeholder', '');
                $('#issn').attr('data-provide', '');
                $('#pesquisar-issn').css('display', 'none');
                $('#journalTitle').attr('placeholder', 'Busque pelo Tíitulo');
                $('#journalTitle').attr('data-provide', 'typeahead');
                $('#pesquisar-title').css('display', 'inline');
             }

        }

    });
       
       $('#title-article').keypress(function(e) {
            if (e.which !== 13) {
                
                $('#title-article').css('box-shadow', '0px 0px 0px 0px #999999'); 
                $('.control-titulo').removeClass('error').addClass( 'ok', 300 );
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
        
        $('#forename').keyup(function() {
            var value = $('#forename').val();
            value = value.replace(';', '');
            $('#forename').val(value);
        });
        
        $('#forename').keypress(function() {
            var value = $('#forename').val();
            value = value.replace(';', '');
            $('#forename').val(value);
        });
        
        $('#lastname').keyup(function() {
            var value = $('#lastname').val();
            value = value.replace(';', '');
            $('#lastname').val(value);
        });
        
        $('#lastname').keypress(function() {
            var value = $('#lastname').val();
            value = value.replace(';', '');
            $('#lastname').val(value);
        });
        
        $('#initialsname').keyup(function() {
            var value = $('#initialsname').val();
            value = value.replace(';', '');
            $('#initialsname').val(value);
        });
        
        $('#initialsname').keypress(function() {
            var value = $('#initialsname').val();
            value = value.replace(';', '');
            $('#initialsname').val(value);
        });
        
        $('#keyword').keyup(function() {
            var value = $('#keyword').val();
            value = value.replace(';', '');
            $('#keyword').val(value);
        });
        
        $('#keyword').keypress(function() {
            var value = $('#keyword').val();
            value = value.replace(';', '');
            $('#keyword').val(value);
        });
        
        $('#mesh').keyup(function() {
            var value = $('#mesh').val();
            value = value.replace(';', '');
            $('#mesh').val(value);
        });
        
        $('#mesh').keypress(function() {
            var value = $('#mesh').val();
            value = value.replace(';', '');
            $('#mesh').val(value);
        });
        
        $('#chemical').keyup(function() {
            var value = $('#chemical').val();
            value = value.replace(';', '');
            $('#chemical').val(value);
        });
        
        $('#chemical').keypress(function() {
            var value = $('#chemical').val();
            value = value.replace(';', '');
            $('#chemical').val(value);
        });
        
        $('#pubtype').keyup(function() {
            var value = $('#pubtype').val();
            value = value.replace(';', '');
            $('#pubtype').val(value);
        });
        
        $('#pubtype').keypress(function() {
            var value = $('#pubtype').val();
            value = value.replace(';', '');
            $('#pubtype').val(value);
        });
        
    
      $("#nlmuniqueid").change( validate.controls.nlm);
      $("#issn").change( validate.controls.issn);
      $("#journalTitle").change( validate.controls.journaltitle);
      
      $(".btn-cadastrar").click(
         function( event)
         {
             console.log("ahoy");
            event.preventDefault();
            if( validate.all())
            {
                $('#msg').html('');
                $('.control-altear-journal').removeClass('error').addClass( 'ok', 300 );
                $(".btn-cadastrar").blur();
                $(".form-cadastro").submit(); 
                
               
            } else {
                $("#btn-cadastrar").blur();
                $('.control-altear-journal').html('Ocorreram alguns erros, por favor, verifique os itens destacados.');
                $('.control-altear-journal').removeClass('ok').addClass( 'error', 300 );
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
                
                    if(aux.length > 1 && aux.length < 9){
                    
                        isValid =  false;
                        $input.css('box-shadow', '0px 0px 1px 1px #FF3300');
                        $('.control-issn-journal').html('ISSN deve conter 9 caracteres');
                        $('.control-issn-journal').removeClass('ok').addClass( 'error', 300 );
                    
    
                    } else {
                            $input.css('box-shadow', '0px 0px 0px 0px #999999');
                            $('.control-issn-journal').removeClass('error').addClass( 'ok', 300 );
                            isValid =  true;

                            return isValid;  
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
                
                
                return isValid;  
            
            }
         };

      return {
         "all": all,
         "controls": controls};
   })();

