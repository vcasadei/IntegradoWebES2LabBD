
var $t = jQuery.noConflict();

$t(document).ready(
        
   function()
   {
       
      $t("#search").change( validate.controls.pesquisa);
      $t("#journalTitle").change( validate.controls.titulo);
      $t("#issn").change( validate.controls.issn);
      $t("#data-ini").change( validate.controls.dataini);
      $t("#data-fim").change( validate.controls.datafim);
      $t("#btn-pesquisa").click(
         function( event)
         {
             console.log("ahoy");
            event.preventDefault();
            console.log("ahoy2");
            var check = 1;
            if( validate.all(check) != 1)
            {
                console.log("ahoy3");
                $t("#search").css('box-shadow', '0px 0px 0px 0px #999999');
                $t('#btn-pesquisa').blur();
                $t('#pesquisa-s').submit();
                $t('#btn-pesquisa').blur();

               
            } else {
                $t("#search").css('box-shadow', '0px 0px 1px 1px #FF3300');
                $t('#btn-pesquisa').blur();
                $t("#search").focus();
            }
         });
         
         $t(".btn-pesquisar").click(
         function( event)
         {
             console.log("ahoy");
            event.preventDefault();
            console.log("ahoy2");
            var check = 2;
            if( validate.all(check) != 2)
            {
                console.log("ahoy3");
                $t('btn-pesquisar').blur();
                $t('#pesquisa-a').submit();
                $t('btn-pesquisar').blur();
               
            } else {
                $t("#journalTitle").css('box-shadow', '0px 0px 1px 1px #FF3300');
                $t("#issn").css('box-shadow', '0px 0px 1px 1px #FF3300');
                $t("#data-ini").css('box-shadow', '0px 0px 1px 1px #FF3300');
                $t("#data-fim").css('box-shadow', '0px 0px 1px 1px #FF3300');
                console.log("aaaaa");
                $t('btn-pesquisar').blur();
            }
         });
         
   });
   
 
   
var validate =
   (function()
   {
      

      var all =
         function(check)
         {
             console.log("CHECK " +check);
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
            
            for(var i = 0; i < invalidControls.length; i++){
                if(check == 1){
                    if(invalidControls[i] == 'pesquisa'){
                        return 1;
                    }
                } else {
                        if(invalidControls[i] == 'titulo' && invalidControls[i+1] == 'issn' && invalidControls[i+2] == 'dataini' && invalidControls[i+3] == 'datafim'){
                            return 2;
                        }
                }
                
                
                
            }
            console.log(invalidControls);
            console.log(invalidControls.length);
            return 3;
         };

      var controls =
      {
         pesquisa:
                 
            function(){
                var $tinput = $t('#search');
               var isValid = true;

                function ltrim(texto) { return texto.replace(/^[ ]+/, ''); }
                function rtrim(texto) { return  texto.replace(/[ ]+$t/, ''); }
                function trim(texto) { return ltrim(rtrim(texto)); }

                var aux = trim($tinput.val());
                if(aux === "" || aux == null){
                    
                    $tinput.val('');
                    isValid =  false;
                        
    
                    } else {
                        

                           $('#erro').fadeOut(0, function(){
                             
                             
                                
                             $tinput.boxShadow( 0, 0, 1, "#999999" );
                           });

                        isValid =  true;

                            return isValid;          
                }
            },
               
           titulo: 
           function(){
                var $tinput = $t('#journalTitle');
               var isValid = true;

                function ltrim(texto) { return texto.replace(/^[ ]+/, ''); }
                function rtrim(texto) { return  texto.replace(/[ ]+$t/, ''); }
                function trim(texto) { return ltrim(rtrim(texto)); }

                var aux = trim($tinput.val());
                if(aux === "" || aux == null){
                    
                    $tinput.val('');
                    isValid =  false;
                        
    
                    } else {
                        $tinput.css('box-shadow', '0px 0px 0px 0px #999999');
                        $t(".tooltip span").css('display', 'none');
                           $('#erro').fadeOut(0, function(){
                             
                             
                                
                             $tinput.boxShadow( 0, 0, 1, "#999999" );
                           });

                        isValid =  true;

                            return isValid;          
                }
            },
            
            issn:
            function(){
                var $tinput = $t('#issn');
               var isValid = true;

                function ltrim(texto) { return texto.replace(/^[ ]+/, ''); }
                function rtrim(texto) { return  texto.replace(/[ ]+$t/, ''); }
                function trim(texto) { return ltrim(rtrim(texto)); }
                var aux = trim($tinput.val());
                
                
                
            
                if(aux === "" || aux == null){
                    
                    isValid =  false;
                     
                        $tinput.attr("placeholder", "Insira o ISSN");
                        
                      
                    } else {
                        $tinput.css('box-shadow', '0px 0px 1px 1px #999999');
                                
                             $tinput.boxShadow( 0, 0, 1, "#999999" );
                           

                        isValid =  true;
                      
                    
                        if( $tinput.val() > 9){
                           
                            isValid =  false;
                              
                                $tinput.attr("placeholder", "No Máx 9 caracteres");
                                
                              
                            } else {
                                
                                        $tinput.css('box-shadow', '0px 0px 1px 1px #999999');
                                      
                                          $tinput.boxShadow( 0, 0, 1, "#999999" );
                                        
                                            isValid = true;

                                             

                                            return isValid;
                                    
                                
                         }                   
                }
            },
                    
           dataini: 
           function(){
                var $tinput = $t('#data-ini');
               var isValid = true;

                function ltrim(texto) { return texto.replace(/^[ ]+/, ''); }
                function rtrim(texto) { return  texto.replace(/[ ]+$t/, ''); }
                function trim(texto) { return ltrim(rtrim(texto)); }

                var aux = trim($tinput.val());
                if(aux === "" || aux == null){
                    
                    $tinput.val('');
                    isValid =  false;
                        
    
                    } else {
                        
                        $t(".tooltip span").css('display', 'none');
                           $('#erro').fadeOut(0, function(){
                             
                             
                                
                             $tinput.boxShadow( 0, 0, 1, "#999999" );
                           });

                        isValid =  true;

                            return isValid;          
                }
            },
                    
            datafim: 
           function(){
                var $tinput = $t('#data-fim');
               var isValid = true;

                function ltrim(texto) { return texto.replace(/^[ ]+/, ''); }
                function rtrim(texto) { return  texto.replace(/[ ]+$t/, ''); }
                function trim(texto) { return ltrim(rtrim(texto)); }

                var aux = trim($tinput.val());
                if(aux === "" || aux == null){
                    
                    $tinput.val('');
                    isValid =  false;
                        
    
                    } else {
                        $tinput.css('box-shadow', '0px 0px 0px 0px #999999');
                        $t(".tooltip span").css('display', 'none');
                           $('#erro').fadeOut(0, function(){
                             
                             
                                
                             $tinput.boxShadow( 0, 0, 1, "#999999" );
                           });

                        isValid =  true;

                            return isValid;          
                }
            }
         };

      return {
         "all": all,
         "controls": controls};
   })();

