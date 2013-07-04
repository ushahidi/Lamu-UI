<!DOCTYPE html>
<head>
<meta charset="utf-8">
<title>M8M Style Guide</title>
<link rel="stylesheet" href="../css/global.css">
<style>

body {
    width: 80%;
    margin: auto;
    padding-top: 50px;
}

.title {
    text-align: center;
    margin-bottom: 100px;
    border-bottom: 0px;
}

.pattern {
    clear: both;
    overflow: hidden;
}
.pattern .display {
    width: 65%;
    float: left;
}
.pattern .source {
    width: 30%;
    float: right;
}
.pattern .source textarea {
    width: 90%;
}
</style>
</head>
<body>

<h1 class="title">Ushahidi 3.0 Style Guide</h1>

<?php
$files = array();
$handle=opendir('patterns');
while (false !== ($file = readdir($handle))):
    if(stristr($file,'.html')):
        $files[] = $file;
    endif;
endwhile;
sort($files);
foreach ($files as $file):
    echo '<div class="pattern">';
    echo '<div class="display">';
    include('patterns/'.$file);
    echo '</div>';
    echo '<div class="source">';
    echo '<textarea rows="6" cols="30">';
    echo htmlspecialchars(file_get_contents('patterns/'.$file));
    echo '</textarea>';
    echo '<p><a href="patterns/'.$file.'">'.$file.'</a></p>';
    echo '</div>';
    echo '</div>';
endforeach;
?>

</body>
</html>
