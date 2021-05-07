<!DOCTYPE html>
<html lang="en">

<head>

  <style>
    /*   input:focus:valid  {
      outline: none !important;
      background-color: #ffffff;
     }  */
    /* input:not(:placeholder-shown) {
      background-color: #ffffff;
}*/
  </style>
</head>

<body>
  <h2>Internship Application</h2>


  <p>Please fill out the form below and hit submit to be considered for the internship</p>
  <form action="/action_page.php" name="from" onsubmit="return required()" method="post">
    <fieldset>
      <legend>Personalia:</legend>
      <label for="fname">First name:</label>
      <input onchange="myFunction( )" name="answerfname" class="textarea" type="text" id="fname" name="fname"><br>
      <label for="lname">Last name:</label>
      <input onchange="myFunction( )" name="answerlname" class="textarea" type="text" id="lname" name="lname"><br>
      <label for="url">Personal Website:</label>
      <input  onchange="myFunction( )"name="answerurl" type="url" id="url" pattern="https://.*" size="30"><br>
      <label for="phone">Enter your phone number:</label>

      <input onchange="myFunction( )" name="answerphone" type="tel" id="phone" name="phone" placeholder="123-45-678"><br>

      <label for="email">Enter your email:</label>

      <input  onchange="myFunction( )" name="answeremail" type="email" id="email" size="30">
      <br>
      Username: <input  onchange="myFunction( )"name="answeruser" type="text" name="user"><br>
      Password: <input  onchange="myFunction( )"name="answerpassword" type="password" name="password"><br>

    </fieldset>

    <form action="/action_page.php" method="post">
      <fieldset>
        <legend>Education</legend>
        <label for="Degre">Degree:</label>
        <input list="Degree" id="Degre"  onchange="myFunction( )"name="answerDegre" />
        <datalist id="Degree">
          <option value="Associate">
          <option value="Bachelo">
          <option value="Masters">
          <option value="Ph.D.">
          <option value="other">
        </datalist>
        <br>
        <label for="graduate">When will you graduate:</label>
        <input type="date" id="graduate" onchange="myFunction( )" name="answerGraduate">
        <br>
        <label for="files">Upload your CV and other documents:</label>
        <input type="file" id="files"  onchange="myFunction( )"name="answerFiles" multiple><br><br>

      </fieldset>
      <center>
        <button type="submit" value="Submit">Submit</button>
        <button type="save" value="Save">Save</button>
        <button type="reset" value="Reset">Reset</button>
      </center>
    </form>
  </form>
  </head>
  <script src="jsfile.js"></script>
</body>

</html>
