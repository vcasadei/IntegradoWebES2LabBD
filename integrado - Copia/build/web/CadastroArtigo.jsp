<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">

        <link href='http://fonts.googleapis.com/css?family=Lato' rel='stylesheet' type='text/css'>
        <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>

        <link rel="stylesheet" href="css/normalize.min.css">
        <link rel="stylesheet" href="css/main.css">
        <link rel="stylesheet" href="css/cadastro_artigo.css">
        <link rel="stylesheet" href="css/autocomplete.css">

        <script src="js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"></script>
    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
        <![endif]-->

        <div class="header-container">
            <header class="wrapper clearfix">
                <h1 class="title"></h1>
                <nav>
                    <ul>
                        <li><a href="index.jsp">In�cio</a></li>
                        <li><a href="Login.jsp">Login</a></li>
                    </ul>
                </nav>
            </header>
        </div>

        <div class="main-container">
            <div class="main wrapper clearfix">
                <div class="cadastro-box">
                    <div class="separator separator3"><a href="index.jsp">In�cio</a> -> <a>Cadastrar</a> -> <a href="CadastroArtigo.jsp">Cadastrar Artigo</a></div>
                    <h2>Cadastrar Artigo</h2>
                    <p> * - Obrigat�rio </p>
                    <form class="form-cadastro" action="CadastrarArtigo" method="POST">
                        <div class="separator separator1">Informa��es Gerais</div>
                        <p class="line-field">
                            <label class="label-s" for="titulo">*T�tulo: </label>
                            <input class="text-s" type="text" name="titulo" required/>
                        </p>
                        <p class="side-fields">
                            <label class="label-s" for="articleId">*ID do Artigo: </label>
                            <input class="text-inline" type="text" name="articleId" required/>
                            <label class="label-s label-right" for="data">Data de Publica��o: </label>
                            <input class="date-field text-right" type="date" name="data"/>
                        </p>
                        <p class="side-fields">
                            <label class="label-s" for="articleId">*Status da Publica��o: </label>
                            <select class="status-combobox">
                                <option value="apublish">ppublish</option>
                                <option value="epublish">epublish</option>
                                <option value="aheadofprint">aheadofprint</option>
                            </select>
                            <label class="label-s label-right" for="affiliation">Afilia��o: </label>
                            <input class="text-inline text-right" type="text" name="affiliation"/>
                        </p>
                        <p class="resumo-field">
                            <label class="label-s" for="resumo">*Resumo: </label>
                            <textarea class="resumo" rows="6" cols="90" name="resumo"></textarea>
                        </p>
                        <div class="separator separator2">Informa��es sobre a Revista</div>
                        <div id="form-alt-journal">
                            <p class="side-fields">
                                <label class="label-s" for="nlmuniqueid">NLM (ID �nico): </label>
                                <input class="text-inline nlm-edt" data-provide="typeahead" type="text" name="nlmuniqueid" id="nlmuniqueid" placeholder="Busque pelo ID" required/>
                                <input type="text" class="noClickSubmit pesquisar-nlm"/>
                                <label class="label-s label-right" for="issn">ISSN: </label>
                                <input class="text-right issn-edt" data-provide="typeahead" type="text" name="issn" id="issn" placeholder="Busque pelo ISSN" required/>
                                <input type="text" class="noClickSubmit pesquisar-issn"/>
                            </p>
                            <p class="line-field">
                                <label class="label-s" for="journalTitle">T�tulo da Revista: </label>
                                <input class="text-s journal" data-provide="typeahead" type="text" name="journalTitle" id="journalTitle" placeholder="Busque pelo t�tulo"/>
                                <input type="text" class="noClickSubmit pesquisar-title"/>
                            </p>
                        </div>
                        <p class="side-fields">
                            <label class="label-s" for="aberviation">Abrevia��o: </label>
                            <input class="text-inline abreviation-title-edt" type="text" name="abreviation" disabled/>
                        </p>
                        <p class="side-fields">
                            <label class="label-s" for="pagination">Pagina��o: </label>
                            <input class="text-inline" type="text" name="pagination" size="10" disabled/>
                            <label class="label-s label-right" for="volume">Volume: </label>
                            <input class="text-inline" type="text" name="volume" size="10" disabled/>
                            <label class="label-s label-right" for="issue">Issue: </label>
                            <input class="text-inline" type="text" name="issue" size="10" disabled/>
                        </p>
                        <p></p>
                        <!-- Tem que colocar isso em um js depois, pra aparecer quando o journal n�o existir-->
                        <label class="label-s label-right" style="color: red">
                            Journal inexistente, por favor informe os demais campos para cadastrar um novo
                        </label>
                        <!-- Tem que colocar isso em um js depois, pra aparecer quando o journal n�o existir-->
                        <div class="separator separator2">Autores</div>
                        <p class="line-field no-bottom-margin">
                        <table class="autor-table">
                            <tr class="tr-labels">
                                <td></td>
                                <td>Nome</td>
                                <td>Sobrenome</td>
                                <td>Iniciais</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>
                                    <label class="label-s" for="autor-busca">Pesquise por Autores: </label>
                                </td>
                                <td>
                                    <input class="" size="13" data-provide="typeahead" type="text" name="autor-busca" id="forename"/>
                                </td>
                                <td>
                                    <input class="" data-provide="typeahead" type="text" size="13" name="autor-busca" id="lastname"/>    
                                </td>
                                <td>
                                    <input class="" data-provide="typeahead" type="text" size="7" name="autor-busca" id="initialsname"/>
                                </td>
                                <td>
                                    <input type="text" class="noClickSubmit adicionar-autor" />
                                </td>
                            </tr>
                        </table>
                        <div class="autor-box">
                            <p class="no-bottom-margin autores-selecionados">
                                <strong>*Autores Selecionados:</strong>
                            </p>
                            <p class="no-top-margin autor-nenhum selecionado-nenhum">
                                Nenhum Autor adicionado (Utilize os controles acima para adicionar autores)
                            </p>
                            <ul class="selecionados-list">
                            </ul>

                        </div>
                        <div class="separator separator2">Palavras-chave</div>
                        <div class="keyword-box">
                            <p class="no-bottom-margin">
                                <label class="label-s label-right" for="keyword">Palavra-chave: </label>
                            </p>
                            <p class="no-top-margin new-line-edt">
                                <input class="text-inline keyword-edt" data-provide="typeahead" type="text" name="keyword" id="keyword"/>
                                <input type="text" class="noClickSubmit adicionar-keyword"/>
                                <strong class='keyword-erro'></strong> 
                            </p>
                            <p class="keyword-nenhum">
                                Nenhuma Palavra-chave adicionada (Utilize os controles acima para adicionar uma nova palavra-chave)
                            </p>
                            <ul class="keyword-list">
                            </ul>
                        </div>
                        <div class="separator separator2">Termos Mesh</div>
                        <div class="mesh-box">
                            <p class="no-bottom-margin">
                                <label class="label-s label-right" for="mesh">Termo Mesh: </label>
                            </p>
                            <p class="no-top-margin new-line-edt">
                                <input class="text-inline mesh-edt" data-provide="typeahead" type="text" name="mesh" id="mesh"/>
                                <input type="text" class="noClickSubmit adicionar-mesh"/>
                                <strong class='mesh-erro'></strong>
                            </p>
                            <p class="mesh-nenhum">
                                Nenhum Termo Mesh adicionado (Utilize os controles acima para adicionar um novo termo mesh)
                            </p>
                            <ul class="mesh-list">
                            </ul>
                        </div>
                        <div class="separator separator2">Subst�ncias Qu�micas</div>
                        <div class="chemical-box">
                            <p class="no-bottom-margin">
                                <label class="label-s label-right" for="chemical">Subst�ncia Qu�mica: </label>
                            </p>
                            <p class="no-top-margin new-line-edt">
                                <input class="text-inline chemical-edt" data-provide="typeahead" type="text" name="chemical" id="chemical"/>
                                <input type="text" class="noClickSubmit adicionar-chemical"/>
                                <strong class='chemical-erro'></strong>
                            </p>
                            <p class="chemical-nenhum">
                                Nenhuma Subst�ncia Qu�mica adicionada (Utilize os controles acima para adicionar uma nova subst�ncia)
                            </p>
                            <ul class="chemical-list">
                            </ul>
                        </div>
                        <div class="separator separator2">Tipo de Publica��o</div>
                        <div class="pubtype-box">
                            <p class="no-bottom-margin">
                                <label class="label-s label-right" for="pubtype">Tipos de Publica��o: </label>
                            </p>
                            <p class="no-top-margin new-line-edt">
                                <input class="text-inline pubtype-edt" data-provide="typeahead" type="text" name="pubtype" id="pubtype"/>
                                <input type="text" class="noClickSubmit adicionar-pubtype"/>
                                <strong class='pubtype-erro'></strong>
                            </p>    
                            <p class="pubtype-nenhum">
                                Nenhum Tipo de Publica��o adicionado (Utilize os controles acima para adicionar um novo tipo)
                            </p>
                            <ul class="pubtype-list">
                            </ul>
                            <div class="separator separator2"></div>
                        </div>
                        <div class="btn-cadastrar-box">
                            <input type="submit" class="btn-cadastrar" value="Cadastrar">
                        </div>
                    </form>
                </div>
                <div class="voltar-box">
                    <a href="index.html" class="voltar-link">
                        Voltar para a p�gina de pesquisa
                    </a>
                </div>
            </div> <!-- #main -->
        </div> <!-- #main-container -->

        <div class="footer-container">
            <footer class="wrapper">
                <h3>Copy 2013 forArticle - Forward your research!</h3>
            </footer>
        </div>


        <script src="./js/jquery-1.9.1.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.9.1.min.js"><\/script>')</script>

        <script src="js/main.js"></script>
        <script src="js/teste.js"></script>
        <script src="js/search-author.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/autocomplete.js"></script>
        <script src="js/buscarJournal.js"></script>

        <script>
            $(document).ready(function() {
            });
        </script>
    </body>
</html>