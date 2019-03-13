$(window).on("load", function () {
   
    $("#cardbody").hide();
    $("#items").focus();
   
    console.log("imal chandika");
   
  });

  $("#items").click(function () {
    $("#cardbody").show();
    $("#items").hide();
    $("#items1").focus();
    $("#items3 #colorpickers").hide();
    // $("#cardmain3").css("margin-bottom","0px","important");
  });


  $("#items1").keydown(function (event) {
    console.log("dwqdwq");
    if (event.keyCode == 13) {
        var enteredText = $(this).val();
        var append = `<div class="row">
                       
                        <div class="col-10 noPadding input-group-sm imal"  style="margin-left: 20px !important">
                            <input value="${enteredText}" type="text" class="form-control inputNoBoarder noPadding imal">
                        </div>
                       
                    </div>`;

        $("#lineitemlist").append(append);
        $(this).val("");
        // console.log("The Word You Enter is :" + enteredText);
    }
});
 


var $container = $('.packery');

$container.packery({
    columnWidth: 10,
    //rowHeight: 80
});
$container.find('.item').each(makeEachDraggable);

function makeEachDraggable(i, itemElem) {
    // make element draggable with Draggabilly
    var draggie = new Draggabilly(itemElem);
    // bind Draggabilly events to Packery
    $container.packery('bindDraggabillyEvents', draggie);
}


$("#closeBtn").click(function () {

  var title = $("#title").val();

  var titleHtml = `<div class="imal item card shadow p-3 mb-5 rounded" style="border-radius: 8px !important;background-color:white">
                          <div class="input-group mb-3 inputNoBoarder imal">
                              <input type="text" class="form-control inputNoBoarder imal"value="${title}">
                          </div>
                      `;

  $("#lineitemlist").find(".col-10 input").each(function () {

      var todoItem = $(this).val();

      titleHtml = titleHtml + `  <div class="row">
         
          <div class="col-10 noPadding input-group-sm imal">
              <input value="${todoItem}" type="text" class="form-control inputNoBoarder noPadding imal">
          </div>
      </div>`;

  });

  titleHtml = titleHtml + '</div>';

  var $titleHtml = $(titleHtml);

  $container.append($titleHtml).packery('appended', $titleHtml);
  $titleHtml.each(makeEachDraggable);

  $("#title").val("");
  $("#lineitemlist").children().remove();

////////////////////////////////////////////////
  $("#items").show();
  $("#cardbody").hide();
  $("#items").focus();

});

$("#dr1c1").click(function(){
  $(".card-body ,  #a, #b, #title, #items,#closeBtn,#items1,#cardmain3,.imal").css("background-color", 'white');
 
});

$("#dr1c2").click(function(){
  $(".card-body ,  #a, #b, #title, #items,#closeBtn,#items1,#cardmain3,.imal").css("background-color", 'rgb(242, 139, 130)');
 
});

$("#dr1c3").click(function(){
  $(".card-body ,  #a, #b, #title, #items,#closeBtn,#items1,#cardmain3,.imal").css("background-color", 'rgb(251, 188, 4)');
 
});

$("#dr1c4").click(function(){
  $(".card-body ,  #a, #b, #title, #items,#closeBtn,#items1,#cardmain3,.imal ").css("background-color", 'rgb(255, 244, 117)');
 
});

$("#dr2c1").click(function(){
  $(".card-body ,  #a, #b, #title, #items,#closeBtn,#items1,#cardmain3,.imal").css("background-color", 'rgb(204, 255, 144)');
 
});

$("#dr2c2").click(function(){
  $(".card-body ,  #a, #b, #title, #items,#closeBtn,#items1,#cardmain3,.imal ").css("background-color", 'rgb(167, 255, 235)');
 
});

$("#dr2c3").click(function(){
  $(".card-body ,  #a, #b, #title, #items,#closeBtn ,#items1,#cardmain3,.imal").css("background-color", 'rgb(203, 240, 248))');
 
});

$("#dr2c4").click(function(){
  $(".card-body ,  #a, #b, #title, #items,#closeBtn,#items1,#cardmain3,.imal ").css("background-color", 'rgb(174, 203, 250)');
 
});

$("#dr3c1").click(function(){
  $(".card-body ,  #a, #b, #title, #items,#closeBtn,#items1,#cardmain3,.imal ").css("background-color", 'rgb(215, 174, 251)');
 
});

$("#dr3c2").click(function(){
  $(".card-body ,  #a, #b , #title, #items ,#closeBtn,#items1,#cardmain3,.imal").css("background-color", 'rgb(253, 207, 232)');
 
});

$("#dr3c3").click(function(){
  $(".card-body ,  #a, #b, #title, #items,#closeBtn ,#items1,#cardmain3,.imal").css("background-color", 'rgb(230, 201, 168)');
 
});
$("#dr3c4").click(function(){
  console.log("imal");
  $(".card-body ,  #a, #title, #items , #b,#closeBtn,.imal,#items1,#cardmain3").css("background-color", "rgb(232, 234, 237)","important");
 
});

$("#items3").mouseover(function(){
  $("#colorpickers").show();
});

$("#items3").mouseout(function(){
  $("#colorpickers").hide();
});

//colour border
$("#items3 #dr3c4").mouseover(function(){
  $(this).css("border","2px solid silver" )
});

$("#items3 #dr3c4").mouseout(function(){
  $(this).css("border","0px solid silver" )
});

$("#items3 #dr3c1").mouseover(function(){
  $(this).css("border","2px solid silver" )
});

$("#items3 #dr3c1").mouseout(function(){
  $(this).css("border","0px solid silver" )
});
$("#items3 #dr3c2").mouseover(function(){
  $(this).css("border","2px solid silver" )
});

$("#items3 #dr3c2").mouseout(function(){
  $(this).css("border","0px solid silver" )
});
$("#items3 #dr3c3").mouseover(function(){
  $(this).css("border","2px solid silver" )
});

$("#items3 #dr3c3").mouseout(function(){
  $(this).css("border","0px solid silver" )
});

$("#items3 #dr2c4").mouseover(function(){
  $(this).css("border","2px solid silver" )
});

$("#items3 #dr2c4").mouseout(function(){
  $(this).css("border","0px solid silver" )
});

$("#items3 #dr2c1").mouseover(function(){
  $(this).css("border","2px solid silver" )
});

$("#items3 #dr2c1").mouseout(function(){
  $(this).css("border","0px solid silver" )
});
$("#items3 #dr2c2").mouseover(function(){
  $(this).css("border","2px solid silver" )
});

$("#items3 #dr2c2").mouseout(function(){
  $(this).css("border","0px solid silver" )
});
$("#items3 #dr2c3").mouseover(function(){
  $(this).css("border","2px solid silver" )
});

$("#items3 #dr2c3").mouseout(function(){
  $(this).css("border","0px solid silver" )
});

$("#newdiv").click(function(){
  console.log("IMAL");
  $("#items").show();
  $("#cardbody").hide();
  $("#items").focus();
})

