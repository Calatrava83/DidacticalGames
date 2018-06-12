

<?php

error_reporting(E_ALL & ~E_NOTICE & ~E_WARNING);


if (isset($_POST['logoutQUIZ'])) {
    include './html.php';
} else if (isset($_POST['logoutAHORCADO'])) {
    include './html.php';
} else if (isset($_POST['logout'])) {
    include './html.php';
} else  if ($_SESSION) {
    include 'user/index.php';
} else {
    include './html.php';
}
?>
