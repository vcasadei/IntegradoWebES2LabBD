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
        <link rel="stylesheet" href="css/cadastroUsuario.css">
        <link rel="stylesheet" href="css/main.css">

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
                        <li><a href="index.jsp">Início</a></li>
                        <li><a href="Login.jsp">Login</a></li>
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
                <div class="cadastro-user-box">
                    <div class="separator separator3"><a href="index.jsp">Inicio</a> -> <a href="Login.jsp">Login</a> -> <a href="CadastroUsuario.jsp">Cadastrar Usuário</a></div>
                    <h2>Cadastrar Ususário</h2>
                    <form class="cadastra-usuario-form" action="CadastrarUsuarioComum" method="POST">
                        <div class="separator separator4">Todos os campos são obrigatórios</div>

                        <p class="side-fields">
                            <div class="control-username ok"></div>
                            <label class="username-label" for="username-edt">Login:</label>
                            <input type="text" name="username-edt" id="username-edt" class="username-edt noEnterSubmit" placeholder=""/><br><br>
                            <div  class="control-password ok"></div>
                            <label class="password-label" for="password-edt">Senha:</label>
                            <input type="password" name="password-edt" id="password-edt" class="password-edt noEnterSubmit" placeholder=""/><br><br>
                            <div  class="control-password-conf ok"></div>
                            <label class="passwordconf-label" for="password-conf-edt">Confirmação da Senha:</label>
                            <input type="password" name="password-conf-edt" id="password-conf-edt" class="password-conf-edt noEnterSubmit" placeholder=""/>
                            <br>

                        </p>
                        <div class="control-server ok"></div>
                        <div class="btn-cadastrar-box">
                            <input type="text" class="btn-cadastrar" id="btn-cadastrar" value="Cadastrar">
                        </div>
                    </form>

                </div>



            </div> <!-- #main -->
        </div> <!-- #main-container -->


        <div class="footer-container">
            <footer class="wrapper">
                <h3>© 2013 forArticle - Forward your research!</h3>
            </footer>
        </div>

        <script charset="utf-8" src="./js/jquery-1.9.1.min.js"></script>
        <script charset="utf-8" src="./js/registro-usuario-validation.js"></script>
        <script charset="utf-8" src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
        <script charset="utf-8">window.jQuery || document.write('<script charset="utf-8" src="js/vendor/jquery-1.9.1.min.js"><\/script>')</script>

    </body>
</html>
