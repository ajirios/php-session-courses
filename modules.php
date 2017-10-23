

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Jeverus | Bookmarking</title>
  <script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
  <link rel="stylesheet" type="text/css" href="shared/jeverus.css" media="screen" />

<style type="text/css">



</style>

</head>

<body>


  <header>


      <div class="head">
        
          <img class="bol" src="shared/jeverus.png" alt="bol">
        
            <nav>
                
                <ul>
                    <li><a href="signin.php" >Logout</a></li>
                    <li><a href="home.php" id="page">Home</a></li>
                </ul>
                    
            </nav>
        
      </div>
    
  </header>
    
    
    <div class="diverse">

        <div id="container">
    
    
	<?php
	
        $accountNumber = 0;
        $courseID = $_POST["course-id"];
        
        
        //Database connector variables
        $dbUrl = "athabasca.cq3n4fwskn4i.ca-central-1.rds.amazonaws.com:3306/athabasca";
        $dbUserName = "ajirios";
        $dbPassword = "Athabasca1126";
        
        
        //try connecting to database and retrieve account number first, where username and password exists..
        $query = "SELECT moduleNumber, moduleName FROM modules WHERE courseID=" . $courseID . " ORDER BY moduleNumber ASC";
        
        //Connect to database
        if (!($database = mysqli_connect("athabasca.cq3n4fwskn4i.ca-central-1.rds.amazonaws.com", "ajirios", "Athabasca1126", "athabasca")))
        
        {
            
            die("Could not connect to database </body></html>");
            
        }
        
        //query athabasca database
        if (!($result = mysqli_query($database, $query)))
        
        {
            
            die("Error in retrieving results </body></html>");
            
        }
        
        
        
        print("<br><br><br><h2>Modules</h2><br><ol>");
        
        
        
        while ($row = $result->fetch_assoc())
        
        {
            $moduleName = $row["moduleName"];
            $moduleNumber = $row["moduleNumber"];
            
            print("<li><a href=\"javascript:postSectionsForm(" . $courseID . ", " . $moduleNumber . ");\">" . $moduleName . "</a></li>");
            
            
        }
        
        
        //close database
        mysqli_close($database);
        
        
        print("</ol>");
        

        
        
        ?>





<form hidden id="sections-form" method="post" action="lesson.php">
<input type="text" id="course-id" name="course-id" value="" />
<input type="text" id="module-number" name="module-number" value="" />
<input type="text" value="Submit" />
</form>





    </div></div>



<script type="text/javascript">

function postSectionsForm(courseID, moduleNumber)

{
    document.getElementById("course-id").value = courseID;
    document.getElementById("module-number").value = moduleNumber;
    document.getElementById("sections-form").submit();
}


</script>




</body>
</html>



