$(()=>{
  //clases
  const header = $("header")

  header.addClass("header")
  header.addClass("equivocada")
  header.removeClass("equivocada")

  header.click(()=>{
    header.toggleClass("select")
  })

  //css
  $("input").change(function(){
    
    $("input").css({
      "background":"#000",
      "color":"#fff"
    })
    console.log($("input").width()) // puro contenido 
    console.log($("input").innerWidth()) // mas padding
    console.log($("input").outerWidth()) // mas borde
  })

})