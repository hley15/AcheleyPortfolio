var p1score=0
    var p2score=0
    var tie=0
    var turn=1

    function checkwinner(){
   if ($(".row-1 .box.X").length ===3 ||
    $(".row-2 .box.X").length ===3 ||
    $(".row-3 .box.X").length ===3 ||
    $(".col-1.X").length ===3 ||
    $(".col-2.X").length ===3 ||
    $(".col-3.X").length ===3 ||
    $("#1").hasClass("X")
    && $("#5").hasClass("X")
    && $("#9").hasClass("X") ||
     $("#3").hasClass("X")
     &&$("#5").hasClass("X")
     &&$("#7").hasClass("X"))
{
     console.log("P1 Win");
     p1score++;
     $("#p1score").text(p1score)
    }}

    function checkwinner(){
       if ($(".row-1 .box.0").length ===3 ||
        $(".row-2 .box.0").length ===3 ||
        $(".row-3 .box.0").length ===3 ||
        $(".col-1.0").length ===3 ||
        $(".col-2.0").length ===3 ||
        $(".col-3.0").length ===3 ||
        $("#1").hasClass("0")
        && $("#5").hasClass("0")
        && $("#9").hasClass("0") ||
         $("#3").hasClass("0") 
         && $("#5").hasClass("0")
         && $("#7").hasClass("0"))
        { 
     console.log("P2 Win");
     p2score++;
     $("#p2score").text(p2score)
    }}

    $(".box").click(function(){
        if (turn===1){
        $(this).text("X");
        $(this).addClass("X")
        turn=2;
        $("#turn").text(2)
        checkwinner();
        }
        else   
        {
    $(this).text("0")
    $(this).addClass("0")
    turn=1
    $("#turn").text(1)
    checkwinner();
        }
    });

    function clear() {
    $(".box").empty();
    $(".X").removeClass("X")
    $(".0").removeClass("0")
    clear()
    }

    function checkTie(){
        if ($(".X").length + $(".0").length ==9){
            tie++
            $("#tie").text(tie)
            clear()
        }
        else
        checkTie()
        
    }

        


    

