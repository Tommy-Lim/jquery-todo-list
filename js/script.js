$("#container-input").on("click", ".inputButton", function(){
  addItem();
});

$("#inputBox").on("keypress", function(e){
  if(e.which==13||e.keyCode==13){
    addItem();
  }
});

$("#container-entries").on("click", ".deleteButton", function(){
  removeItem($(this));
});


var addItem = function(){
  if($('#inputBox').val()===""){
    //do nothing
  } else{
    var divToAdd = $("<div class='entry'><div class='entryText'></div><button class='deleteButton'>Done</button></div>");
    var textToAdd = $("#inputBox").val();
    $("#container-entries").prepend(divToAdd);
    $("#container-entries .entryText").first().text(textToAdd);
    $("#inputBox").val("");
    $("#inputBox").focus();
  }
};

var removeItem = function(event){
  event.parent().fadeOut();
};
