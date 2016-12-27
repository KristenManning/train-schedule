
$(document).ready(function() {
  

  // $(document).on("click", ".btn-success", function() {

  //   });

  // When a gif is clicked, swap the data-src2 value with the img source
  // src = still & src2 = animated --> src = animated & src2 = still, or vice versa 
  // $(document).on("click", "img", function() {

  // });

  // When a new emotion is submitted, add it to the emotions array and run the display buttons function again to display it  
  $(".btn-default").on("click", function() {
    var now = moment().format('HH:mm');
    var train = $("#u_train").val().trim();
    var destination = $("#u_destination").val().trim();
    var first_time = $("#u_first_time").val().trim();
    var first_time_con = moment(first_time, "HH:mm").subtract(1, "years");
    var frequency = $("#u_frequency").val().trim();

    var diff_in_time = moment().diff(moment(first_time_con), "minutes");
    var min_away = frequency - (diff_in_time % frequency);
    var next_time = moment(now, "HH:mm").add(min_away, "minutes").format("HH:mm");
    


    $("tbody").append('<tr><td>'+train+'</td><td>'+destination+'</td><td>'+frequency+'</td><td>'+next_time+'</td><td>'+min_away+'</td></tr>');

    return false
    
    
  });
  
})       
