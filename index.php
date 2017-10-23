

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Jeverus | e-Learning</title>
  <script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
  <link rel="stylesheet" type="text/css" href="shared/jeverus.css" media="screen" />
</head>

<body>
    
  
  <header>
      
    
      <div class="head">
        
          <a href="index.php"><img class="bol" src="shared/jeverus.png" alt="bol"></a>
        
            <nav>
                
                <ul>
                    <li><a href="register.php" >Register</a></li>
                    <li><a href="signin.php" >Sign In</a></li>
                </ul>
                    
            </nav>
        
      </div>
    
  </header>
    
    
    <div class="diverse">
    <div class="right">
        
            <div class="titles">
                
	 	<div class="createaccount"><h1>Welcome.</h1></div>
		<div class="createaccount"><h1>Create bookmarks and access all your favourite websites including:</h1></div>

		<ul>
					
    
	<?php
	
	
	
	//Database connector variables
	$dbUrl = "mysql://athabasca.cq3n4fwskn4i.ca-central-1.rds.amazonaws.com:3306/athabasca";
	$dbUserName = "ajirios";
	$dbPassword = "Athabasca1126";
	
	//Popular bookmark variables stored in an array
	$bookmarks = array(
	"Google Search" => "http://www.google.com", 
	"Bing" => "http://www.bing.com", 
	"YouTube" => "https://www.youtube.com", 
	"Facebook" => "https://www.facebook.com", 
	"Amazon" => "https://www.amazon.com", 
	"Twitter" => "https://twitter.com", 
	"Wikipedia" => "https://www.wikipedia.org", 
	"Flickr" => "https://flickr.com", 
	"Apple" => "http://apple.com", 
	"LinkedIn" => "http://linkedin.com");
	
	//print out all bookmarks elements
	foreach ($bookmarks as $element => $value)
	
	{
		print("<li class=\"createaccount\">$element</a></li>");
	}
	
	
?>
    
    
                </ul>
            
            </div>
            
            
    </div>
    <div id="sept2"></div>
    
        
        <script>
  
            var roller = $("#sept2");
            var backgrounds = ["url(shared/image11.jpg)", "url(shared/image10.jpg)", "url(shared/image6.jpg)"];
            var current = 0;
            
            function nextBackground() {
                current++;
                current = current % backgrounds.length;
                roller.css('background-image', backgrounds[current]);
            }

            setInterval(nextBackground, 3000);

            roller.css('background-image', backgrounds[0]);
  
        </script>
        
    </div>
    
    
  
    <div id="container">
        <div class="copyright"><h2><br>Here are ten popular bookmarks you may access on the fly.</h2><br>
            </div>
            
	
            
            <div class="seriediv">
                <div class="arch"></div>
                
                <?php
	
	$count = 0;
	
	//print out all bookmarks elements
	foreach ($bookmarks as $element => $value)
	
	{
		
			if ($count < 5) 
			
			{
                
                print("<a href=\"$value\" target=\"_blank\"><div class=\"counts\"><div class=\"number\">2</div><div class=\"content-type\">$element <br> bookmark</div></div></a>");
                
                $count++;
                
            }
               
	}
	
	
?>
                
            </div>
        	
            <div class="seriediv">
                <div class="arch"></div>
                
                  
                <?php
	
	$count = 0;
	
	//print out all bookmarks elements
	foreach ($bookmarks as $element => $value)
	
	{
		
			if (($count >= 5) && ($count < 10)) 
			
			{
                
                print("<a href=\"$value\" target=\"_blank\"><div class=\"counts\"><div class=\"number\">2</div><div class=\"content-type\">$element <br> bookmark</div></div></a>");
                
            }
            
            $count++;
               
	}
	
	
?>
                
            </div>

		

        
    </div>
  
  
  <footer>
    
      
    <div class="copyright">
        
        <div class="footnotes"><h4>Tutorials</h4>
          <a class="notes" href=""><p>Tutorial 1</p></a>
          <a class="notes" href=""><p>Tutorial 2</p></a>
          <a class="notes" href=""><p>Tutorial 3</p></a>
        </div>
      <div class="footnotes"><h4>Utilities</h4>
          <a class="notes" href=""><p>Mortgage Calculator</p></a>
          <a class="notes" href=""><p>Savings Estimator</p></a>
          <a class="notes" href=""><p>Measurement Converter</p></a>
      </div>
      <div class="footnotes"><h4>Parts</h4>
          <a class="notes" href=""><p>Part 1</p></a>
          <a class="notes" href=""><p>Part 2</p></a>
          <a class="notes" href=""><p>Part 3</p></a>
          <a class="notes" href=""><p>Part 4</p></a>
      </div>
      <div class="footnotes"><h4>External References</h4>
          <a class="notes" href=""><p>HTML5</p></a>
          <a class="notes" href=""><p>CSS3</p></a>
          <a class="notes" href=""><p>JavaScript</p></a>
          <a class="notes" href=""><p>JSON</p></a>
          <a class="notes" href=""><p>XML</p></a>
          <a class="notes" href=""><p>AJAX</p></a>
      </div>
      <div class="footnotes"><h4>Contact</h4>
          <a class="notes" href=""><p>Support</p></a>
          <a class="notes" href=""><p>Enquiries</p></a>
          <a class="notes" href=""><p>Jobs</p></a>
      </div>
        <hr>
        <p>&copy; 2017. Jeffrey Ajiri Osauzo. All Rights Reserved.</p>
        <p>Developed by @ajirios | Jeffrey Ajiri Osauzo.</p>
    </div>
    
    
  </footer>

</body>
</html>



