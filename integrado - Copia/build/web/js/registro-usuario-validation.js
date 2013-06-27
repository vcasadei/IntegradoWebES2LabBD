
var $t = jQuery.noConflict();

$t(document).ready(
   function()
   {
       $t('#username-edt').keypress(function(e){
        if (e.which !== 13) {

            $t('#username-edt').css('box-shadow', '0px 0px 0px 0px #999999');
        };
        
    });

    
      $t("#username-edt").change( validate.controls.login);
      $t("#password-edt").change( validate.controls.senha);
      $t("#password-conf-edt").change( validate.controls.confsenha);
      $t(".btn-cadastrar").click(
         function( event)
         {
             console.log("ahoy");
            event.preventDefault();
            if( validate.all())
            {
                $t('#msg').html('');
//                $t('.cadastra-usuario-form').submit();
$t("#btn-cadastrar").blur();
                $t.ajax({
                    type: "POST",
                    url: "CadastrarUsuarioComum",
                    dataType: "text",
                    data: {login: $t('#username-edt').val(), senha: $t('#password-edt').val()}
                }).done(function(data) {
                    status = data;
                    if (status == "2") {
                        $t('.control-server').html('Login já está sendo utilizado!');
                        $t('.control-server').removeClass('ok').addClass( 'error', 300 );
                    } else if (status == "0") {
                        $t('.control-server').html('Houve um erro, tente novamente mais tarde');
                        $t('.control-server').removeClass('ok').addClass( 'error', 300 );
                    } else {
                        window.location.href='loginCadastro.jsp';
                        alert("Usuário cadastrado com sucesso!");
                    }
                });

               
            } else {
                $t("#btn-cadastrar").blur();
                $t('.control-server').removeClass('error').addClass( 'ok', 300 );
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
               if( ! validate.controls[controlValidationMethod].call( $t("#" + controlValidationMethod)))
               {
                  invalidControls.push( controlValidationMethod);
               }
            }

            if( invalidControls.length > 0)
            {
                // Set focus on the first erroneous control
                $t("#" + invalidControls[0]).focus();
            }
            
            
            console.log(invalidControls);
            console.log(invalidControls.length);
            return invalidControls.length == 0;
         };

      var controls =
      {
         login:
                 
            function(){
                var $tinput = $t('#username-edt');
               var isValid = true;

                function ltrim(texto) { return texto.replace(/^[ ]+/, ''); }
                function rtrim(texto) { return  texto.replace(/[ ]+$t/, ''); }
                function trim(texto) { return ltrim(rtrim(texto)); }

                var aux = trim($tinput.val());
                
                if(aux === "" || aux == null){
                    $tinput.val('');
                    $tinput.css('box-shadow', '0px 0px 1px 1px #FF3300'); 
                    $t('.control-username').html('Informe seu username');
                    $t('.control-username').removeClass('ok').addClass( 'error', 300 );
                    isValid =  false;
                      
                } else {
                    if( $tinput.val().length > 20) {
                        $tinput.val('');
                        $t('.control-username').html('Username deve conter menos que 20 caracteres');
                        $t('.control-username').removeClass('ok').addClass( 'error', 300 );
                        $tinput.css('box-shadow', '0px 0px 1px 1px #FF3300'); 
                        isValid =  false;
                    } else {
                        if( $tinput.val().match(/^[0-9]/) !== null){
                            $tinput.val('');
                            $t('.control-username').html('Username não deve começar com números');
                            $t('.control-username').removeClass('ok').addClass( 'error', 300 );
                            $tinput.css('box-shadow', '0px 0px 1px 1px #FF3300');
                             
                            isValid = false;
                         } else {
                             isValid = true;
                             $t('.control-username').removeClass('error').addClass( 'ok', 300 );
                            return isValid;
                         }
                    
                    
                    }
                }
            },
               
           senha: 
           function(){
                var $tinput = $t('#password-edt');
               var isValid = true;

                function ltrim(texto) { return texto.replace(/^[ ]+/, ''); }
                function rtrim(texto) { return  texto.replace(/[ ]+$t/, ''); }
                function trim(texto) { return ltrim(rtrim(texto)); }

                var aux = trim($tinput.val());
                if(aux === "" || aux == null){
                    
                    $tinput.val('');
                    isValid =  false;
                    $tinput.css('box-shadow', '0px 0px 1px 1px #FF3300');
                    $t('.control-password').html('Informe sua senha');
                    $t('.control-password').removeClass('ok').addClass( 'error', 300 );
                    
    
                    } else {
                            if( aux.match(/^.*(?=.{8,})(?=.*\d)(?=.*[A-Z]).*$/) === null){
                                isValid =  false;
                                $t('.control-password').html('A senha deve conter no mínimo 8 caracteres, uma letra maiúscula, um número e um caractere especial');
                                $t('.control-password').removeClass('ok').addClass( 'error', 300 );
                                $tinput.css('box-shadow', '0px 0px 1px 1px #FF3300'); 
                                isValid = false;
                             } else {
                                $tinput.css('box-shadow', '0px 0px 0px 0px #999999');
                                $t('.control-password').removeClass('error').addClass( 'ok', 300 );
                                $t('#msg').html('');
                                isValid =  true;

                                    return isValid;     
                             }
                        }
                         
                
            }, 
            
            confsenha: 
           function(){
                var $tinput = $t('#password-conf-edt');
                var $tinputconf = $t('#password-edt');
               var isValid = true;

                function ltrim(texto) { return texto.replace(/^[ ]+/, ''); }
                function rtrim(texto) { return  texto.replace(/[ ]+$t/, ''); }
                function trim(texto) { return ltrim(rtrim(texto)); }

                var aux = trim($tinput.val());
                var aux2 = trim($tinputconf.val());
                if(aux !== aux2){
                    
                    $tinput.val('');
                    isValid =  false;
                    $tinput.css('box-shadow', '0px 0px 1px 1px #FF3300');  
                    $t('.control-password-conf').html('As senhas não batem');
                    $t('.control-password-conf').removeClass('ok').addClass( 'error', 300 );
                    
    
                    } else {
                           
                                $tinput.css('box-shadow', '0px 0px 0px 0px #999999');
                                $t(".tooltip span").css('display', 'none');
                                $t('.control-password-conf').removeClass('error').addClass( 'ok', 300 );
                                $t('#msg').html('');
                                isValid =  true;

                                    return isValid;     
                             
                        }
                         
                
            }
         };

      return {
         "all": all,
         "controls": controls};
   })();

