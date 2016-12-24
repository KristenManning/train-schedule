
$(document).ready(function() {
  

  // $(document).on("click", ".btn-success", function() {

  //   });

  // When a gif is clicked, swap the data-src2 value with the img source
  // src = still & src2 = animated --> src = animated & src2 = still, or vice versa 
  // $(document).on("click", "img", function() {

  // });

  // When a new emotion is submitted, add it to the emotions array and run the display buttons function again to display it  
  $(".btn-default").on("click", function() {
    var train = $("#u_train").val();
    var destination = $("#u_destination").val();
    var first_time = $("#u_first_time").val();
    var frequency = $("#u_frequency").val();

    $("tbody").append('<tr><td>'+train+'</td><td>'+destination+'</td><td>'+first_time+'</td><td>'+frequency+'</td></tr>');

    return false
    
    
  });
  
})       
