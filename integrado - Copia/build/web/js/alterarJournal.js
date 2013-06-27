$('.nlm-edt').keypress(function(e) {
    if (e.which === 13) {
        $.ajax({
            type: "GET",
            url: "BuscaJournalNlmIssn",
            dataType: "html",
            data: {nlm: $('#nlmuniqueid').val()}
        }).done(function(data) {
            $('#form-alt-journal').html(data);
        });
    }
    if (e.which === 13)
        e.preventDefault();
});

$('.pesquisar-nlm').click(function() {
    $.ajax({
        type: "GET",
        url: "BuscaJournalNlmIssn",
        dataType: "html",
        data: {nlm: $('#nlmuniqueid').val()}
    }).done(function(data) {
        $('#form-alt-journal').html(data);
    });
});

$('.issn-edt').keypress(function(e) {
    if (e.which === 13) {
        $.ajax({
            type: "POST",
            url: "BuscaJournalNlmIssn",
            dataType: "html",
            data: {issn: $('#issn').val()}
        }).done(function(data) {
            $('#form-alt-journal').html(data);
        });
    }
    if (e.which === 13)
        e.preventDefault();
});

$('.pesquisar-issn').click(function() {
    $.ajax({
        type: "POST",
        url: "BuscaJournalNlmIssn",
        dataType: "html",
        data: {issn: $('#issn').val()}
    }).done(function(data) {
        $('#form-alt-journal').html(data);
    });
});

$('.pesquisar-login').click(function() {

    /*Limpa a div que exibe mensagem de erro*/
    $('#msg').html("");
    $.ajax({
        type: "GET",
        url: "BuscaUsuario",
        dataType: "html",
        data: {login: $('#nlmuniqueid').val()}
    }).done(function(data) {
        var status = data;
        if (status !== "1"){
            $('#user-type-edt').html(data);
        } else {
            $('#msg').html("Login Inexistente!");
        }
    });
});