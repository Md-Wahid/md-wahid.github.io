<!DOCTYPE html>
<html lang="en">
<body>
    <?php
    session_start();
    $uname=$_POST['uname'];
    $upass=$_POST['upass'];
    $_SESSION['uname'] = $uname;
    $_SESSION['upass'] = $upass;

    if(isset($_SESSION['uname']) && $_SESSION['uname'] == 'user' && isset($_SESSION['upass']) && $_SESSION['upass'] == 'user'){
        echo 'Welcom Mr. '.$_SESSION['uname'].' here. Your succesfully loged in. ';
        $_SESSION['logedin'] = $POST['uname'];
        header('location: index.html');
    }
    else if($_SESSION['uname'] != 'user'){
        echo 'Error: Wrong user name';
        header('location: login.html');
    }
    else if($_SESSION['upass'] != 'user'){
        echo 'Error: Wrong user password';
        header('location: login.html');
    }
    ?>
</body>
</html>