//Seleciono el nodo de boton
let btn = document.querySelectorAll(".close");

//Recorro todos los botones
btn.forEach(function(boton){
  //Agrego un evento al boton al hacer click
  boton.addEventListener("click",function(ev){
    //Elimino el comportamiento por defecto
    ev.preventDefault();
    //Selecciono el nodo
    let content = document.querySelector(".content");
    //Elimino la classe de animacion
    content.classList.remove("animate__backInUp");
    content.classList.remove("animate__animated");
    //Agrego la nueva animacion
    content.classList.add("animate__fadeOutUp");
    content.classList.add("animate__animated");
    //Seteo el tiempo de espera para el retorno a la pag principal
    setTimeout(function(){
      //Elijo la ruta de redireccion
      location.href = "/boletines";
    },700);

  })
})
