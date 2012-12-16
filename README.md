dblclk2edit
===========

dblclk2edit jquery inline editor plugin 

Version: 201212.1

Copyright (c) 2012 Dima Tsvetkov

Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php

I came to the situation, that many of other inline editors annoys me by saving and closing editors if I accidentally click somewhere else or if I want to keep editor open while pasting text multiple times. So I created own solution of inline/in place editor. Just doubleclick on editable text to edit it and doubleklick it again to save!


HOW TO USE?

  Download using Save link as.. or wget and add <script src="jquery.dblclk2edit.min.js"></script> after jquery.js
  Then activate text you want to be editable.

  HTML:

    <div id="editabletext">You can edit me</div>
  		

  JavaScript:

    $(document).ready(function() {
  
      $('#editabletext').dblclk2edit({
        'postTo'    : 'save.php',
        'postIdVal' : 'auto',
        'textarea'  : false,
        'nicEdit'   : false,
        'savingTxt' : 'saving...'
      });
    
    });
	
  'postTo' : 'save.php' file to send data via POST, default is 'save.php'
  'postIdVal' : 'auto' you can set your own identification value here, by default it uses text holder's id like #editabletext. Default is 'auto'
  'textarea' : false activate textarea by setting it to true, by default it uses input box
  'nicEdit' : false activate nicEdit editor by setting it to true
  'savingTxt' : 'saving...' set your own saving action text


  SAVE.PHP:

    <?php

    $id = $_POST['id'];
    $text = $_POST['text'];

    // checking against injections, saving to database and whatever else

    print "id: $id\n\ntext:\n$text";

    ?>
			

  See examples and demos: http://www.dima.fi/jquery/dblclk2edit/




