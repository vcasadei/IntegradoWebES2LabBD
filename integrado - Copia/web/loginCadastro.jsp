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
        <link rel="stylesheet" href="css/login.css">

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
                        <li><a href="index.html">In�cio</a></li>
                        <li><a href="Login.html">Login</a></li>
                        
                    </ul>
                </nav>
            </header>
        </div>

        <div class="main-container">
            <div class="main wrapper clearfix">
                <div class="login-box">
                    <div class="separator separator3"><a href="index.html">Inicio</a> -> <a href="CadastroUsuario.html">Cadastrar</a> -> <a href="Login.html">Login</a></div>
                    <h3 style="text-align: center">Cadastro realizado com suecesso, efetue login !</h3>
                    <form class="login-form" action="FazerLogin" method="POST">
                        <div class="separator separator2"></div>
                        
                        <p class="side-fields">
                        <div class="control-login ok"></div>
                            <label class="login-label" for="username-edt">Login:</label>
                        <input type="text" id="username-edt" name="username-edt" class="username-edt noEnterSubmit" placeholder=""/><br><br>
                        <label class="pass-label" for="password-edt">Senha:</label>
                        <input type="password" name="password-edt" id="password-edt" class="password-edt noEnterSubmit" placeholder=""/><br>
                        </p>
                        
                        
                        <div id="msg"></div>
                        <div class="btn-cadastrar-box">
                            <input type="text" id="btn-logar" class="btn-logar" value="Login">
                        </div>
                    </form>
                </div>
                    


            </div> <!-- #main -->
        </div> <!-- #main-container -->

        <div class="footer-container">
            <footer class="wrapper">
                <h3>� 2013 forArticle - Forward your research!</h3>
            </footer>
        </div>

        <script charset="utf-8" src="./js/jquery-1.9.1.min.js"></script>
        <script charset="utf-8" src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>
        <script charset="utf-8">window.jQuery || document.write('<script charset="utf-8" src="js/vendor/jquery-1.9.1.min.js"><\/script>')</script>
        <script charset="utf-8" src="./js/login-validation.js"></script>
    </body>
</html>
