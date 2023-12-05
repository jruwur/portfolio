var oculto = true;
var oculto2 = true;
var oculto3 = true;
var oculto4 = true;
var oculto5 = true;
var oculto6 = true;
function verContenido(){
  if(oculto == true){
    gsap.fromTo(".OcultarContenido",{
      duration : 2,
      opacity: 0.5,
    },{
      duration : 2,
      ease: "bounce",
      opacity: 1,
      display:"block"
    })
    document.getElementById("visibilidad").innerHTML = "ocultar";
    oculto = false;
  }else
  if(oculto == false){
    gsap.fromTo(".OcultarContenido",{
      duration : 2,
      opacity: 0.5,
    },{
      duration : 2,
      ease: "back",
      opacity: 0,
      display:"none"
    })
    document.getElementById("visibilidad").innerHTML = "Ver";
    oculto = true;
  }
}
  function verContenido2(){
    if(oculto2 == true){
      gsap.fromTo(".OcultarContenido2",{
        duration : 2,
        opacity: 0.5,
      },{
        duration : 2,
        ease: "bounce",
        opacity: 1,
        display:"block"
      })
      document.getElementById("boton2").innerHTML = "ocultar";
      oculto2 = false;
    }else
    if(oculto2 == false){
      gsap.fromTo(".OcultarContenido2",{
        duration : 2,
        opacity: 0.5,
      },{
        duration : 2,
        ease: "back",
        opacity: 0,
        display:"none"
      })
      document.getElementById("boton2").innerHTML = "Ver";
      oculto2 = true;
    }
  }
  function verContenido3(){
    if(oculto3 == true){
      gsap.fromTo(".OcultarContenido3",{
        duration : 2,
        opacity: 0.5,
      },{
        duration : 2,
        ease: "bounce",
        opacity: 1,
        display:"block"
      })
      document.getElementById("boton3").innerHTML = "ocultar";
      oculto3 = false;
    }else
    if(oculto3 == false){
      gsap.fromTo(".OcultarContenido3",{
        duration : 2,
        opacity: 0.5,
        ease: "elastic.out(1,0.3)"
      },{
        duration : 2,
        ease: "back",
        opacity: 0,
        display:"none"
      })
      document.getElementById("boton3").innerHTML = "Ver";
      oculto3 = true;
    }
  }
  function verContenido4(){
    if(oculto4 == true){
      gsap.fromTo(".OcultarContenido4",{
        duration : 1,
        opacity: 0.5,
      },{
        duration : 2,
        ease: "bounce.out",
        opacity: 1,
        display:"block"
      })
      document.getElementById("boton4").innerHTML = "ocultar";
      oculto4 = false;
    }else
    if(oculto4 == false){
      gsap.fromTo(".OcultarContenido4",{
        duration : 2,
        opacity: 0.5,
        ease: "elastic.out(1,0.3)",
      },{
        duration : 2,
        opacity: 0,
        display:"none",
        
      })
      document.getElementById("boton4").innerHTML = "Ver";
      oculto4 = true;
    }
  }
  function verContenido5(){
    if(oculto5 == true){
      gsap.fromTo(".OcultarContenido5",{
        duration : 1,
        opacity: 0.5,
      },{
        duration : 2,
        ease: "bounce.out",
        opacity: 1,
        display:"block"
      })
      document.getElementById("boton5").innerHTML = "ocultar";
      oculto5 = false;
    }else
    if(oculto5 == false){
      gsap.fromTo(".OcultarContenido5",{
        duration : 2,
        opacity: 0.5,
        ease: "elastic.out(1,0.3)",
      },{
        duration : 2,
        opacity: 0,
        display:"none",
        
      })
      document.getElementById("boton5").innerHTML = "Ver";
      oculto5 = true;
    }
  }
  function verContenido6(){
    if(oculto6 == true){
      gsap.fromTo(".OcultarContenido6",{
        duration : 1,
        opacity: 0.5,
      },{
        duration : 2,
        ease: "bounce.out",
        opacity: 1,
        display:"block"
      })
      document.getElementById("boton6").innerHTML = "ocultar";
      oculto6 = false;
    }else
    if(oculto6 == false){
      gsap.fromTo(".OcultarContenido6",{
        duration : 2,
        opacity: 0.5,
        ease: "elastic.out(1,0.3)",
      },{
        duration : 2,
        opacity: 0,
        display:"none",
        
      })
      document.getElementById("boton6").innerHTML = "Ver";
      oculto6 = true;
    }
  }