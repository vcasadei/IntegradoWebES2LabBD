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
        <link rel="stylesheet" href="css/cadastroUsuario.css">

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
                        <li><a href="">Cadastrar</a></li>
                    </ul>
                </nav>
            </header>
        </div>
        <div class="login">
            <%
                session = request.getSession(false);
                if (session.getAttribute("username") != null) {
            %>
            <p >Voc� est� logado como <%= session.getAttribute("username") %></p>
            <%                }
            %>
        </div>
        <div class="main-container">
            <div class="main wrapper clearfix">
                <div class="cadastro-user-box">
                    <div class="separator separator3"><a href="index.jsp">Inicio</a> -> <a>Cadastrar</a> -> <a href="alterarUsuario.html">Alterar Usu�rio</a></div>
                    <h2>Alterar Tipo Usus�rio</h2>
                    <form class="cadastra-usuario-form">

                        <p class="side-fields">

                            <label for="username-edt">Login:</label>
                            <input type="text" id="username-edt" class="username-edt noEnterSubmit" autocomplete="off" placeholder=""/>
                            <input type="text" class="noClickSubmit pesquisar-login"/>
                        <div id="msg"></div>

                        <label for="user-type-edt">Tipo de Usu�rio:</label>
                        <select name="user-type-edt" id="user-type-edt" class="user-type-edt noEnterSubmit" disabled>
                            <option value="administrador">Administrador</option>
                            <option value="pesquisador">Pesquisador</option>
                        </select>
                        <br>
                        <div class="btn-cadastrar-box">
                            <input type="button" class="btn-alterarTipo" value="Alterar">
                        </div>
                    </form>
                </div>
            </div> 
        </div> 

        <!-- Rodap� -->
        <div class="footer-container">
            <footer class="wrapper">
                <h3>� 2013 forArticle - Forward your research!</h3>
            </footer>
        </div>

        <script src="./js/jquery-1.9.1.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.9.1.min.js"><\/script>')</script> 

        <script src="./js/pesquisa-home.js"></script>
         <script src="./js/alterarUsuario.js"></script>
    </body>
</html>
