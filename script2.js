 


function Text() {
    console.log("button Clicked");
    var btn = document.createElement("BUTTON");
    var t = document.createTextNode("yOu hAvE g0nE tOo fR");
    
    btn.appendChild(t);
    document.body.appendChild(btn);
    $( document ).ready(function() {
    
    var Munchkins = "<button> The One </button>"
    
    $("body").append(Munchkins);
    
    $("button").click(function(){
        alert("haCker");
         $("html").toggleClass("Cr");
         $("img").slideToggle();
        var btn = document.createElement("BUTTON");
        var t = document.createTextNode("yOu hAvE g0nE tOo fR");
        btn.appendChild(t);
        document.body.appendChild(btn);
          $("button").toggleClass("r");
            $(".r").click(function(){
            alert("haCker");
            var btn = document.createElement("BUTTON");
            var t = document.createTextNode("yOu hAvE g0nE tOo fR");
            btn.appendChild(t);
            document.body.appendChild(btn);
              $("html").toggleClass("Cr");
                $("img").slideToggle();
          })
        
    })
    console.log("AYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY");
});

}

