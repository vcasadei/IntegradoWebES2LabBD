
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
      $t("#btn-logar").click(
         function( event)
         {
             
             $t("#btn-logar").blur();
             console.log("ahoy");
            event.preventDefault();
            if( validate.all())
            {
                $t('.control-login').removeClass('error').addClass( 'ok', 300 );
                $t('#msg').html('');
//                $t('.cadastra-usuario-form').submit();
                $t("#btn-logar").blur();
                $.ajax({
                    type: "POST",
                    url: "FazerLogin",
                    dataType: "text",
                    data: {login: $('.username-edt').val(), senha: $('.password-edt').val()}
                }).done(function(data) {
                    status = data;
                    if (status === "0") {
                        $t('.control-login').html('Login e/ou senha inválidos');
                        $t('.control-login').removeClass('ok').addClass( 'error', 300 );
                        $t("#username-edt").css('box-shadow', '0px 0px 1px 1px #FF3300');
                        $t("#password-edt").css('box-shadow', '0px 0px 1px 1px #FF3300');
                                
                    } else {
                        window.location.href = 'index.jsp';
                    }
                });

               
            } else {
                $t("#btn-logar").blur();
                $t('.control-login').removeClass('error').addClass( 'ok', 300 );
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
                    $tinput.attr('placeholder','Informe seu username');
                    isValid =  false;
                      
                } else {
                   
                             isValid = true;

                            return isValid;
                         
                    
                    
            
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
                    $tinput.attr('placeholder', 'Informe sua senha');

                    
    
                    } else {
                            
                                $tinput.css('box-shadow', '0px 0px 0px 0px #999999');
                                $t(".tooltip span").css('display', 'none');
                                
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

