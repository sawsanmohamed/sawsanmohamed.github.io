function Validation() {
    var a = document.forms["Formfrom"]["fname"].value;
    if (a == "") {
        alert(" must be filled out");
        return false;
    }
    var b = document.forms["Formfrom"]["lname"].value;
    if (b == "") {
        alert(" must be filled out");
        return false;
    }
    var c = document.forms["Formfrom"]["email"].value;
    if (c == "") {
        alert(" must be filled out");
        return false;
    }
    var d = document.forms["Formfrom"]["phone"].value;
    if (d == "") {
        alert(" must be filled out");
        return false;
    
    }
    var e = document.forms["Formfrom"]["user"].value;
    if (e == "") {
        alert(" must be filled out");
        return false;
    }
    
    var f = document.forms["Formfrom"]["password"].value;
    if (f == "") {
        alert(" must be filled out");
        return false;
    }

    return (true);
}

function save() {
    var c = document.forms["Formfrom"]["answeremail"].value;
    if (c == "") {
        alert("Email must be filled out");
        return false;
    }
    username = c.split('@')[0];
    alert("The application of " + username + " is saved!");
}

function inOrder() {
    let input1 = document.getElementsByName("fname")
    let input2 = document.getElementsByName("lname")
    let input3 = document.getElementsByName("answerurl")
    let input4 = document.getElementsByName("phone")
    let input5 = document.getElementsByName("answeremail")
    let input6 = document.getElementsByName("user")
    let input7 = document.getElementsByName("password")
    let input8 = document.getElementsByName("answerDegre")
    let input9 = document.getElementsByName("answerGraduate")
    let input10 = document.getElementsByName("answerFiles")

    if (input1 == "" && input2 != "") {
        alert("Please fill options in a Sequence");
    } else if (input2 == "" && input3 != "") {
        alert("Please fill options in a Sequence");
    } else if (input3 == "" && input4 != "") {
        alert("Please fill options in a Sequence");
    } else if (input4 == "" && input5 != "") {
        alert("Please fill options in a Sequence");
    } else if (input4 == "" && input5 != "") {
        alert("Please fill options in a Sequence");
    } else if (input5 == "" && input6 != "") {
        alert("Please fill options in a Sequence");
    } else if (input6 == "" && input7 != "") {
        alert("Please fill options in a Sequence");
    } else if (input7 == "" && input8 != "") {
        alert("Please fill options in a Sequence");
    } else if (input8 == "" && input9 != "") {
        alert("Please fill options in a Sequence");
    } else if (input9 == "" && input10 != "") {
        alert("Please fill options in a Sequence");
    }
}