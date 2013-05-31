<?php
if(!$_GET['term']){
    echo "Please add the search terms";
    exit;
}

$keyword = strip_tags($_GET['term']);

//now put everything in a html for the 
//js magic
?>
<html>
    <head>
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
        <script src="jquery.timeago.js"></script>
        <script src="postfunctions.js"></script>     
        <link rel="stylesheet" type="text/css" href="fbtheme.css">        
    </head>
    <body>
        <input type="hidden" id="keyword" value="<?php echo $keyword; ?>">
        <div id="header">
            <h1>facebook search</h1>
            <p>Looking for: <b><?php echo $keyword; ?></b> &middot; Refresh time 10sec</p>
        </div>
        <div id="postContainer">                      
        </div>
    </body>
</html>