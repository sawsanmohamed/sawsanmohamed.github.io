<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="asscs" href="/asscs.css">
    <title>finalProject</title>

  <style> </style>
</head>

<body>
  <h2>Internship Application</h2>


  <p>Please fill out the form below and hit submit to be considered for the internship</p>
  <form action="/action_page.php" name="Formfrom" class="fh">
    <span class="cont">
    <fieldset>
      <legend class="pp">Personalia:</legend>
      <label for="fname">First name:</label>
      <input  type="text" id="fname" name="fname" required><br>
      <label for="lname">Last name:</label>
      <input  type="text" id="lname" name="lname" required><br>
      <label for="url">Personal Website:</label>
      <input  name="answerurl" type="url" id="url" pattern="https://.*" size="30" required><br>
      <label for="phone">Enter your phone number:</label>

      <input  type="tel" id="phone" name="phone" placeholder="123-45-678" required><br>

      <label for="email">Enter your email:</label>

      <input  name="answeremail" type="email" id="email" size="30" required>
      <br>
      Username: <input   type="text" name="user" required><br>
      Password: <input   type="password" name="password" required><br>
    </span>
    </fieldset>
  
    <form action="/action_page.php" method="post">
      <fieldset>
        <legend class="post">Education</legend>
        <label for="Degre">Degree:</label>
        <input list="Degree" id="Degre"  name="answerDegre" required/>
        <datalist id="Degree">
          <option value="Associate">
          <option value="Bachelo">
          <option value="Masters">
          <option value="Ph.D.">
          <option value="other">
        </datalist>
        <br>
        <label for="graduate">When will you graduate:</label>
        <input type="date" id="graduate" name="answerGraduate" max="2022-12-31" required>
        <br>
        <label for="files">Upload your CV and other documents:</label>
        <input type="file" id="files" name="answerFiles" multiple><br><br>

      </fieldset>
      <center>
        <button type="submit"  onclick=" Validation()" value="Submit">Submit</button>
        <button onclick="saved()">Save</button>
        <button type="reset" value="Reset">Reset</button>
      </center>
    </form>
  </form>
  </head>
  <script src="jsfile.js"></script>
</body>

</html>
