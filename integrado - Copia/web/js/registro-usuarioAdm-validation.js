
var $t = jQuery.noConflict();

$t(document).ready(
   function()
   {
       $t('#username-edt').keypress(function(e){
            if (e.which !== 13) {

                $t('#username-edt').css('box-shadow', '0px 0px 0px 0px #999999');
            };
        });
        
        $t('#password-edt').keypress(function(e){
            if (e.which !== 13) {

                $t('#password-edt').css('box-shadow', '0px 0px 0px 0px #999999');
            };
        });
        
        $t('#password-conf-edt').keypress(function(e){
            if (e.which !== 13) {

                $t('#password-conf-edt').css('box-shadow', '0px 0px 0px 0px #999999');
            };

        });

    
      $t("#username-edt").change( validate.controls.login);
      $t("#password-edt").change( validate.controls.senha);
      $t(".btn-cadastrar").click(
         function( event)
         {
             console.log("ahoy");
            event.preventDefault();
            if( validate.all())
            {
//                $t('.cadastra-usuario-form').submit();
                $t("#btn-cadastrar").blur();


                $t('#msg').html('');
                $t.ajax({
                    type: "POST",
                    url: "CadastrarUsuario",
                    dataType: "text",
                    data: {login: $t('#username-edt').val(), senha: $t('#password-edt').val(), tipo: $t('#user-type-edt').val()}
                }).done(function(data) {
                    status = data;
                    if (status == "2") {
                        $t('#msg').html("<span>Login já está sendo utilizado!</span>");
                    } else if (status == "0") {
                        alert("Houve um erro, tente novamente mais tarde");
                    } else {
                        window.location.href='loginCadastro.jsp';
                        alert("Usuário cadastrado com sucesso!");
                    }
                }); 


               
            } else {
                $t("#search").css('box-shadow', '0px 0px 1px 1px #FF3300');
                $t("#btn-cadastrar").blur();
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
                var $tconf = $t('#password-conf-edt');
               var isValid = true;

                function ltrim(texto) { return texto.replace(/^[ ]+/, ''); }
                function rtrim(texto) { return  texto.replace(/[ ]+$t/, ''); }
                function trim(texto) { return ltrim(rtrim(texto)); }

                var aux = trim($tinput.val());
                var aux2 = trim($tconf.val());
                if(aux === "" || aux == null){
                    
                    $tinput.val('');
                    isValid =  false;
                    $tinput.css('box-shadow', '0px 0px 1px 1px #FF3300'); 
                    $tconf.css('box-shadow', '0px 0px 1px 1px #FF3300'); 
                    $tinput.attr('placeholder', 'As senha digitadas não são iguais');
                    $tconf.attr('placeholder', 'As senha digitadas não são iguais');
                    
    
                    } else {
                            if( aux.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/) === null){
                                isValid =  false;
                                $tinput.attr('placeholder','Senha Fraca');
                                $t('#msg').html('*A senha deve conter no mínimo 8 caracteres, uma letra maiúscula, uma minúscula, um número e um caractere especial');
                                $tinput.css('box-shadow', '0px 0px 1px 1px #FF3300'); 
                                $tconf.css('box-shadow', '0px 0px 1px 1px #FF3300');
                                isValid = false;
                             } else {
                                $tinput.css('box-shadow', '0px 0px 0px 0px #999999');
                                $tconf.css('box-shadow', '0px 0px 0px 0px #999999');
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

