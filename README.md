<!DOCTYPE html>
<html lang="en-US" >
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title> Sawsan </title>
<link rel="stylesheet"  type="text/css" href="style.css">
<style>

.c{
  text-align: left; 
}
.responsive {
  max-width: 100%;
  height: auto;
}
div.example {
  
  padding: 20px;
}

</style>
</head>
<body>
<p style="font-size:2vw;" class="c">
  <a >
    <button type="button" onclick="myFunction2()">“Print Sawsan’s Resume“</button>
    </a>
</p>
<div class="example">

<h1 onclick="myFunction()" style="font-size:7vw;">Sawsan Mohamed Kabaha</h1>

<p1 style="font-size:5vw;"> <br/> Bachelor of Science in Computer Science | An-Najah National University, Nablus
2018–2022</p1>

<p style="font-size:5vw;">
<a href="https://twitter.com/_sawsanmohamed">My Twitter </a>
</p>

<img  src="https://raw.githubusercontent.com/sawsanmohamed/sawsanmohamed.github.io/main/sawsan.jpg"
 alt="me" class="responsive" style= "max-width:100%; height:auto;">
<div1 id="div1" >
<p    style="font-size:5vw;"> My education background: </p>
<ul>
  <li>An-Najah National University | Nablus,
  B.A in Computer Science | 2018-2022</li>
 <li> Bartaa high school | Computer Science </li>
</ul>
</div1>
<p  id ="div2" style="font-size:5vw;" style="color:black;" onmouseover="htext()" onmouseout="stext()" > My work experiences:</p>
<ul>
  <li>Cashier at Zara | Haifa </li>
  <li>Cashier at Fox Home </li>
</ul>

<p style="font-size:5vw;">A list of my hobbies:</p>
<ul> 
 <li>Playing sports(tennis,basketball)</li>
     <li>Travelling</li>
     <li>Cooking</li>
	 <li>horse riding</li>
</ul>
</div>
<script>
  function myFunction() {
  window.alert('Welcome to Sawsan Mohamed site, please let me know if you have any questions');
  }
  </script>

<script>
    function stext() {
        var x = document.getElementById("div1");
        var y = document.getElementById("div2");
        x.style.color = 'black';
        y.style.color = 'black';
    }
    function htext() {
        var x = document.getElementById("div1");
        var y = document.getElementById("div2");
        x.style.color = 'green';
        y.style.color = 'black';
    }
	function myFunction2() {
    window.print();
}

  </script>
  

</body>
</html>
