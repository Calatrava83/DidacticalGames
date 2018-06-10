<html>
    <head>

        <title>Login</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet">
        <link href="style.css" rel="stylesheet">
        <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    </head>
    <body id="LoginForm">
        <div class="container">
            <div class="login-form">
                <div class="main-div">
                    <div class="panel">
                        <h1>Login</h1>
                        <p>Por favor<br>introduce tu nombre de usuario y contraseña</p>
                    </div>
                    <form action="sesiones.php" id="Login" method="post" name="login">
                        <div class="form-group">
                            <input type="text" class="form-control" id="inputName" name="name" placeholder="Usuario">
                        </div>

                        <div class="form-group">
                            <input type="password" class="form-control" id="inputPassword" name="password" placeholder="Contraseña">
                        </div>
                        <div class="forgot">

                        </div>
                        <button type="submit" class="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

</body>
</html>