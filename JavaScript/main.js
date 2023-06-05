function login(){
    var user, password;
   
    user = document.getElementById("usuario").value;
    password = document.getElementById("contrasena").value;

    if (user == "prueba" && password == "1234"){
        window.location = "index2.html";
    } else {
        alert("Contraseña o Usuario incorrectos.")
    }
}