
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
                $t('#msg').html('');
//                $t('.cadastra-usuario-form').submit();
                $t("#btn-logar").blur();
                $t.ajax({
                    type: "POST",
                    url: "FazerLogin",
                    dataType: "text",
                    data: {login: $t('#username-edt').val(), senha: $t('#password-edt').val()}
                }).done(function(data) {
                    status = data;
                    if (status == "2") {
                        $t('#msg').html("<span>Login já está sendo utilizado!</span>");
                    } else if (status == "0") {
                        alert("Houve um erro, tente novamente mais tarde");
                    } else {
                        window.location.href='index.jsp';
                        alert("Login efetuado com sucesso!");
                    }
                });

               
            } else {
                $t("#btn-logar").blur();
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
                    $tinput.attr('placeholder','Insira o username');
                    isValid =  false;
                      
                } else {
                    if( $tinput.val().length > 20) {
                        $tinput.val('');
                        
                        $tinput.attr('placeholder','Username deve conter menos que 20 caracteres');
                        $tinput.css('box-shadow', '0px 0px 1px 1px #FF3300'); 
                        isValid =  false;
                    } else {
                        if( $tinput.val().match(/^[0-9]/) !== null){
                            $tinput.val('');
                            $tinput.css('box-shadow', '0px 0px 1px 1px #FF3300');
                            $tinput.attr('placeholder','Não deve começar com números');
                             
                            isValid = false;
                         } else {
                             isValid = true;

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
                    $tinput.attr('placeholder', 'Informe uma senha');
                    
    
                    } else {
                            if( aux.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/) === null){
                                isValid =  false;
                                $tinput.attr('placeholder','Senha Fraca');
                                $t('#msg').html('*A senha deve conter no mínimo 8 caracteres, uma letra maiúscula, uma minúscula, um número e um caractere especial');
                                $tinput.css('box-shadow', '0px 0px 1px 1px #FF3300'); 
                                isValid = false;
                             } else {
                                $tinput.css('box-shadow', '0px 0px 0px 0px #999999');
                                $t(".tooltip span").css('display', 'none');

                                $t('#msg').html('');
                                isValid =  true;

                                    return isValid;     
                             }
                        }
                         
                
            }
         };

      return {
         "all": all,
         "controls": controls};
   })();

