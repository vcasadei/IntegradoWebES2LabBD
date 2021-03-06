<%-- 
    Document   : alterarArtigo
    Created on : Jun 18, 2013, 4:17:43 PM
    Author     : Vitor Casadei
--%>

<%@page import="Bean.Article"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
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
                        <li><a href="CadastroArtigo.html">Cadastrar</a></li>
                    </ul>
                </nav>
            </header>
        </div>
        <div class="login">
            <%
                session = request.getSession(false);
                if (session.getAttribute("username") != null) {
            %>
            <p >Você está logado como <%= session.getAttribute("username") %></p>
            <%                }
            %>
        </div>
        <div class="main-container">
            <div class="main wrapper clearfix">
                <div class="cadastro-box">
                    <div class="separator separator3"><a href="index.html">Inicio</a> -> <a href="#">Resultados</a> -> <a>Artigo</a> <a href="AlterarArtigo.jsp">Alterar Artigo</a></div>
                    <h2>Alterar Artigo</h2>

                    <form class="form-cadastro" action="AlterarArtigo" method="POST">
                        <div class="separator separator1">Informações Gerais</div>
                        <%
                            Article objArticleBean = (Article) request.getAttribute("artigoBean");
                            if (objArticleBean != null) {
                                int cont, tam;

                        %>
                        <div class="control-titulo ok"></div>
                        <p class="line-field">
                            <label id="title-label" class="label-s" for="titulo">Título: </label>
                            <input id="title-article" class="text-s" type="text" name="titulo" value="<%= objArticleBean.getTitle()%>"/>
                        </p>
                        <p class="side-fields">
                            <div class="control-id-article ok"></div>
                            <label id="id-article-label" class="label-s" for="articleId">ID do Artigo: </label>
                            <input id="id-article" class="text-inline" type="text" name="articleId" readonly value="<%= objArticleBean.getArticleID()%>"/>
                            <label class="label-s label-right" for="data">Data de Publicação: </label>

                            <input class="date-field text-right" type="text" name="data" value="<%= objArticleBean.getArticleDate()%>"/>
                        </p>
                        <p class="side-fields">
                            <label class="label-s" for="articleId">Status da Publicação: </label>
                            <select class="status-combobox">
                                <%
                                    String aux = objArticleBean.getPublicationStatus();
                                    if (aux == "ppublish") {

                                %>
                                <option value="ppublish" selected>ppublish</option>
                                <option value="epublish">epublish</option>
                                <option value="aheadofprint">aheadofprint</option>
                                <%                                        } else {
                                    if (aux == "epublish") {
                                %>
                                <option value="ppublish">ppublish</option>
                                <option value="epublish" selected>epublish</option>
                                <option value="aheadofprint">aheadofprint</option>
                                <%                                                } else {
                                %>
                                <option value="ppublish">ppublish</option>
                                <option value="epublish">epublish</option>
                                <option value="aheadofprint" selected>aheadofprint</option>
                                <%                                                        }
                                    }
                                %>

                            </select>
                            <label class="label-s label-right" for="affiliation">Afiliação: </label>
                            <input class="text-inline text-right" type="text" name="affiliation" value="<%= objArticleBean.getAffiliation()%>"/>
                        </p>
                        <p class="resumo-field">
                            <div class="control-abstract ok"></div>
                            <label id="resumo-label" class="label-s" for="resumo">Resumo: </label>
                            <textarea id="abstract-article" class="resumo" rows="6" cols="90" name="resumo"><%= objArticleBean.getResumo()%></textarea>
                        </p>
                        <div class="separator separator2">Informações sobre a Revista</div>
                        <p class="side-fields">
                            <div class="control-journal-general ok"></div>
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
                                        <input class="text-inline nlm-edt" type="text" name="nlmuniqueid" id="nlmuniqueid" <%= objArticleBean.getJournal().getNlmUniqueID()%>/>
                                        <input type="text" id="pesquisar-nlm" class="noClickSubmit pesquisar-nlm"/>
                                    </td>
                                    <td>
                                        <div class="control-issn-journal ok"></div>
                                        <label id="issn-label" class="label-s label-right" for="issn">ISSN: </label>
                                        <input class="text-right issn-edt" type="text" id="issn" name="issn" value="<%= objArticleBean.getJournal().getISSN()%>" />
                                        <input id="pesquisar-issn" type="text" class="noClickSubmit pesquisar-issn"/>
                                    </td>
                                </tr>
                            </table>
                            
                            
                        </p>
                        <p class="line-field">
                            <div class="control-journal-title ok"></div>
                            <label id="journal-title-label" class="label-s" for="journalTitle">Título da Revista: </label>
                            <input class="text-s journal" type="text" name="journalTitle" id="journalTitle" value="<%= objArticleBean.getJournal().getTitle()%>"/>
                            <input id="pesquisar-title" type="text" class="noClickSubmit pesquisar-title"/>
                        </p>
                        <p class="side-fields">
                            <label class="label-s" for="abreviation">Abreviação: </label>
                            <input class="text-inline abreviation-title-edt" type="text" name="abreviation" id="abreviation" value="<%= objArticleBean.getJournal().getAbreviation()%>"/>
                        </p>
                        <label class="label-s label-right" id="erro" style="color: red">
                             
                        </label>
                        <p class="side-fields">
                            <label class="label-s" for="pagination">Paginação: </label>
                            <input class="text-inline" type="text" id="pagination" name="pagination" size="10" value="<%= objArticleBean.getPagination()%>"/>
                            <label class="label-s label-right" for="volume">Volume: </label>
                            <input class="text-inline" type="text" id="volume" name="volume" size="10" value="<%= objArticleBean.getVolume()%>"/>
                            <label class="label-s label-right" for="issue">Issue: </label>
                            <input class="text-inline" type="text" id="issue" name="issue" size="10" value="<%= objArticleBean.getIssue()%>"/>
                        </p>
                        <div class="separator separator2">Autores</div>
                        <p class="line-field no-bottom-margin">
                            
                        <div class="control-author-name ok"></div>
                        <div class="control-author-lastname ok"></div>
                        <div class="control-author-initials ok"></div>
                        
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
                        <div class="control-authors ok"></div>
                        <div class="autor-box">
                            <p class="no-bottom-margin autores-selecionados">
                                <strong>*Autores Selecionados:</strong>
                            </p>
                            <%
                                if (objArticleBean.getAutores().isEmpty()) {
                            %>
                            <p class="no-top-margin autor-nenhum selecionado-nenhum">
                                Nenhum Autor adicionado (Utilize os controles acima para adicionar autores)
                            </p>
                            <% 
                                } else {
                            %>
                            <ul class="selecionados-list">
                                <%
                                    cont = 0;
                                    tam = objArticleBean.getAutores().size();
                                    while (cont < tam) {

                                %>
                                <li class="author-item"></li>
                                <%
                                        cont++;
                                    }
                                %>
                            </ul>
                            <%
                                }
                            %>

                        </div>
                        <div class="separator separator2">Palavras-chave</div>
                        <div class="keyword-box">
                            <p class="no-bottom-margin">
                                <label class="label-s label-right" for="keyword">Palavra-chave: </label>
                            </p>
                            <p class="no-top-margin new-line-edt">
                                <input class="text-inline keyword-edt" type="text" name="keyword"/>
                                <input type="text" class="noClickSubmit adicionar-keyword"/>
                                <strong class='keyword-erro'></strong> 
                            </p>
                            <%
                                if (objArticleBean.getKeyWord().isEmpty()) {
                            %>
                            <p class="keyword-nenhum">
                                Nenhuma Palavra-chave adicionada (Utilize os controles acima para adicionar uma nova palavra-chave)
                            </p>
                            <% 
                                } else {
                            %>
                            <ul class="keyword-list">
                                <%
                                    cont = 0;
                                    tam = objArticleBean.getKeyWord().size();
                                    while (cont < tam) {

                                %>
                                <li class="keyword-item"><%= objArticleBean.getKeyWord().get(cont)%><strong class="keyword-remover" onclick="removeKeyword(this)">[remover]</strong></li>
                                    <%
                                            cont++;
                                        }
                                    %>

                            </ul>
                            <%
                                }
                            %>
                        </div>
                        <div class="separator separator2">Termos Mesh</div>
                        <div class="mesh-box">
                            <p class="no-bottom-margin">
                                <label class="label-s label-right" for="mesh">Termo Mesh: </label>
                            </p>
                            <p class="no-top-margin new-line-edt">
                                <input class="text-inline mesh-edt" type="text" name="mesh"/>
                                <input type="text" class="noClickSubmit adicionar-mesh"/>
                                <strong class='mesh-erro'></strong>
                            </p>
                            <%
                                if (objArticleBean.getMeshHeading().isEmpty()) {
                            %>
                            <p class="mesh-nenhum">
                                Nenhum Termo Mesh adicionado (Utilize os controles acima para adicionar um novo termo mesh)
                            </p>
                            <%                            } else {
                            %>
                            <ul class="mesh-list">
                                <%
                                    cont = 0;
                                    tam = objArticleBean.getMeshHeading().size();
                                    while (cont < tam) {

                                %>
                                <li class="mesh-item"><%= objArticleBean.getMeshHeading().get(cont)%><strong class="mesh-remover" onclick="removeMesh(this)">[remover]</strong></li>
                                    <%
                                            cont++;
                                        }
                                    %>
                            </ul>
                            <%
                                }
                            %>
                        </div>
                        <div class="separator separator2">Substâncias Químicas</div>
                        <div class="chemical-box">
                            <p class="no-bottom-margin">
                                <label class="label-s label-right" for="chemical">Substância Química: </label>
                            </p>
                            <p class="no-top-margin new-line-edt">
                                <input class="text-inline chemical-edt" type="text" name="chemical"/>
                                <input type="text" class="noClickSubmit adicionar-chemical"/>
                                <strong class='chemical-erro'></strong>
                            </p>
                            <%
                                if (objArticleBean.getChemical().isEmpty()) {
                            %>
                            <p class="chemical-nenhum">
                                Nenhuma Substância Química adicionada (Utilize os controles acima para adicionar uma nova substância)
                            </p>
                            <%                            } else {
                            %>
                            <ul class="chemical-list">
                                <%
                                    cont = 0;
                                    tam = objArticleBean.getChemical().size();
                                    while (cont < tam) {

                                %>
                                <li class="mesh-item"><%= objArticleBean.getMeshHeading().get(cont)%><strong class="mesh-remover" onclick="removeMesh(this)">[remover]</strong></li>
                                    <%
                                            cont++;
                                        }
                                    %>
                            </ul>
                            <%
                                }
                            %>
                        </div>
                        <div class="separator separator2">Tipo de Publicação</div>
                        <div class="pubtype-box">
                            <p class="no-bottom-margin">
                                <label class="label-s label-right" for="pubtype">Tipos de Publicação: </label>
                            </p>
                            <p class="no-top-margin new-line-edt">
                                <input class="text-inline pubtype-edt" type="text" name="pubtype"/>
                                <input type="text" class="noClickSubmit adicionar-pubtype"/>
                                <strong class='pubtype-erro'></strong>
                            </p>
                            <%
                                if (objArticleBean.getPublicationType().isEmpty()) {
                            %>
                            <p class="pubtype-nenhum">
                                Nenhum Tipo de Publicação adicionado (Utilize os controles acima para adicionar um novo tipo)
                            </p>
                            <%                            } else {
                            %>
                            <ul class="pubtype-list">
                                <%
                                    cont = 0;
                                    tam = objArticleBean.getPublicationType().size();
                                    while (cont < tam) {

                                %>
                                <li class="pubtype-item"><%= objArticleBean.getPublicationType().get(cont)%><strong class="pubtype-remover" onclick="removePubtype(this)">[remover]</strong></li>
                                    <%
                                            cont++;
                                        }
                                    %>
                            </ul>
                            <%
                                }
                            %>
                            <div class="separator separator2"></div>
                        </div>

                        <%
                            }
                        %>

                        <div class="control-cadastro ok"></div>
                        <div class="btn-cadastrar-box">
                            <input type="button" class="btn-cadastrar" value="Alterar">
                        </div>
                        <!-- <div class="btn-cadastrar">
                            Cadastrar
                        </div> -->
                    </form>
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
        <script charset="utf-8" src="js/add-properties.js"></script>
        <script charset="utf-8" src="js/search-author.js"></script>
        <script charset="utf-8" src="js/bootstrap.min.js"></script>
        <script charset="utf-8" src="js/autocomplete.js"></script>
        <script charset="utf-8" src="js/buscarJournal.js"></script>
        
        <script charset="utf-8" src="js/alterar-artigo-validation.js"></script>
        <script charset="utf-8" src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
    </body>
</html>

