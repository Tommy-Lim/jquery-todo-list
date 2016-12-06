$("#container-input").on("click", ".inputButton", function(){
  //form submit could've been another way to handle this with addition of prevent default
  addItem();
});

$("#inputBox").on("keypress", function(e){
  if(e.which==13||e.keyCode==13){
    //add item because enter was pressed
    addItem();
  } else{
    //do nothing because enter not pressed
  }
});

$("#container-entries").on("click", ".deleteButton", function(){
  //first reference existing container-entries, then reference a sub unit .deleteButton because OR add event handler for each new object
  removeItem($(this));
});

var addItem = function(){
  if($('#inputBox').val()===""){
    //do nothing because entry box empty
  } else{
    //create the entry, but don't append the input because it would be HTML at this point
    var divToAdd = $("<div class='entry'><i class='fa fa-arrows-v' aria-hidden='true'></i><div class='entryText'></div><button class='deleteButton'>Done</button></div>");
    var textToAdd = $("#inputBox").val();

    //add entry to top of container-entries
    $("#container-entries").prepend(divToAdd);

    //add the text to the entry, notice this is now text and not HTML, disabling script attack
    $("#container-entries .entryText").first().text(textToAdd);

    //reset and focus back on the input box
    $("#inputBox").val("");
    $("#inputBox").focus();
  }
};

var removeItem = function(event){
  event.parent().fadeOut();
};

$("#container-entries").sortable();
