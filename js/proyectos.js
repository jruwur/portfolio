if(sessionStorage){
  var usr = sessionStorage.getItem("usuario");
}else{
  sessionStorage.setItem("usuario", "invitado");
}
var usuarioActivo = sessionStorage.getItem("usuario");
var Newuser = {};//variable para almacenar nuevos usuarios
var AllUsers = [];//variable para almacenar a todos los usuarios
var registros = localStorage.getItem("Registros");


if (registros) {//si encuentra registros existentes los desencripta de JSON a txt
  AllUsers = JSON.parse(registros);
} else{
  var admon = {//variable base de usuario admin
    "nombres": "admin",
    "apellidos": "confidential",
    "correo": "admin@correo.com",
    "contraseña": "poposhi18"
};
AllUsers.push(admon);
localStorage.setItem("Registros", JSON.stringify(AllUsers));
}
var tl = gsap.timeline();
gsap.registerPlugin(ScrollTrigger) 
gsap.from(".container1", { duration: 3, y: -50, opacity: 0, ease: "bounce" });
gsap.from(".container1 h1, .container1 h2, .container1 p, .container1 .cta , .container1 .imagenPrincipal", { duration: 3, y: 50, opacity: 0, stagger: 0.2, ease: "bounce" });

if(usuarioActivo != "invitado" && usuarioActivo != null && usuarioActivo != undefined){
  goToProyects2();
  alert("Bienvenido " + usuarioActivo);
}
function goToRegister(){
  tl.to(".container3",{
    duration : 1, y:-100, opacity: 0, ease: "power2.out", display: "none"
  })
  tl.fromTo(".container4",{y:-100},{
    duration: 2, y: 0, opacity: 1, ease: "back", display: "inline-block"
  })

}
function goToLogin(){
  tl.to(".container4",{
    duration : 1, y:0, opacity: 0, ease: "power2.out", display: "none"
  })
  tl.fromTo(".container3",{y:-100},{
    duration: 2, y: 0, opacity: 1, ease: "back", display: "inline-block"
  })
}
function goToProyects(){
  let usuarioActivo = sessionStorage.getItem("usuario");
  if(usuarioActivo != "invitado" && usuarioActivo != null && usuarioActivo != undefined){
    tl.to(".container3",{
      duration : 1, y:0, opacity: 0, ease: "power2.out", display: "none"
    })
    tl.fromTo(".container5",{y:-100},{
      duration: 2, y: 0, opacity: 1, ease: "back", display: "inline-block"
    })
   
  }
}
function goToProyects2(){
  
    tl.to(".container1",{
      duration : 1, y:0, opacity: 0, ease: "power2.out", display: "none"
    })
    tl.fromTo(".container5",{y:-100},{
      duration: 2, y: 0, opacity: 1, ease: "back", display: "inline-block"
    })
   
  
}
function logOut(){
  sessionStorage.clear();
  tl.to(".container5",{
    duration : 1, y:0, opacity: 0, ease: "power2.out", display: "none"
  })
  tl.fromTo(".container1",{y:-100},{
    duration: 2, y: 0, opacity: 1, ease: "back", display: "inline-block"
  })
}
function register(){
  event.preventDefault();
  let name=document.getElementById("name").value;
  let email=document.getElementById("email").value;
  let pass=document.getElementById("pass").value;

  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if(name && email.match(validRegex) && pass){
    if(usuarioRepetido()){
      alert('Usuario repetido');
    }else{
      Newuser = {//formato para nuevo usuario
        "nombre": name,
        "correo": email,
        "contraseña": pass
    };
    //Registro de nuevo usuario + alerta + animación
    AllUsers.push(Newuser);
    localStorage.setItem("Registros", JSON.stringify(AllUsers));
    alert("Usuario " + name + " registrado correctamente");
    goToLogin();
    }
  }else {
    alert("completa los campos correctamente")
  }
}
function login(){//función para iniciar sesión
  //variables de los campos de iniciar sesión
  event.preventDefault();
  var LoginEmail = document.getElementById("emailLogin").value;
  var LoginPass = document.getElementById("passLogin").value;
  
  if(LoginEmail && LoginPass){//validaciones
      if(LoginEmail === "admin@correo.com" && LoginPass === "poposhi18"){
          alert("Bienvenido ADMIN");
      }else if(validarUsuario()){//usuario aceptado + alert + navegación
          sessionStorage.clear();
          sessionStorage.setItem("usuario", LoginEmail);
          alert("Acceso correcto!");
          goToProyects();
      }else{
          alert("Credenciales invalidas papi")
      }
  }
  else{
  alert("Rellena primero los campos")
  }
  }
  
function validarUsuario (){//validamos usuario dentro de los registros
  var LoginEmail = document.getElementById("emailLogin").value;
 var LoginPass = document.getElementById("passLogin").value;
  for(var i = 0; i < AllUsers.length; i++){
      if(LoginEmail == AllUsers[i].correo && LoginPass == AllUsers[i].contraseña){
          return true;
      }
  }
  return false;
}
function usuarioRepetido() {//validar que el usuario no sea uno ya existente
  for (var i = 0; i < AllUsers.length; i++) {
      if (AllUsers[i].correo === document.getElementById("email").value) {
          return true;
      }
  }
  return false;
}
function Next() {
tl.to(".container1", {duration:2, x: 100, opacity: 0, ease: "power2.out" ,display: "none"})
tl.to(".container3",{
     duration: 2, y: -50, opacity: 1, ease: "back", display: "inline-block",
      })
gsap.fromTo(".background",
    {
        duration:2,
        opacity: 0.5
    },
{
duration: 2,
opacity: 1,
ease:"back",
backgroundImage :'url("/img/home.png")' ,
backgroundSize: "100% 100%"
})
}


