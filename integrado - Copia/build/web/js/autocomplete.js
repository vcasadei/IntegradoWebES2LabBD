$(document).ready(function() {
    
    
    $('#journalTitle').keydown(function(e){
        if (e.which !== 13) {
            $t(".tooltip span").css('display', 'none');
            $('#journalTitle').css('box-shadow', '0px 0px 0px 0px #999999');
        };
        
    });
    
    $('#issn').keypress(function(e){

        if (e.which !== 13) {
            $('#issn').css('box-shadow', '0px 0px 0px 0px #999999');
        };
        
    });
    
    $('#data-ini').focusin(function(){
            $('#data-ini').css('box-shadow', '0px 0px 0px 0px #999999');

        
    });
    
    $('#data-fim').focusin(function(){
            $('#data-fim').css('box-shadow', '0px 0px 0px 0px #999999');
        
    });
    
    /*Auto complete do keyword*/
    $('#keyword').typeahead({
        source: function(query, process) {
            return $.post('BuscaKeyword', {
                key: query
            }, function(data) {
                if (!data) {
                    return [];
                }
                return process(data);
            });
        }
    });
    
    /*Autocomplete do chemical*/
    $('#chemical').typeahead({
        source: function(query, process) {
            return $.post('BuscaChemical', {
                chemical: query
            }, function(data) {
                if (!data) {
                    return [];
                }
                return process(data);
            });
        }
    });
    
    /*Autocomplete do Mesh Term*/
    $('#mesh').typeahead({
        source: function(query, process) {
            return $.post('BuscaMeshHeading', {
                mesh: query
            }, function(data) {
                if (!data) {
                    return [];
                }
                return process(data);
            });
        }
    });
    
    /*Autocomplete do Publication type*/
    $('#pubtype').typeahead({
        source: function(query, process) {
            return $.post('BuscaPublicationType', {
                type: query
            }, function(data) {
                if (!data) {
                    return [];
                }
                return process(data);
            });
        }
    });
    
    /*Autocomplete do Nome do autor*/
    $('#forename').typeahead({
        source: function(query, process) {
            return $.post('BuscaNomeAutor', {
                fore: query
            }, function(data) {
                if (!data) {
                    return [];
                }
                return process(data);
            });
        }
    });
    
    /*Autocomplete do Sobrenome do autor*/
    $('#lastname').typeahead({
        source: function(query, process) {
            return $.post('BuscaLastAutor', {
                last: query
            }, function(data) {
                if (!data) {
                    return [];
                }
                return process(data);
            });
        }
    });
    
    /*Autocomplete das iniciais do autor*/
    $('#initialsname').typeahead({
        source: function(query, process) {
            return $.post('BuscaInitialsAutor', {
                initial: query
            }, function(data) {
                if (!data) {
                    return [];
                }
                return process(data);
            });
        }
    });
    
    /*Autocomplete do título do Journal*/
    $('#journalTitle').typeahead({
        source: function(query, process) {
            return $.post('BuscaTitJournal', {
                tit: query
            }, function(data) {
                if (!data) {
                    return [];
                }
                return process(data);
            });
        }
    });
    
    /*Autocomplete do issn do Journal*/
    $('#issn').typeahead({
        source: function(query, process) {
            return $.post('BuscaIssnJournal', {
                issn: query
            }, function(data) {
                if (!data) {
                    return [];
                }
                return process(data);
            });
        }
    });
    
    /*Autocomplete do NlmUniqueID do Journal*/
    $('#nlmuniqueid').typeahead({
        source: function(query, process) {
            return $.post('BuscaNlmJournal', {
                nlm: query
            }, function(data) {
                if (!data) {
                    return [];
                }
                return process(data);
            });
        }
    });
    
    
    
});