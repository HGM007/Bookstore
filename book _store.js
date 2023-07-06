// validateform
function vform()
{
    var n = document.getElementById("Name");
    var e = document.getElementById("email");
    var p =  document.getElementById("phone_no");
    var name=/(^[a-zA-Z\s]+$)/;
    var email=/^([A-za-z0-9\.-]+)@([A-za-z0-9-]+).([a-z]{2,3})$/;
    var phone=/^([7-9][0-9]{9}$)/;
    if(n.value == "" || e.value == "" || matchMedia.value == "")
    {
        alert("Name & Email must be filled out");
        x.style.border="2px solid red";
        e.style.border="2px solid red";
        m.style.border="2px solid red";
            return false;
    }
    else if(name.test(n.value))
    {
        if(email.test(e.value))
        {
            if(phone.test(p.value))
            {
                alert("data submitted");
                return true;
            }
            else{
                alert("Enter valid Mobile");
                m.style.border="2px solid red"
                document.getElementById("label3").style.visibility="visible";
                return false;
            }
        }
        else{
            alert("Enter valid Email");
            e.style.border="2px solid red"
            document.getElementById("label2").style.visibility="visible";
            return false;
            }
    }
    else {
        alert("Enter valid Name");
        n.style.border="2px solid red"
        document.getElementById("label1").style.visibility="visible";
        return false;
        }
    
}