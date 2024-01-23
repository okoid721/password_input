let eyeicon = document.getElementById("eyeicon")
let password = document.getElementById("password")

eyeicon.addEventListener("click", function(){
    if(password.type == "password"){
        password.type="text";
    }else{
        password.type="password"
    }
});