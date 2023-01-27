$(()=>{
  //? ATRIBUYOS
  const logo = $("#logo")
  $(logo).attr("src", "https://cdn.iconscout.com/icon/free/png-256/jquery-10-1175155.png")
  $(logo).attr("odio-jQuery", "claro que sí papu")
  $(logo).removeAttr("odio-jQuery")

  /////////////////////////////////
  //?  HTML TEXT

  $("#p1").text("Hola papu  ")
  $("#p2").html("Mejores que jQuery: <br> <li> React </li> <li> Vue </li> ")


  //? FORM 
  $("form").submit((e)=>{
    e.preventDefault()
  })
  ////////////////////
  //? AGREGAR HIJOS 
  // append - final   prepend - principio
  // before - antes   after - despues 

  const setContent= () =>{
    $("#p3").append(`<li> ${ $("input").val() } </li>`)
  }

  $("#p3").before(" <br> -------- <br>")
  $("#p3").after(" <br> -------- <br>")

  $("form").submit(setContent)



})