$(()=>{

  const div = $("#btn").parent() // seleccionar padre
  //const div = $("#btn").parent() // seleccionar todos los ancestros

  div.css({
    "border":"2px solid red"
  })


  $("#select").click(()=>{
    // eliminar elelemento hijo seleccionado en input
    $("#content").children().eq( Number($("#input").val() -1) ).remove()
  })

  $("#input").on("input",()=>{
    $("#select").children().eq(0).text( $("#input").val() )
  })



})