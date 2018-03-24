$(document).ready(function() {
 
    // Getting jQuery references to the post body, title, form, and category select
    var itemName = $("#itemName");
    var itemColor = $("#color");
    var itemType = $("#itemType");
    var itemWarmth = $("#itemWarmth");
    var itemPicture = $("#itemPic");


    
    // Giving the postCategorySelect a default value
    // postCategorySelect.val("Personal");
    // Adding an event listener for when the form is submitted
    $("#add-btn").on("click", function handleFormSubmit(event) {
      event.preventDefault();
      console.log("joe");
      // Wont submit the post if we are missing a body or a title
      if (!itemName.val().trim() || !itemColor.val().trim()) {
        return;
      }
      // Constructing a newPost object to hand to the database
      var newClothes = {
        itemName: itemName.val().trim(),
        type: itemType.val(),
        color: itemColor.val(),
        warmth: itemWarmth.val(),
        picture: itemPicture.val()
      };

      var newObj = {
        name: itemType.val(),
        type: itemType.val().trim(),
        type: itemType.val().trim()
      }
  
      console.log(newClothes);

    $.post("/api/clothes", newClothes)
    .done(function(arg){
       putItemToTable(newObj,takeMeToTheList);
    });
    
   function putItemToTable(obj, cb){
      var newItem = '<tr><td>'+ obj.name +'</td></tr><td>'+obj.type+'</td><img class="img-circle" width="90" src"'+obj.picture+'"/>';
      $('#itemList').append(newItem);
      cb();
    }

   function takeMeToTheList() {
    window.location.href = "/basic_table.html";
   }

    });

  });
  
  