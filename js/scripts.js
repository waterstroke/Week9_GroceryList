$(document).ready(function() {

  $("#blanks form").submit(function(event) {
    var groceries = ["item1","item2","item3","item4","item5","item6"];
    var groceriesInput = [];
    //Where does this go? the sort function
     // var alphabet = groceries.sort("");
      groceries.forEach(function(grocery) {
        var userInput = $("input#" + grocery).val();
        var allCaps = userInput.toUpperCase("");
        groceriesInput.push(allCaps);

        // console.log(grocery);
          // groceries.sort();
        // $("." + grocery).text(allCaps)
     });
     groceriesInput.sort();
     $(".item1").text(groceriesInput);
     groceriesInput.forEach(function(grocery) {
       $("#list").append("<li>" + grocery + "</li>");
     });

         $("form").hide();

         $("#list").show();


    event.preventDefault();
  });
 });

// var groceries = ["item1","item2","item3","item4","item5","item6"];
// var uppers = groceries.map(function(x) { return x.toUpperCase(); });



// var upperCase = groceries.map(function(groceries) {
//   return groceries.toUpperCase();
// });
// groceries.sort();







// var NewFavs = blanks.slice(1,3);
// NewFavs.push("favCandy");

// var total = 0;
// var friends =  ["Sarah", "GG", "Josh", "Ruhie"];
// friends.forEach(function(friend) {
//   total += friend;
// });
// alert(total); //This adds them like they were combined
// //as one not what i was going for
//
// var friends = ["Sara", "GG", "Josh", "Rushie"];
// friends.forEach(function(friend) {
// alert("It worked Im amazing and so is," + friend);
// });
//
// var total = 0
// var numbers = [1,2,3,4,5,6];
//
// numbers.forEach(function(number) {
//   total += number;
// });
