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
        <link rel="stylesheet" href="css/alterar_journal.css">
        <link rel="stylesheet" href="css/autocomplete.css">

        <script charset="utf-8" src="js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"></script>
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
                        <li><a href="index.html">Início</a></li>
                        <li><a href="Login.html">Login</a></li>
                    </ul>
                </nav>
            </header>
        </div>
        <div class="login">
            <%
                session = request.getSession(false);
                if(session.getAttribute("username") != null){                    
            %>
                <p >Você está logado como <%= session.getAttribute("username") %></p>
            <%
                }                    
            %>
        </div>
        <div class="main-container">
            <div class="main wrapper clearfix">
                <div class="cadastro-box">
                    <div class="separator separator3"><a href="index.html">Inicio</a> -> <a>Alterar</a> -> <a href="alterarJournal.html">Alterar Journal</a></div>
                    
                    <h2>Alterar Journal</h2>
                    <form class="form-cadastro" action="AlterarJournalArticle" method="POST" id="form-alt-journal">
                        <div class="separator separator1">Informações sobre a Revista</div>
                        <p class="side-fields">
                            <p id="select-busca"><b>Pesquisar por:</b>
                                <input class="radios" type="radio" name="tipo" value="nlm" checked/>NLM
                                <input class="radios" type="radio" name="tipo" value="issn"/>ISSN
                                <input class="radios" type="radio" name="tipo" value="titulo"/>Título
                             </p>
                            <table class="id-nlm">
                                <tr>
                                    <td>
                                        <div class="control-nlm ok"></div>
                                        <label id="nlm-id-label" class="label-s" for="nlmuniqueid">NLM (ID único): </label>
                                        <input class="text-inline nlm-edt" data-provide="typeahead" type="text" name="nlmuniqueid" id="nlmuniqueid" placeholder="Busque pelo ID" autocomplete="off"/>
                                        <input id="pesquisar-nlm" type="text" class="noClickSubmit pesquisar-nlm"/>
                                    </td>

                                    <td>
                                        <div class="control-issn-journal ok"></div>
                                        <label id="issn-label" class="label-s label-right" for="issn">ISSN: </label>
                                        <input class="text-right issn-edt" type="text" data-provide="typeahead" name="issn" id="issn" placeholder="Busque pelo ISSN" autocomplete="off"/>
                                        <input id="pesquisar-issn" type="text" class="noClickSubmit pesquisar-issn"/>
                                    </td>

                                </tr>
                            </table>
                            
                            
                        </p>
                        <p class="line-field">
                            <div class="control-journal-title ok"></div>
                            <label id="journal-title-label" class="label-s" for="journalTitle">Título da Revista: </label>
                            <input class="text-s journal" data-provide="typeahead" type="text" autocomplete="off" name="journalTitle" id="journalTitle" value="" placeholder="Busque pelo Título" />
                            <input id="pesquisar-title" type="text" class="noClickSubmit pesquisar-title"/>
                        </p>
                        <p class="side-fields">
                            <label class="label-s" for="aberviation">Abreviação: </label>
                            <input class="text-inline abreviation-title-edt" type="text" id="abreviation" name="abreviation" disabled/>
                        </p>
                    </form>
                </div>
                <div class="control-altear-journal ok"></div>
                        <div class="btn-cadastrar-box">
                            <input type="submit" class="btn-cadastrar" value="Alterar">
                        </div>
                <div class="voltar-box">
                    <a href="index.html" class="voltar-link">
                        Voltar para a página de pesquisa
                    </a>
                </div>
            </div> <!-- #main -->
        </div> <!-- #main-container -->

        <div class="footer-container">
            <footer class="wrapper">
                <h3>© 2013 forArticle - Forward your research!</h3>
            </footer>
        </div>

        <script charset="utf-8" src="./js/jquery-1.9.1.min.js"></script>
        <script charset="utf-8">window.jQuery || document.write('<script charset="utf-8" src="js/vendor/jquery-1.9.1.min.js"><\/script>')</script>

        <script charset="utf-8" src="js/main.js"></script>
        <script charset="utf-8" src="js/bootstrap.min.js"></script>
        <script charset="utf-8" src="js/autocomplete.js"></script>
        <script charset="utf-8" src="js/buscarJournal.js"></script>
        <script charset="utf-8" src="js/alterar-journal-validation.js"></script>
        <script charset="utf-8" src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
    </body>
</html>
