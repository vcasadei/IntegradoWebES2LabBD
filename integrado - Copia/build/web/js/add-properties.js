$('.keyword-edt').keypress(function(e) {
    if (e.which === 13) {
        adicionaKeyword();
    }
    if (e.which === 13)
        e.preventDefault();
});

$('.adicionar-keyword').click(function() {
    adicionaKeyword();
    $('.keyword-edt').focus();
});


$('.adicionar-keyword').focus(function() {
    $('.mesh-edt').focus();
});

function adicionaKeyword(){
	var keyword = document.getElementsByClassName('keyword-edt')[0];
	var s_keyword = keyword.value;
	
	var err = document.getElementsByClassName('keyword-erro')[0];
	err.style.display = 'none';

	if (s_keyword.length <= 0) {
		err.style.display = 'inline';
		err.innerHTML = 'Palavra-chave inválida';
		return;
	};

	if (existeKeyword(s_keyword)){
		err.style.display = 'inline';
		err.innerHTML = 'Palavra-chave já adicionada';
		return;
	};

	keyword.value = '';

	var ul = document.getElementsByClassName('keyword-list')[0];
	var li = document.createElement('li');
        var input = document.createElement('input');
	var remover = document.createElement('strong');
	remover.innerHTML = '[remover]';
	remover.setAttribute('class','keyword-remover');
        remover.setAttribute('onclick','removeKeyword(this)');
	li.setAttribute('class','keyword-item');
	li.innerHTML = s_keyword;
	li.appendChild(remover);
        input.setAttribute('value', s_keyword);
        input.setAttribute('type', 'hidden');
        input.setAttribute('name', 'nomeKeyword');
	ul.appendChild(li);
        li.appendChild(input);

	var nenhum = document.getElementsByClassName('keyword-nenhum')[0];
	nenhum.style.display = 'none';
};

function removeKeyword(e){
	var li = e.parentNode;
	var ul = li.parentNode;
	li.parentNode.removeChild(li);

	if (ul.childElementCount <= 0){
		var nenhum = document.getElementsByClassName('keyword-nenhum')[0];
		nenhum.style.display = 'block';
	};
};

function existeKeyword(keyword){
	var ul = document.getElementsByClassName('keyword-list')[0];
	var len = ul.childElementCount;
	for (var i = 0; i < len; i++) {
		if (keyword === ul.children[i].innerHTML.split('<strong')[0]){
			return true;
		};
	};

	return false;
};

$('.mesh-edt').keypress(function(e) {
    if (e.which === 13) {
        adicionaMesh();
    }
    if (e.which === 13)
        e.preventDefault();
});

$('.adicionar-mesh').click(function() {
    adicionaMesh();
    $('.mesh-edt').focus();
});


$('.adicionar-mesh').focus(function() {
    $('.chemical-edt').focus();
});

function adicionaMesh(){
	var mesh = document.getElementsByClassName('mesh-edt')[0];
	var s_mesh = mesh.value;
	
	var err = document.getElementsByClassName('mesh-erro')[0];
	err.style.display = 'none';

	if (s_mesh.length <= 0) {
		err.style.display = 'inline';
		err.innerHTML = 'Termo Mesh inválido';
		return;
	};

	if (existeMesh(s_mesh)){
		err.style.display = 'inline';
		err.innerHTML = 'Termo Mesh já adicionado';
		return;
	};

	mesh.value = '';

	var ul = document.getElementsByClassName('mesh-list')[0];
	var li = document.createElement('li');
        var input = document.createElement('input');
	var remover = document.createElement('strong');
	remover.innerHTML = '[remover]';
	remover.setAttribute('class','mesh-remover');
        remover.setAttribute('onclick','removeMesh(this)');
	li.setAttribute('class','mesh-item');
	li.innerHTML = s_mesh;
        input.setAttribute('name', 'nomeMesh');
        input.setAttribute('value', s_mesh);
        input.setAttribute('type', 'hidden');
	li.appendChild(remover);
	ul.appendChild(li);
        li.appendChild(input);

	var nenhum = document.getElementsByClassName('mesh-nenhum')[0];
	nenhum.style.display = 'none';
};

function removeMesh(e){
	var li = e.parentNode;
	var ul = li.parentNode;
	li.parentNode.removeChild(li);

	if (ul.childElementCount <= 0){
		var nenhum = document.getElementsByClassName('mesh-nenhum')[0];
		nenhum.style.display = 'block';
	};
};

function existeMesh(mesh){
	var ul = document.getElementsByClassName('mesh-list')[0];
	var len = ul.childElementCount;
	for (var i = 0; i < len; i++) {
		if (mesh === ul.children[i].innerHTML.split('<strong')[0]){
			return true;
		};
	};

	return false;
};


$('.chemical-edt').keypress(function(e) {
    if (e.which === 13) {
        adicionaChemical();
    }
    if (e.which === 13)
        e.preventDefault();
});

$('.adicionar-chemical').click(function() {
    adicionaChemical();
    $('.chemical-edt').focus();
});


$('.adicionar-chemical').focus(function() {
    $('.pubtype-edt').focus();
});

function adicionaChemical(){
	var chemical = document.getElementsByClassName('chemical-edt')[0];
	var s_chemical = chemical.value;
	
	var err = document.getElementsByClassName('chemical-erro')[0];
	err.style.display = 'none';

	if (s_chemical.length <= 0) {
		err.style.display = 'inline';
		err.innerHTML = 'Substância inválida';
		return;
	};

	if (existeChemical(s_chemical)){
		err.style.display = 'inline';
		err.innerHTML = 'Substância já adicionada';
		return;
	};

	chemical.value = '';

	var ul = document.getElementsByClassName('chemical-list')[0];
	var li = document.createElement('li');
        var input = document.createElement('input');
        
	var remover = document.createElement('strong');
	remover.innerHTML = '[remover]';
	remover.setAttribute('class','chemical-remover');
        remover.setAttribute('onclick','removeChemical(this)');
	li.setAttribute('class','chemical-item');
	li.innerHTML = s_chemical;
	li.appendChild(remover);
        input.setAttribute('type', 'hidden');
        input.setAttribute('value', s_chemical);
        input.setAttribute('name', 'nomeChemical');
	ul.appendChild(li);
        li.appendChild(input)
	var nenhum = document.getElementsByClassName('chemical-nenhum')[0];
	nenhum.style.display = 'none';
};

function removeChemical(e){
	var li = e.parentNode;
	var ul = li.parentNode;
	li.parentNode.removeChild(li);

	if (ul.childElementCount <= 0){
		var nenhum = document.getElementsByClassName('chemical-nenhum')[0];
		nenhum.style.display = 'block';
	};
};

function existeChemical(chemical){
	var ul = document.getElementsByClassName('chemical-list')[0];
	var len = ul.childElementCount;
	for (var i = 0; i < len; i++) {
		if (chemical === ul.children[i].innerHTML.split('<strong')[0]){
			return true;
		};
	};

	return false;
};


$('.pubtype-edt').keypress(function(e) {
    if (e.which === 13) {
        adicionaPubtype();
    }
    if (e.which === 13)
        e.preventDefault();
});

$('.adicionar-pubtype').click(function() {
    adicionaPubtype();
    $('.pubtype-edt').focus();
});


$('.adicionar-pubtype').focus(function() {
    $('.pubtype-edt').focus();
});

function adicionaPubtype(){
	var pubtype = document.getElementsByClassName('pubtype-edt')[0];
	var s_pubtype = pubtype.value;
	
	var err = document.getElementsByClassName('pubtype-erro')[0];
	err.style.display = 'none';

	if (s_pubtype.length <= 0) {
		err.style.display = 'inline';
		err.innerHTML = 'Tipo de publicação inválido';
		return;
	};

	if (existePubtype(s_pubtype)){
		err.style.display = 'inline';
		err.innerHTML = 'Tipo de publicação já adicionado';
		return;
	};

	pubtype.value = '';

	var ul = document.getElementsByClassName('pubtype-list')[0];
	var li = document.createElement('li');
        var input = document.createElement('input');
	var remover = document.createElement('strong');
	remover.innerHTML = '[remover]';
	remover.setAttribute('class','pubtype-remover');
        remover.setAttribute('onclick','removePubtype(this)');
	li.setAttribute('class','pubtype-item');
	li.innerHTML = s_pubtype;
	li.appendChild(remover);
        input.setAttribute('type', 'hidden');
        input.setAttribute('name', 'nomePubtype');
        input.setAttribute('value', s_pubtype);
	ul.appendChild(li);
        li.appendChild(input);

	var nenhum = document.getElementsByClassName('pubtype-nenhum')[0];
	nenhum.style.display = 'none';
};

function removePubtype(e){
	var li = e.parentNode;
	var ul = li.parentNode;
	li.parentNode.removeChild(li);

	if (ul.childElementCount <= 0){
		var nenhum = document.getElementsByClassName('pubtype-nenhum')[0];
		nenhum.style.display = 'block';
	};
};

function existePubtype(pubtype){
	var ul = document.getElementsByClassName('pubtype-list')[0];
	var len = ul.childElementCount;
	for (var i = 0; i < len; i++) {
		if (pubtype === ul.children[i].innerHTML.split('<strong')[0]){
			return true;
		};
	};

	return false;
};

$('#adicionar-autor').click(function() {
    adicionaAutor();
    $('#forename').focus();
});

$('#adicionar-autor').focus(function() {
    $('.keyword-edt').focus();
});

function adicionaAutor(){
    var autorFName = $('#forename');
    var autorLName = $('#lastname');
    var autorIName = $('#initialsname');
    var FName = autorFName.val();
    var SName = autorLName.val();
    var IName = autorIName.val();

    var err = document.getElementsByClassName('autor-erro')[0];
    err.style.display = 'none';

    if (FName.length <= 0 || SName.length <=0 || IName.length <= 0) {
            autorFName.css('box-shadow', '0px 0px 1px 1px #FF3300');
            autorLName.css('box-shadow', '0px 0px 1px 1px #FF3300');
            autorIName.css('box-shadow', '0px 0px 1px 1px #FF3300');
            $('.control-authors').html('Por Favor, preencha todos os campos');
            $('.ccontrol-authors').removeClass('ok').addClass( 'error', 300 );
            return;
    } else {
        if (FName.length > 0 || SName.length > 0 || IName.length > 0) {
            autorFName.css('box-shadow', '0px 0px 0px 0px #999999');
            autorLName.css('box-shadow', '0px 0px 0px 0px #999999');
            autorIName.css('box-shadow', '0px 0px 0px 0px #999999');
            $('.control-authors').html('');
            $('.control-authors').removeClass('error').addClass( 'ok', 300 );
        };
    }

    
    
    if (FName.match(/[0-9]/) !== null || SName.match(/[0-9]/) !== null || IName.match(/[0-9]/) !== null) {
            autorFName.css('box-shadow', '0px 0px 1px 1px #FF3300');
            autorLName.css('box-shadow', '0px 0px 1px 1px #FF3300');
            autorIName.css('box-shadow', '0px 0px 1px 1px #FF3300');
            $('.control-authors').html('Os campos não devem conter números');
            $('.control-authors').removeClass('ok').addClass( 'error', 300 );
            return;
    } else {
        autorFName.css('box-shadow', '0px 0px 0px 0px #999999');
        autorLName.css('box-shadow', '0px 0px 0px 0px #999999');
        autorIName.css('box-shadow', '0px 0px 0px 0px #999999');
        $('.control-authors').html('');
        $('.control-authors').removeClass('error').addClass( 'ok', 300 );
    };
    
    if (existeAutor(FName, SName, IName)){
        autorFName.css('box-shadow', '0px 0px 1px 1px #FF3300');
        autorLName.css('box-shadow', '0px 0px 1px 1px #FF3300');
        autorIName.css('box-shadow', '0px 0px 1px 1px #FF3300');
        $('.control-authors').html('Este autor já foi adicionado');
        $('.control-authors').removeClass('ok').addClass( 'error', 300 );
            return;
    };

    autorFName.val('');
    autorLName.val('');
    autorIName.val('');

    var ul = document.getElementsByClassName('selecionados-list')[0];
    var li = document.createElement('li');
    var inputFName = document.createElement('input');
    var inputLName = document.createElement('input');
    var inputIName = document.createElement('input');

    var remover = document.createElement('strong');
    remover.innerHTML = '[remover]';
    remover.setAttribute('class','chemical-remover');
    remover.setAttribute('onclick','removeAutor(this)');
    li.setAttribute('class','author-item');
    li.innerHTML = FName + " " + SName + " (" + IName + ")";
    li.appendChild(remover);
    inputFName.setAttribute('type', 'hidden');
    inputFName.setAttribute('name', 'Iforename');
    inputFName.setAttribute('value', FName);
    inputLName.setAttribute('type', 'hidden');
    inputLName.setAttribute('name', 'Ilastname');
    inputLName.setAttribute('value', SName);
    inputIName.setAttribute('type', 'hidden');
    inputIName.setAttribute('name', 'Iinitialsname');
    inputIName.setAttribute('value', IName);
    ul.appendChild(li);
    li.appendChild(inputFName);
    li.appendChild(inputLName);
    li.appendChild(inputIName);
    var nenhum = document.getElementsByClassName('autor-nenhum')[0];
    nenhum.style.display = 'none';
};

function existeAutor(FName, SName, IName){
    var author = FName + " " + SName + " (" + IName + ")";
    var ul = document.getElementsByClassName('selecionados-list')[0];
    var len = ul.childElementCount;
    for (var i = 0; i < len; i++) {
            if (author === ul.children[i].innerHTML.split('<strong')[0]){
                    return true;
            };
    };

    return false;
};

function removeAutor(e){
    var li = e.parentNode;
	var ul = li.parentNode;
	li.parentNode.removeChild(li);

	if (ul.childElementCount <= 0){
		var nenhum = document.getElementsByClassName('autor-nenhum')[0];
		nenhum.style.display = 'block';
	};
}