<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MY FILE</title>
</head>
<body>
 <h1>my first script</h1>  
 <script> 
 var hello = "Good Morning";
 console.log(hello);  
  var red = true;
  var blue = false;
  var green;
  var myNum = 5;
  var otherNum = 6;
  var notNum = "5";
  var myValue = notNum - myNum;
  if(myValue){
      console.log("the statement true");
  }
  else{
      console.log("the statement false");
  }
  var colors = ['red','blue', 'green', 'yellow'];
  var selectedcolor = colors[3];
  if(selectedcolor == 'red')
  {
      console.log("the color is red");
  }
  else if(selectedcolor == 'blue')
  {
      console.log("the color is blue");
  }
  if(selectedcolor == 'green')
  {
      console.log("the color is green");
  }
  else {
      console.log("the color is yellow");
  }
</Script> 
</body>
</html>
