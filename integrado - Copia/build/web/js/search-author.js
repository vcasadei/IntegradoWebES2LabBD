$('#nlmuniqueid').keypress(function(e) {
    if (e.which === 13) {
        $.ajax({
            type: "GET",
            url: "CadBuscaJournalNlmIssn",
            dataType: "html",
            data: {nlm: $('#nlmuniqueid').val()}
        }).done(function(data) {
            if (data === "Vazio") {
                $('#erro').html("Journal inexistente, por favor informe os demais campos para cadastrar um novo");
                $('#issn').val('');
                $('#journalTitle').val('');
                $('#abreviation').val('');
            } else {
                $('#erro').html("");
                var string = data.split("|@");
                $('#nlmuniqueid').val(string[0]);
                $('#issn').val(string[1]);
                $('#journalTitle').val(string[2]);
                $('#abreviation').val(string[3]);
            }
        });
        e.preventDefault();
    }
});

$('#journalTitle').keypress(function(e) {
    if (e.which === 13) {
        $.ajax({
            type: "POST",
            url: "CadBuscaJournalTitulo",
            dataType: "html",
            data: {journalTitle: $('#journalTitle').val()}
        }).done(function(data) {
            if (data === "Vazio") {
                $('#erro').html("Journal inexistente, por favor informe os demais campos para cadastrar um novo");
                $('#nlmuniqueid').val('');
                $('#journalTitle').val('');
                $('#abreviation').val('');
            } else {
                $('#erro').html("");
                var string = data.split("|@");
                $('#nlmuniqueid').val(string[0]);
                $('#issn').val(string[1]);
                $('#journalTitle').val(string[2]);
                $('#abreviation').val(string[3]);
            }
        });
        e.preventDefault();
    }
});

$('#issn').keypress(function(e) {
    if (e.which === 13) {
        $.ajax({
            type: "POST",
            url: "CadBuscaJournalNlmIssn",
            dataType: "html",
            data: {issn: $('#issn').val()}
        }).done(function(data) {
            if (data === "Vazio") {
                $('#erro').html("Journal inexistente, por favor informe os demais campos para cadastrar um novo");
                $('#nlmuniqueid').val('');
                $('#journalTitle').val('');
                $('#abreviation').val('');
            } else {
                $('#erro').html("");
                var string = data.split("|@");
                $('#nlmuniqueid').val(string[0]);
                $('#issn').val(string[1]);
                $('#journalTitle').val(string[2]);
                $('#abreviation').val(string[3]);
            }
        });
    }
    if (e.which === 13) {
        e.preventDefault();
    }
});