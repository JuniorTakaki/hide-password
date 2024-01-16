let password = document.getElementById ("password")
let eyeicon = document.getElementById ("eyeicon")

eyeicon.onclick = function(){
    if(password.type == "password"){
        password.type ="text";
    }else{
        password.type = "password";
    }
}